namespace SmartCity.Simulator.Models.Payloads
{
    public record AuthTokenResponse(
       
        string Token,
        string Username,
        DateTime Expires
    ); 
}