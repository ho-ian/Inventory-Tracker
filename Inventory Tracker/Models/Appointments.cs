using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Inventory_Tracker.Models
{
    public class Appointments
    {
        public string id { get; set; }
        public string date { get; set; }
        public string time { get; set; }
        public string resident { get; set; }
        public string unit { get; set; }
        public string number { get; set; }
        public string type { get; set; }
        public Boolean multiple { get; set; }
        public List<Contacts> contact { get; set; }
        public override string ToString() => JsonSerializer.Serialize<Appointments>(this);

    }
    public class Contacts
    {
        public string name { get; set; }
        public string info { get; set; }
    }
}
