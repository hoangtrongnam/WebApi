using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;
using System.IO;

namespace WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string rootdir = Directory.GetCurrentDirectory();
            try
            {
                //Aspose.Cells.License license = new Aspose.Cells.License();
               // string filePath = rootdir + "\\Resources\\" + "Aspose.Total.lic";
                //FileStream filestream = new FileStream(filePath, FileMode.Open);
                //license.SetLicense(filestream);
            }
            catch (Exception ex)
            {
                Console.WriteLine("\nThere was an error setting the license: " + ex.Message);
            }
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
