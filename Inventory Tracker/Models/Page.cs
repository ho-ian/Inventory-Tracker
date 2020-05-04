using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Tracker.Models;
using X.PagedList;

namespace Inventory_Tracker.Models
{
    public class Page
    {
        public int numItems { get; set; }
        public int numPages { get; set; }
        public int pageSize { get; set; }
        public IPagedList<Products> productList { get; set; }
        public IPagedList<Appointments> appointmentList { get; set; }
    }
}
