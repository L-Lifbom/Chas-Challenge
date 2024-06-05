using System.Text.Json.Serialization;

namespace Travel_Ginie_App.Server.ViewModels.Json;

public class JsonModelsRestaurant
{

	public class Attributes
	{
		[JsonPropertyName("business_temp_closed")]
		public object business_temp_closed { get; set; }

		[JsonPropertyName("menu_url")]
		public object menu_url { get; set; }

		[JsonPropertyName("open24_hours")]
		public object open24_hours { get; set; }

		[JsonPropertyName("waitlist_reservation")]
		public object waitlist_reservation { get; set; }
	}

	public class Business
	{
		[JsonPropertyName("id")]
		public string id { get; set; }

		[JsonPropertyName("alias")]
		public string alias { get; set; }

		[JsonPropertyName("name")]
		public string name { get; set; }

		[JsonPropertyName("image_url")]
		public string image_url { get; set; }

		[JsonPropertyName("is_closed")]
		public bool is_closed { get; set; }

		[JsonPropertyName("url")]
		public string url { get; set; }

		[JsonPropertyName("review_count")]
		public int review_count { get; set; }

		[JsonPropertyName("categories")]
		public List<Category> categories { get; set; }

		[JsonPropertyName("rating")]
		public double rating { get; set; }

		[JsonPropertyName("coordinates")]
		public Coordinates coordinates { get; set; }

		[JsonPropertyName("transactions")]
		public List<object> transactions { get; set; }

		[JsonPropertyName("price")]
		public string price { get; set; }

		[JsonPropertyName("location")]
		public Location location { get; set; }

		[JsonPropertyName("phone")]
		public string phone { get; set; }

		[JsonPropertyName("display_phone")]
		public string display_phone { get; set; }

		[JsonPropertyName("distance")]
		public double distance { get; set; }

		[JsonPropertyName("attributes")]
		public Attributes attributes { get; set; }
	}

	public class Category
	{
		[JsonPropertyName("alias")]
		public string alias { get; set; }

		[JsonPropertyName("title")]
		public string title { get; set; }
	}

	public class Center
	{
		[JsonPropertyName("longitude")]
		public double longitude { get; set; }

		[JsonPropertyName("latitude")]
		public double latitude { get; set; }
	}

	public class Coordinates
	{
		[JsonPropertyName("latitude")]
		public double? latitude { get; set; }

		[JsonPropertyName("longitude")]
		public double? longitude { get; set; }
	}

	public class Location
	{
		[JsonPropertyName("address1")]
		public string address1 { get; set; }

		[JsonPropertyName("address2")]
		public string address2 { get; set; }

		[JsonPropertyName("address3")]
		public string address3 { get; set; }

		[JsonPropertyName("city")]
		public string city { get; set; }

		[JsonPropertyName("zip_code")]
		public string zip_code { get; set; }

		[JsonPropertyName("country")]
		public string country { get; set; }

		[JsonPropertyName("state")]
		public string state { get; set; }

		[JsonPropertyName("display_address")]
		public List<string> display_address { get; set; }
	}

	public class Region
	{
		[JsonPropertyName("center")]
		public Center center { get; set; }
	}

	public class Root
	{
		[JsonPropertyName("businesses")]
		public List<Business> businesses { get; set; }

		[JsonPropertyName("total")]
		public int total { get; set; }

		[JsonPropertyName("region")]
		public Region region { get; set; }
	}
}
