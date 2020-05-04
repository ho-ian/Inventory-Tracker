using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using Inventory_Tracker.Models;
using Microsoft.AspNetCore.Hosting;

namespace Inventory_Tracker.Services
{
    public class JsonFileAppointmentService
    {
        public JsonFileAppointmentService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        private string JsonFileName
        {
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "Data", "appointments.json"); }
        }

        public IEnumerable<Appointments> GetAppointments()
        {
            using (var jsonFileReader = File.OpenText(JsonFileName))
            {
                return JsonSerializer.Deserialize<Appointments[]>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }
        }
    }

}