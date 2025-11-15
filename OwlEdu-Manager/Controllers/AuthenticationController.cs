using Microsoft.AspNetCore.Mvc;

namespace OwlEdu_Manager.Controllers
{
    public class AuthenticationController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
