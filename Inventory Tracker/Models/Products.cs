using System;
using System.Text.Json;

namespace Inventory_Tracker.Models
{
    public class Products
    {
        public string Id { get; set; }
        public string Maker { get; set; }
        public string img { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int[] Ratings { get; set; }

        public override string ToString() => JsonSerializer.Serialize<Products>(this);
    }
}
