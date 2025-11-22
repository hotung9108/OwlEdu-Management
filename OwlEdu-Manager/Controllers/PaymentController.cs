using Microsoft.AspNetCore.Mvc;

namespace OwlEdu_Manager.Controllers
{
    public class PaymentController : Controller
    {
        [HttpGet]
        public IActionResult Invoice([FromQuery] string paymentId)
        {
            return View("Invoice", paymentId);
        }
    }
}
