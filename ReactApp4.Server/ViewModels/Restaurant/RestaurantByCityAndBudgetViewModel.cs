using static Travel_Ginie_App.Server.ViewModels.Json.JsonModelsRestaurant;

namespace Travel_Ginie_App.Server.ViewModels.Restaurant;

public class RestaurantByCityAndBudgetViewModel
{
	public string Name { get; set; } = default!;
	public string Price { get; set; } = default!;
	public string Rating { get; set; } = default!;
	public string URL { get; set; } = default!;
	public string ImageURL { get; set; } = default!;
	public List<string> Categories { get; set; } = [];




	public static List<RestaurantByCityAndBudgetViewModel> ToViewModel(Root root)
	{
		return root.businesses.Select(data => new RestaurantByCityAndBudgetViewModel
		{
			Name = data.name,
			Price = data.price,
			Rating = $"{data.rating} out of {data.review_count} reviews",
			URL = data.url,
			ImageURL = data.image_url,
			Categories = CategoriesList(data),
		})
		.ToList();
	}




	private static List<string> CategoriesList(Business data)
	{
		return data.categories
			.Select(c => c.title)
			.ToList();
	}



}