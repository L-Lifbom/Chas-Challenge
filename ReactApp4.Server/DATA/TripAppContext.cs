

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Travel_Ginie_App.Server.Models;

namespace Travel_Ginie_App.Server.DATA
{
    public class TripAppContext:IdentityDbContext<User>
    {

        public TripAppContext(DbContextOptions<TripAppContext> options) : base(options)
        {

        }
    }
}
