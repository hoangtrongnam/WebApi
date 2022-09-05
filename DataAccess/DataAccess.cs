using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using WebApi.Persistence;

namespace DataAccess
{
    public interface IDataAccess
    {

    }
    public class DataAccess : DbConnectionRepositoryBase, IDataAccess
    {
        private readonly IConfiguration _config;
        public DataAccess(IConfiguration configuration, IDbConnectionFactory dbConnectionFactory)
           : base(dbConnectionFactory)
        {
            _config = configuration;
        }
        public async Task<object> excu(string QueryString, string Pass)
        {
            var connection = _conn.ConnectionString.ToString();
            using (SqlConnection _connection = new SqlConnection(connection))
            {
                _connection.Open();
                var cmd = new SqlCommand(QueryString, _connection);

                //cmd.CommandType = CommandType.StoredProcedure;
                //cmd.Parameters.Add(new SqlParameter("@EmployeeID", employeeID));
                //cmd.CommandTimeout = 5;
                cmd.Transaction = _connection.BeginTransaction();
                var t = "";
                try
                {
                    // Assign value here, AFTER starting the TX
                    var result = await cmd.ExecuteReaderAsync();
                    if (result.Read())
                    {
                        t = result.GetGuid(0).ToString();
                        t = result.GetString(1).ToString();
                        t = result.GetString(2).ToString();
                    }
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