using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory_Tracker.Models;
using Inventory_Tracker.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        public IPagedList<Products> Get(int? page)
        {
            if (page.HasValue && page < 1)
            {
                return null;
            }

            var listProductsUnpaged = ProductService.GetProducts();

            const int pageSize = 10;
            var listPaged = listProductsUnpaged.ToPagedList<Products>(page ?? 1, pageSize);

            if (listPaged.PageNumber != 1 && page.HasValue && page > listPaged.PageCount)
            {
                return null;
            }

            var totalCount = listPaged.TotalItemCount;
            var totalPages = listPaged.PageCount;

            return new ApiResponse(StatusCodes.Status200OK, result: new { count: totalCount, pages: totalPages, products:  listPaged}, "success");

        }
    }
}