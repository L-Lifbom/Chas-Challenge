// using Newtonsoft.Json;
// using Travel_Ginie_App.Server.ViewModels.Json;
// using Travel_Ginie_App.Server.ViewModels.Restaurant;
// using static Travel_Ginie_App.Server.ViewModels.Constants.Constant;

// namespace Travel_Ginie_App.Server.Services.YelpAPI;

// public class YelpApiReader : IYelpApiReader
// {

// 	private readonly string _apiKey;
// 	private readonly IHttpClientFactory _clientFactory;

// 	public YelpApiReader(IHttpClientFactory clientFactory, IConfiguration configuration)
// 	{
// 		_clientFactory = clientFactory;
// 		_apiKey = configuration["ApiKey"]!;


// 		if (string.IsNullOrEmpty(_apiKey))
// 		{
// 			throw new Exception("You need to add your own [Yelp API key]....");
// 		}
// 	}



// 	public async Task<List<RestaurantByCityAndBudgetViewModel>> RestaurantsByCityAndBudget(
// 		string location, int price, int numberResultPage)
// 	{
// 		try
// 		{
// 			var client = _clientFactory.CreateClient();

// 			var request = new HttpRequestMessage
// 			{
// 				Method = HttpMethod.Get,
// 				RequestUri = new Uri($"https://api.yelp.com/v3/businesses/search?location={location}&term={SearchTerm.Restaurant}&categories=&price={price}&sort_by=rating&limit={numberResultPage}"),
// 				Headers =
// 				{
// 					{ "accept", "application/json" },
// 					{ "Authorization", $"{_apiKey}" },
// 				},
// 			};

// 			using var response = await client.SendAsync(request);
// 			response.EnsureSuccessStatusCode();

// 			var body = await response.Content.ReadAsStringAsync();
// 			var root = JsonConvert.DeserializeObject<JsonModelsRestaurant.Root>(body);

// 			var result = RestaurantByCityAndBudgetViewModel.ToViewModel(root);

// 			return result;
// 		}
// 		catch (HttpRequestException e)
// 		{
// 			Console.WriteLine($"The HTTP request failed: {e.Message}");
// 			throw;
// 		}
// 		catch (JsonException e)
// 		{
// 			Console.WriteLine($"JSON serialization/deserialization failed: {e.Message}");
// 			throw;
// 		}
// 		catch (Exception e)
// 		{
// 			Console.WriteLine($"Error sorry: {e.Message}");
// 			throw;
// 		}
// 	}


// }