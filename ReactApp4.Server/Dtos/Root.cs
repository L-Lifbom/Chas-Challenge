using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Travel_Ginie_App.Server.Dtos
{
    public class Root
    {
        public bool status { get; set; }
        public string message { get; set; }
        public long timestamp { get; set; }
        public List<Datum> data { get; set; }
    }
}
