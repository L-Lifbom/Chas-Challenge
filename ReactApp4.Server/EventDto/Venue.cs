namespace Travel_Ginie_App.Server.EventDto
{
    public class Venue
    {
      
        public string name { get; set; }
        public string phone_number { get; set; }
       
       
        public double rating { get; set; }
      
        public List<string> subtypes { get; set; }
        
        public string street_number { get; set; }
        public string street { get; set; }
        public string country { get; set; }
      
        public string full_address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
    }
}
