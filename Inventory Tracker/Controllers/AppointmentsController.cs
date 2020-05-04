using Inventory_Tracker.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Tracker.Services;
using X.PagedList;

namespace Inventory_Tracker.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        public AppointmentsController(JsonFileAppointmentService appointmentService)
        {
            this.AppointmentService = appointmentService;
        }


        public JsonFileAppointmentService AppointmentService { get; }

        public IEnumerable<Page> Get(int? page)
        {
            if (page.HasValue && page < 1)
            {
                return null;
            }

            var listProductsUnpaged = AppointmentService.GetAppointments();

            const int pageSize = 5;
            var listPaged = listProductsUnpaged.ToPagedList<Appointments>(page ?? 1, pageSize);

            if (listPaged.PageNumber != 1 && page.HasValue && page > listPaged.PageCount)
            {
                return null;
            }

            var totalCount = listPaged.TotalItemCount;
            var totalPages = listPaged.PageCount;
            var returnObject = new Page();
            returnObject.numItems = totalCount;
            returnObject.numPages = totalPages;
            returnObject.pageSize = pageSize;
            returnObject.appointmentList = listPaged;

            var enumerable = new[] { returnObject };
            return enumerable;
        }
    }
}
