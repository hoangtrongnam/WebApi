using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.OracleClient;
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
            var connection = _conn.ToString();
            using (OracleConnection _oracleConnection = new OracleConnection(connection))
            {
                _oracleConnection.Open();
                var cmd = new OracleCommand("ACCOUNT_PKG.GET_ACCOUNT_ID", _oracleConnection);
                cmd.CommandType = CommandType.StoredProcedure;

                var p_user_name = new OracleParameter("p_user_name", OracleType.Cursor);
                var p_pass = new OracleParameter("p_pass", OracleType.Cursor);
                var p_reflist = new OracleParameter("p_reflist", OracleType.Cursor);


                cmd.Parameters.Add(p_user_name).Direction = ParameterDirection.Output;
                cmd.Parameters.Add(p_pass).Direction = ParameterDirection.Output;
                cmd.Parameters.Add(p_reflist).Direction = ParameterDirection.Output;
                cmd.Transaction = _oracleConnection.BeginTransaction();
                try
                {
                    // Assign value here, AFTER starting the TX
                    var result = await cmd.ExecuteNonQueryAsync();
                    cmd.Transaction.Commit();
                }
                catch (OracleException ex)
                {
                    cmd.Transaction.Rollback();
                }
            }
            return true;
        }
    }
}
