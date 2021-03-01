using Newtonsoft.Json;
using System.Collections.Generic;

namespace WebApi.Models.Globally
{
    public class ErrorModel
    {
        [JsonProperty("code")]
        public string Code { get; set; }

        [JsonProperty("data")]
        public object Data { get; set; } = new List<object>();

        [JsonProperty("message")]
        public string Message { get; set; }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
