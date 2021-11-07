using AutoMapper;
using Basic_App_Dotnet_Core_Application.Identity.Model;
using Basic_App_Dotnet_Core_Entity.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basic_App_Dotnet_Core_Application.Identity.Mapper
{
    public class IdentityMapper : Profile
    {
        public IdentityMapper()
        {
            CreateMap<UserModel, User>().ReverseMap();
        }
    }
}
