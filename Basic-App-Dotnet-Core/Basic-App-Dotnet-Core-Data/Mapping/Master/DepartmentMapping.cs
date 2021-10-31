using Basic_App_Dotnet_Core_Entity.Master;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basic_App_Dotnet_Core_Data.Mapping.Master
{
    public class DepartmentMapping : IEntityTypeConfiguration<Department>
    {
        public const int NameMaxLenth = 50;
        public const int CodeMaxLenth = 4;

        public void Configure(EntityTypeBuilder<Department> builder)
        {
            builder.Property(p => p.Name)
                .IsRequired()
                .HasMaxLength(NameMaxLenth);

            builder.Property(p => p.Code)
                .IsRequired()
                .HasMaxLength(CodeMaxLenth);
        }
    }
}
