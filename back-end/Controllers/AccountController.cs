using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Services.AccountingService;

namespace WebApi.Controllers
{
    [Route("api/v{version:apiVersion}")]
    [ApiVersion("1.0")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly IAccountingService _accountService;

        public AccountController(IConfiguration configuration, IAccountingService accountService)
        {
            _config = configuration;
            _accountService = accountService;
        }
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] Dictionary<string, string> param)
        {
            var userName = param["username"]?.ToString();
            var password = param["password"]?.ToString();

            var userInfo = await _accountService.Login(userName, password);
            if (userInfo != null)
            {
                var postion = new AcountModel();
                if (userName == "namht1")
                {
                    postion.Id = "208";
                    postion.UserId = "Nguyễn Sơn";
                    postion.Pass = "";
                }
                
                if (postion.UserId == null)
                {
                    return NotFound(new { code = "404", message = $"Người dùng không tồn tại mã chi nhánh." });
                }
                if (postion.Pass == null)
                {
                    return NotFound(new { code = "404", message = $"Người dùng chưa đăng ký phòng ban." });
                }
                //var menus = await _roleService.GetMenusAsync(roles);

                var accToken = await this.GenerateLocalAccessTokenResponse(new Dictionary<string, object>()
                    {
                        { ClaimTypes.Sid, postion.Id },
                        { ClaimTypes.NameIdentifier, postion.UserId },
                        { ClaimTypes.Name, postion.Pass },
                    });

                var data = new
                {
                    token = accToken,
                    info = new
                    {
                        id = postion.Id,
                        username = postion.UserId,
                        fullname = postion.Pass
                    },
                    //menus
                };
                return Ok(new { code = "LOGIN_OK", data, message = "Success" });
            }

            return NotFound(new { code = "LOGIN_NOT_FOUND", message = "Tên người dùng hoặc mật khẩu không chính xác." });
        }
        private async Task<string> GenerateLocalAccessTokenResponse(Dictionary<string, object> datas)
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Authentication:JwtBearer:SecurityKey"])); ;

            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var claims = datas.Select(s =>
                new Claim(s.Key, s.Value.ToString())).ToArray();

            var tokeOptions = new JwtSecurityToken(
                issuer: _config["Authentication:JwtBearer:Issuer"],
                audience: _config["Authentication:JwtBearer:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(500),
                signingCredentials: signinCredentials
            );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);

            return tokenString;
        }
    }
}
