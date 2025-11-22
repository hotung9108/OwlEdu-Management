using Microsoft.AspNetCore.Mvc;

namespace OwlEdu_Manager.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Profile()
        {
            return PartialView("_AdminProfile");
        }

        public IActionResult Notification()
        {
            return PartialView("_AdminNotification");
        }

        public IActionResult Dashboard()
        {
            return PartialView("_AdminDashboard");
        }

        public IActionResult Account()
        {
            return PartialView("_AdminAccount");
        }

        public IActionResult Student()
        {
            return PartialView("_AdminStudent");
        }

        public IActionResult Teacher()
        {
            return PartialView("_AdminTeacher");
        }

        public IActionResult Enrollment()
        {
            return PartialView("_AdminEnrollment");
        }

        public IActionResult Class()
        {
            return PartialView("_AdminClass");
        }

        public IActionResult Course()
        {
            return PartialView("_AdminCourse");
        }

        public IActionResult Payment()
        {
            return PartialView("_AdminPayment");
        }
    }
}
