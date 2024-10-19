using backend.Models; 
using backend.Database; 
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using backend.Dto;

namespace backend.Services
{
    public class TaxService
    {
        private readonly IDbContextFactory<BackendDbContext> _contextFactory;

        public TaxService(IDbContextFactory<BackendDbContext> contextFactory)
        {
            _contextFactory = contextFactory;
        }

        public List<Tax> GetAllTaxes()
        {
            using (var context = _contextFactory.CreateDbContext())
            {
                return context.Tax.ToList();
            }
        }

        public Tax GetTax(int value)
        {
            using (var context = _contextFactory.CreateDbContext())
            {
                return context.Tax.FirstOrDefault(p => 
                    (p.Low <= value && p.High >= value) ||
                    (p.Low <= value && p.High == 0));
            }
        }

        public ResultDto CalculateTaxes(int value)
        {
            ResultDto result = new ResultDto();
            int perc = GetTax(value).Percentage;

            result.grossAnual = value;
            result.grossMonthly = result.grossAnual / 12m;

            if (perc == 0)
            {
                result.taxAnual = 0;
                result.taxMonthly = 0;
            }
            else
            {
                result.taxAnual = (value * GetTax(value).Percentage) / 100m;
                result.taxMonthly = result.taxAnual / 12m;
            }
            result.netAnual = result.grossAnual - result.taxAnual;
            result.netMonthly = result.netAnual / 12m;


            return result; 
        }
    }
}
