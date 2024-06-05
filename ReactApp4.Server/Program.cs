using Microsoft.EntityFrameworkCore;
using System.Reflection;
using Travel_Ginie_App.Server.DATA;
using Travel_Ginie_App.Server.Models;
using Travel_Ginie_App.Server.Services;
// using Travel_Ginie_App.Server.Services.YelpAPI;

namespace Travel_Ginie_App.Server
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);
			builder.Services.AddControllers();
			builder.Services.AddScoped<ITravelApp, TravelApp>();

			builder.Services.AddHttpClient();
			// builder.Services.AddScoped<IYelpApiReader, YelpApiReader>();



			builder.Services.AddAuthorization();
			builder.Services.AddDbContext<TripAppContext>(options =>
			{
				options.UseSqlServer(builder.Configuration.GetConnectionString("TripDb"));

			});


			builder.Services.AddIdentityApiEndpoints<User>().AddEntityFrameworkStores<TripAppContext>();
			builder.Services.AddIdentityCore<User>(options =>
			{
				options.SignIn.RequireConfirmedAccount = true;
				options.Password.RequireDigit = true;

				options.Password.RequireNonAlphanumeric = true;
				options.Password.RequireUppercase = true;
				options.Password.RequiredLength = 8;
				options.Password.RequiredUniqueChars = 0;

				options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
				options.Lockout.MaxFailedAccessAttempts = 3;
				options.Lockout.AllowedForNewUsers = true;


				options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
				options.User.RequireUniqueEmail = true;



			})
				.AddEntityFrameworkStores<TripAppContext>();

			// Add services to the container.

			builder.Services.AddEndpointsApiExplorer();

			builder.Services.AddSwaggerGen(options =>
			{
				options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, $"{Assembly.GetExecutingAssembly().GetName().Name}.xml"));
			});



			var app = builder.Build();

			app.UseDefaultFiles();
			app.UseStaticFiles();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseHttpsRedirection();

			app.UseAuthorization();


			app.MapControllers();

			app.MapFallbackToFile("/index.html");

			app.Run();
		}
	}
}