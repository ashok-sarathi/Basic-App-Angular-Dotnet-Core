using AutoMapper;
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
        void Create(UserModel model);
        void Update(UserModel model);
        void Delete(Guid id);
        IEnumerable<UserModel> GetAll();
        UserModel Get(Guid id);
    }

    public class UserService : IUserService
    {
        private readonly BasicAppDotnetCoreContext _context;
        private readonly IMapper _mapper;
        public UserService(BasicAppDotnetCoreContext context, IMapper mapper)
        {
            _context = context ?? throw new Exception();
            _mapper = mapper ?? throw new Exception();
        }

        public void Create(UserModel model)
        {
            model.Id = Guid.NewGuid();
            _context.Set<User>().Add(_mapper.Map<User>(model));
            _context.SaveChanges();
        }

        public void Delete(Guid id)
        {
            User user = _context.Set<User>().FirstOrDefault(p => p.Id == id);
            if (user == null)
                throw new Exception();
            _context.Set<User>().Remove(user);
            _context.SaveChanges();
        }

        public UserModel Get(Guid id)
        {
            User user = _context.Set<User>().FirstOrDefault(p => p.Id == id);
            if (user == null)
                throw new Exception();
            return _mapper.Map<UserModel>(user);
        }

        public IEnumerable<UserModel> GetAll()
        {
            return _context.Set<User>()
                .Select(p => new UserModel()
                {
                    Id = p.Id,
                    Email = p.Email,
                    FirstName = p.FirstName,
                    LastName = p.LastName
                });
        }

        public void Update(UserModel model)
        {
            _context.Set<User>().Update(_mapper.Map<User>(model));
            _context.SaveChanges();
        }
    }
}
