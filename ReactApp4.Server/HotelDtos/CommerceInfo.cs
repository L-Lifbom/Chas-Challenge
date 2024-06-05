namespace Travel_Ginie_App.Server.HotelDtos
{
    public class CommerceInfo
    {
        public string externalUrl { get; set; }
        public string provider { get; set; }
        public LoadingMessage loadingMessage { get; set; }
        public PriceForDisplay priceForDisplay { get; set; }
        public StrikethroughPrice strikethroughPrice { get; set; }
        public object pricingPeriod { get; set; }
        public Details details { get; set; }
        public CommerceSummary commerceSummary { get; set; }
        public object roomUrgencyMessage { get; set; }
        public List<object> labels { get; set; }
    }
}
