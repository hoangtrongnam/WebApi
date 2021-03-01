using Microsoft.Extensions.Configuration;
using WebApi.Persistence;

namespace WebApi.Services.ProductService
{
    public interface IProductService
    {
    }
    public class ProductService : DbConnectionRepositoryBase, IProductService
    {
        private readonly IConfiguration _config;
        //private readonly IAccountingService _accountingService;
        public ProductService(IConfiguration configuration, IDbConnectionFactory dbConnectionFactory)
        : base(dbConnectionFactory)
        {
            _config = configuration;
        }
    }
}
