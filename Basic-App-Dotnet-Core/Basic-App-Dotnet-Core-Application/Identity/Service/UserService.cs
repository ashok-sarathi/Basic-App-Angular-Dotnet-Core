using Basic_App_Dotnet_Core_Application.Identity.Model;
using Basic_App_Dotnet_Core_Data;
using Basic_App_Dotnet_Core_Entity.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basic_App_Dotnet_Core_Application.Identity.Service
{
    public interface IUserService
    {
        UserModel GetUser(UserModel model);
    }

    public class UserService : IUserService
    {
        private readonly BasicAppDotnetCoreContext _context;
        public UserService(BasicAppDotnetCoreContext context)
        {
            _context = context ?? throw new Exception();
        }

        public UserModel GetUser(UserModel model)
        {
            var user = _context.Set<User>().FirstOrDefault(u => u.Id == model.Id);
            return new UserModel()
            {
                Id = user.Id,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Password = user.Password
            };
        }
    }
}
