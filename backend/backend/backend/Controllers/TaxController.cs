using Microsoft.AspNetCore.Mvc;
using backend.Services;
using backend.Models;
using backend.Dto;

namespace backend.Controllers
{
    [ApiController]
    [Route("tax")]
    public class TaxController(TaxService _taxService) : ControllerBase
    {
        [HttpGet("all")]
        public ActionResult<List<Tax>> CalculateTax()
        {
            List<Tax> taxes = _taxService.GetAllTaxes();
            return Ok(taxes);
        }

        [HttpGet("calculate/{value}")]
        public ActionResult<ResultDto> CalculateTax(int value)
        {
            ResultDto calc = _taxService.CalculateTaxes(value);
            return Ok(calc);
        }
    }
}
