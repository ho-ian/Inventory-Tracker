using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Tracker.Models;
using Inventory_Tracker.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using X.PagedList;

namespace Inventory_Tracker.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public ProductsController(JsonFileProductService productService)
        {
            this.ProductService = productService;
        }


        public JsonFileProductService ProductService { get;  }

        public IEnumerable<Page> Get(int? page)
        {
            if (page.HasValue && page < 1)
            {
                return null;
            }

            var listProductsUnpaged = ProductService.GetProducts();

            const int pageSize = 5;
            var listPaged = listProductsUnpaged.ToPagedList<Products>(page ?? 1, pageSize);

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
            returnObject.productList = listPaged;

            var enumerable = new[] { returnObject };
            return enumerable;
        }
    }
}