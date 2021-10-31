using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Basic_App_Dotnet_Core_Entity.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Basic_App_Dotnet_Core_Data.Mapping.Identity
{
    public class UserMapping : IEntityTypeConfiguration<User>
    {
        public const int FirstNameMaxLenth = 50;
        public const int LastNameMaxLenth = 50;

        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(p => p.FirstName)
                .IsRequired()
                .HasMaxLength(FirstNameMaxLenth);

            builder.Property(p => p.LastName)
                .IsRequired(false)
                .HasMaxLength(LastNameMaxLenth);

            builder.Property(p => p.Email)
                .IsRequired();

            builder.Property(p => p.Password)
                .IsRequired();
        }
    }
}
