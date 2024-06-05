using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Moq;
using Moq.Protected;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net;
using Travel_Ginie_App.Server.AIResponseDTO;
using Travel_Ginie_App.Server.Controllers;
using Travel_Ginie_App.Server.GeoIdDto;
using Travel_Ginie_App.Server.RestaurantsDto;
using Travel_Ginie_App.Server.Services;

namespace Travel_APP_UnitTest
{
    public class TravelControllerTests
    {
        [Fact]

        public async Task GetCountries_Returns_OkResult_With_CountryList()
        {
            // Arrange
            var fakeTravelService = new Mock<ITravelApp>();
            var expectedCountries = new List<string> { "Sweden", "Ethiopia", "United Arab Emerates" };
            fakeTravelService.Setup(x => x.GetCountryNames()).ReturnsAsync(expectedCountries);
            var controller = new TravelAppController(fakeTravelService.Object);

            // Act
            var result = await controller.GetCountries();

            // Assert
            var okResult = Assert.IsType<Microsoft.AspNetCore.Mvc.OkObjectResult>(result);
            Assert.Equal(200, okResult.StatusCode);
            Assert.Equal(expectedCountries, okResult.Value);
        }
        [Fact]
        public async Task GetCountries_Returns_500_When_Exception_Occurs()
        {
            // Arrange
            var fakeTravelService = new Mock<ITravelApp>();
            fakeTravelService.Setup(x => x.GetCountryNames()).ThrowsAsync(new Exception("Some error occurred"));
            var controller = new TravelAppController(fakeTravelService.Object);

            // Act
            var result = await controller.GetCountries();

            // Assert
            var objectResult = Assert.IsType<ObjectResult>(result);
            Assert.Equal(500, objectResult.StatusCode);
        }


        [Fact]
        public async Task GetCities_Returns_OkResult_With_CityList()
        {
            // Arrange
            var fakeTravelService = new Mock<ITravelApp>();
            var expectedCities = new List<string> { "Stockholm", "Sundsvall", "Uppsala" };
            string country = "Sweden";
            fakeTravelService.Setup(x => x.GetCities(country)).ReturnsAsync(expectedCities);
            var controller = new TravelAppController(fakeTravelService.Object);

            // Act
            var result = await controller.GetCities(country);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, okResult.StatusCode);
            Assert.Equal(expectedCities, okResult.Value);
        }


        [Fact]
        public async Task GetGeoId_Of_Acity_Returns_OkResult_With_GioidOf_The_Chosen_City()
        {
            // Arrange
            var fakeTravelService = new Mock<ITravelApp>();

            string city = "stockholm";
            var expectedgeoid = 1234567;
            fakeTravelService.Setup(x => x.GetGeoId(city)).ReturnsAsync(expectedgeoid);
            var controller = new TravelAppController(fakeTravelService.Object);

            // Act
            var result = await controller.GetGeoIDCity(city);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, okResult.StatusCode);
            Assert.Equal(expectedgeoid, okResult.Value);
        }

        [Fact]
        public async Task GetCities_Returns_500_When_Exception_Occurs()
        {
            // Arrange
            var fakeTravelService = new Mock<ITravelApp>();
            string country = "NamelessCountry";
            fakeTravelService.Setup(x => x.GetCities(country)).ThrowsAsync(new Exception("Some error occurred"));
            var controller = new TravelAppController(fakeTravelService.Object);

            // Act
            var result = await controller.GetCities(country);

            // Assert
            var statusCodeResult = Assert.IsType<ObjectResult>(result);
            Assert.Equal(500, statusCodeResult.StatusCode);
        }



        [Fact]
        public async Task GetRestaurants_In_A_City_Returns_OkResult_With_Rstaurants_Detail()
        {
            // Arrange
            var fakeTravelService = new Mock<ITravelApp>();
            string city = "Stockholm";
            var expectedRestaurants = new List<Travel_Ginie_App.Server.RestaurantsDto.RestaurantsDto>
    {
        new RestaurantsDto
        {
            data = new Travel_Ginie_App.Server.RestaurantsDto.Data
             {
                name = "McDonald",
                userReviewCount = 100,
                currentOpenStatusText = "now-open",
                priceTag = "$$$",
                averageRating = 5,
                 establishmentTypeAndCuisineTags = new List<string> { "FastFood", "Europian" },
                squareImgUrl = "https://pictures.se",
                squareImgRawLength = 100
              }
             }
         };
            fakeTravelService.Setup(x => x.GetRestaurants(city)).ReturnsAsync(expectedRestaurants);
            var controller = new TravelAppController(fakeTravelService.Object);

            // Act
            var result = await controller.GetRestaurantsByCity(city);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, okResult.StatusCode);
            Assert.Equal(expectedRestaurants, okResult.Value);
        }

        [Fact]
        public async Task GetHotels_In_A_City_Returns_OkResult_With_Hotels_Detail()
        {
            // Arrange
            var fakeTravelService = new Mock<ITravelApp>();
            string city = "Stockholm";
            DateTime checkin = DateTime.Now;
            DateTime checkout = new DateTime(2024 - 06 - 02);
            var expectedHotels = new List<Travel_Ginie_App.Server.HotelDtos.Data>
    {
        new Travel_Ginie_App.Server.HotelDtos.Data
        {
            data = new Travel_Ginie_App.Server.HotelDtos.Data
            {
                id = "12548",
                title = "SheratonHotel",
                sortDisclaimer = "sample sort disclaimer",
                primaryInfo = "Sample Info",
                secondaryInfo = "Sample Info",
                badge = new Travel_Ginie_App.Server.HotelDtos.Badge
                {
                    size = "sample size",
                    type = "sample type",
                    year = "sample year"
                },
                isSponsored = false,
                accentedLabel = "Sample Label",
                provider = "Sample Provider",
                priceForDisplay = "$100",
                strikethroughPrice = "$120",
                priceDetails = "Sample Price Details",
                priceSummary = "Sample Price Summary",
                cardPhotos = new List<Travel_Ginie_App.Server.HotelDtos.CardPhoto>
                {
                    new Travel_Ginie_App.Server.HotelDtos.CardPhoto
                    {
                        __typename = "Sample Type",
                        sizes = new Travel_Ginie_App.Server.HotelDtos.Sizes
                        {
                            urlTemplate = "https://sample-url.com",
                            __typename = "Sample Type",
                            maxHeight = 100,
                            maxWidth = 100,
                        }
                    }
                },
                commerceInfo = new Travel_Ginie_App.Server.HotelDtos.CommerceInfo
                {
                    commerceSummary = new Travel_Ginie_App.Server.HotelDtos.CommerceSummary
                    {
                        text = "sample commerce summary"
                    }
                }
            }.data
        }
    };

            fakeTravelService.Setup(x => x.GetHotelDetails(city, checkin, checkout)).ReturnsAsync(expectedHotels);
            var controller = new TravelAppController(fakeTravelService.Object);

            // Act
            var result = await controller.GetHotelsByCity(city, checkin, checkout);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, okResult.StatusCode);
            Assert.Equal(expectedHotels, okResult.Value);
        }



    }


}



