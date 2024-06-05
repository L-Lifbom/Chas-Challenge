namespace Travel_Ginie_App.Server.HotelDtos
{
    public class Data
    {
        public string sortDisclaimer { get; set; }
        public List<HotelDtos.Data> data { get; set; }
        public string id { get; set; }
        public string title { get; set; }
        public string primaryInfo { get; set; }
        public string secondaryInfo { get; set; }
        public Badge badge { get; set; }
        public BubbleRating bubbleRating { get; set; }
        public bool isSponsored { get; set; }
        public object accentedLabel { get; set; }
        public string provider { get; set; }
        public string priceForDisplay { get; set; }
        public string strikethroughPrice { get; set; }
        public string priceDetails { get; set; }
        public string priceSummary { get; set; }
        public List<CardPhoto> cardPhotos { get; set; }
        public CommerceInfo commerceInfo { get; set; }
    }
}
