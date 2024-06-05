using Newtonsoft.Json;

namespace Travel_Ginie_App.Server.Dtos
{
    public class CountriesDto
    {
 

        [JsonProperty("0")]
        public List<CountryDto> countries { get; set; }
    }
}
