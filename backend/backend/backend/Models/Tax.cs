namespace backend.Models
{
    public class Tax
    {
        public int Id { get; set; } 
        public required string Name { get; set; }
        public int Low { get; set; }
        public int High { get; set; }
        public int Percentage { get; set; }
    }
}