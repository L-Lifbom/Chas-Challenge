namespace Travel_Ginie_App.Server.RestaurantsDto
{
    public class Slot1Offer
    {
        public bool canProvideTimeslots { get; set; }
        public bool canLockTimeslots { get; set; }
        public List<object> timeSlots { get; set; }
        public string providerId { get; set; }
        public string provider { get; set; }
        public string providerDisplayName { get; set; }
        public string buttonText { get; set; }
        public string offerURL { get; set; }
        public string logoUrl { get; set; }
        public string trackingEvent { get; set; }
    }
}
