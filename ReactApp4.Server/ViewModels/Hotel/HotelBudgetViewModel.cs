using System.Text.RegularExpressions;
using static Travel_Ginie_App.Server.ViewModels.Json.JsonModelsHotelByBudget;

namespace Travel_Ginie_App.Server.ViewModels.Hotel;


public class HotelBudgetViewModel
{

	public string Name { get; set; } = default!;
	public double? Price { get; set; }
	public string? Currency { get; set; }
	public string Rating { get; set; } = default!;




	public static List<HotelBudgetViewModel> ToHotelBudgetViewModel(Root root)
	{
		return root.data.data.Select(dataItem => new HotelBudgetViewModel
		{
			Price = ExtractNumericValue(dataItem.commerceInfo.priceForDisplay.text, out string currency),
			Currency = currency,
			Name = ExtractName(dataItem.title),
			Rating = $"{dataItem.bubbleRating.rating} out of {dataItem.bubbleRating.count} reviews"
		})
		.OrderBy(item => item.Price)
		.ToList();
	}


	private static double? ExtractNumericValue(string input, out string currency)
	{

		Match match = Regex.Match(input, @"(?:(?<currency>[A-Z]+)\s*)?(?<value>[\d,\.]+)");

		if (match.Success)
		{

			currency = match.Groups["currency"].Success ? match.Groups["currency"].Value : "Unknown";

			string numericValueString = match.Groups["value"].Value;
			numericValueString = numericValueString.Replace(",", "");

			if (double.TryParse(numericValueString, out double numericValue))
			{
				return numericValue;
			}
			else
			{
				currency = string.Empty;
				return null;
			}
		}
		else
		{
			currency = string.Empty;
			return null;
		}
	}


	private static string ExtractName(string name)
	{
		var indexFirstDot = name.IndexOf('.') + 1;
		var extractName = name[indexFirstDot..].TrimStart();

		return indexFirstDot >= 0 ? extractName : name;
	}

}







