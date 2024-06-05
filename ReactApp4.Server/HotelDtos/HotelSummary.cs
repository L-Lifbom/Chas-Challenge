namespace Travel_Ginie_App.Server.HotelDtos
{
    public class HotelSummary
    {
        public string Title { get; set; }
        public string PrimaryInfo { get; set; }
        public string SecondaryInfo { get; set; }
        public BubbleRating BubbleRating { get; set; }
        public string PriceForDisplay { get; set; }
        public List<CardPhoto> CardPhotos { get; set; }
    }
}
