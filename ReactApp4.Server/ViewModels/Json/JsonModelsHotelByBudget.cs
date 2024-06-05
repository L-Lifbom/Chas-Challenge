namespace Travel_Ginie_App.Server.ViewModels.Json;

public class JsonModelsHotelByBudget
{
	public class Badge
	{
		public string size { get; set; }
		public string type { get; set; }
		public string year { get; set; }
	}

	public class BubbleRating
	{
		public string count { get; set; }
		public double rating { get; set; }
	}

	public class CardPhoto
	{
		public string __typename { get; set; }
		public Sizes sizes { get; set; }
	}

	public class CommerceInfo
	{
		public string externalUrl { get; set; }
		public string provider { get; set; }
		public object loadingMessage { get; set; }
		public PriceForDisplay priceForDisplay { get; set; }
		public StrikethroughPrice strikethroughPrice { get; set; }
		public object pricingPeriod { get; set; }
		public Details details { get; set; }
		public CommerceSummary commerceSummary { get; set; }
		public object roomUrgencyMessage { get; set; }
		public List<object> labels { get; set; }
	}

	public class CommerceSummary
	{
		public string text { get; set; }
	}

	public class Data
	{
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

	public class Details
	{
		public string text { get; set; }
	}

	public class PriceForDisplay
	{
		public string text { get; set; }
		public object debugValueKey { get; set; }
	}

	public class Root
	{
		public bool status { get; set; }
		public string message { get; set; }
		public long timestamp { get; set; }
		public DataRoot data { get; set; }
	}

	public class Sizes
	{
		public string __typename { get; set; }
		public int maxHeight { get; set; }
		public int maxWidth { get; set; }
		public string urlTemplate { get; set; }
	}

	public class StrikethroughPrice
	{
		public string text { get; set; }
	}

	public class DataRoot
	{
		public string sortDisclaimer { get; set; }
		public List<Data> data { get; set; }
	}
}
