using System;

namespace Travel_Ginie_App.Server.EventDto
{
    public class Datum
    {
     
        public string name { get; set; }
       
        public string description { get; set; }
        public string start_time { get; set; }
        public string end_time { get; set; }
    
        public List<TicketLink> ticket_links { get; set; }
      
        public Venue venue { get; set; }
        
        public string thumbnail { get; set; }
    }
}
