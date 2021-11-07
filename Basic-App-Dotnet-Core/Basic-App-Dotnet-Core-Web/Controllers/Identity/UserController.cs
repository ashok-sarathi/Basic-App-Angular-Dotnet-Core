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
        public IEnumerable<UserModel> GetAll()
        {
            return _userService.GetAll();
        }

        [HttpGet("{id}")]
        public UserModel Get(Guid id)
        {
            return _userService.Get(id);
        }

        [HttpPost]
        public void Create([FromBody] UserModel model)
        {
            _userService.Create(model);
        }

        [HttpPut]
        public void Update([FromBody] UserModel model)
        {
            _userService.Update(model);
        }

        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            _userService.Delete(id);
        }
    }
}
