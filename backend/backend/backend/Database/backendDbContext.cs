using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Database
{
    public class BackendDbContext : DbContext
    {
        public BackendDbContext(DbContextOptions<BackendDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Tax> Tax { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tax>(entity =>
            {
                entity.HasKey(t => t.Id); 

                entity.Property(t => t.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(t => t.Low)
                    .IsRequired();

                entity.Property(t => t.High)
                    .IsRequired();

                entity.Property(t => t.Percentage)
                    .IsRequired();
            });
        }
    }
}
