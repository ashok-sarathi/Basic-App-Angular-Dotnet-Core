using Basic_App_Dotnet_Core_Application.Identity.Model;
using Basic_App_Dotnet_Core_Application.Identity.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Basic_App_Dotnet_Core_Web.Controllers.Identity
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService ?? throw new Exception();
        }

        [HttpGet]
        public UserModel GetUser([FromQuery] UserModel model)
        {
            return _userService.GetUser(model);
        }
    }
}
