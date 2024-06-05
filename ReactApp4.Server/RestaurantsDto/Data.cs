using Travel_Ginie_App.Server.GeoIdDto;

namespace Travel_Ginie_App.Server.RestaurantsDto
{
    public class Data
    {
       
        public List<Data> data { get; set; }
    
        public string name { get; set; }
        public double averageRating { get; set; }
        public int userReviewCount { get; set; }
        public string restaurantsId { get; set; }
        public string currentOpenStatusText { get; set; }
        public string priceTag { get; set; }
      
      
        public List<string> establishmentTypeAndCuisineTags { get; set; }
        public string squareImgUrl { get; set; }
        public int squareImgRawLength { get; set; }
        public string heroImgUrl { get; set; }
        public int heroImgRawHeight { get; set; } 
        public int heroImgRawWidth { get; set; } 
      
        public Thumbnail thumbnail { get; set; }
       
    }
}
