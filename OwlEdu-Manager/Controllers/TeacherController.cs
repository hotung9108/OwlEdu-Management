using Microsoft.AspNetCore.Mvc;
using OwlEdu_Manager_Server.Models;

namespace OwlEdu_Manager.Controllers
{
    public class TeacherController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Home()
        {
            return PartialView("_TeacherHome");
        }
        public IActionResult Notification()
        {
            return PartialView("_TeacherNotification");
        }
        public IActionResult Class()
        {
            return PartialView("_TeacherClass");
        }
        public IActionResult Schedule()
        {
            return PartialView("_TeacherSchedule");
        }
        public IActionResult Profile()
        {
            return PartialView("_TeacherProfile");
        }
        public IActionResult ClassDetail(string id)
        {
            ViewData["ClassId"] = id;
            var teacherId = HttpContext.User.FindFirst("Id")?.Value;  // hoặc UserId trong token
            ViewBag.TeacherId = teacherId;
            return PartialView("_TeacherClassDetail");
        }
    }
}
