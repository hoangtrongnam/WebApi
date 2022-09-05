using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using WebApi.Persistence;

namespace WebApi.Services.AccountingService
{
    public interface IAccountingService
    {
        Task<bool> Login(string userId, string Pass);
    }
    public class AccountingService : DbConnectionRepositoryBase, IAccountingService
    {
        private readonly IConfiguration _config;
        //private readonly IAccountingService _accountingService;
        public AccountingService(IConfiguration configuration, IDbConnectionFactory dbConnectionFactory)
        : base(dbConnectionFactory)
        {
            _config = configuration;
        }

        public async Task<bool> Login(string userId, string Pass)
        {
            var connection = _conn.ConnectionString.ToString();
            using (SqlConnection _oracleConnection = new SqlConnection(connection))
            {
                _oracleConnection.Open();
                var cmd = new SqlCommand(@"SELECT TOP (1000) [Id]
                                          ,[Name]
                                          ,[Description]
                                          ,[Price]
                                          ,[PictureUrl]
                                          ,[ProductTypeId]
                                          ,[ProductBrandId]
                                      FROM[Ecommerce].[dbo].[Products]", _oracleConnection);

                //cmd.CommandType = CommandType.StoredProcedure;
                //cmd.Parameters.Add(new SqlParameter("@EmployeeID", employeeID));
                //cmd.CommandTimeout = 5;
                cmd.Transaction = _oracleConnection.BeginTransaction();
                var t = "";
                try
                {
                    // Assign value here, AFTER starting the TX
                    //var result = await cmd.ExecuteNonQueryAsync();
                    var result = cmd.ExecuteReader();
#if true
                    if (result.Read())
                    {
                        t = result.GetGuid(0).ToString();
                        t = result.GetString(1).ToString();
                        t = result.GetString(2).ToString();
                    }
#endif
                    //cmd.Transaction.Commit();
                }
                catch (SqlException ex)
                {
                    cmd.Transaction.Rollback();
                }
            }
            return true;
        }
    }
}
