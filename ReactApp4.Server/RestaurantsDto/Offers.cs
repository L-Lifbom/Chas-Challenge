namespace Travel_Ginie_App.Server.RestaurantsDto
{
    public class Offers
    {
        public bool? hasDelivery { get; set; }
        public bool? hasReservation { get; set; }
        public object slot2Offer { get; set; }
        public object restaurantSpecialOffer { get; set; }
        public Slot1Offer slot1Offer { get; set; }
    }
}
