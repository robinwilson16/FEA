using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FEA.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FEA.Pages.Charts
{
    public class IndexModel : PageModel
    {
        public List<ChartData> ChartData1 = new List<ChartData>();
        public List<ChartData> ChartData2 = new List<ChartData>();
        public List<ChartData> ChartData3 = new List<ChartData>();

        public List<Chart> Chart = new List<Chart>();

        private Random rnd = new Random();
        public async Task<IActionResult> OnGet()
        {
            //Define charts with random data
            ChartData1.Add(new ChartData
            {
                DimensionOne = "Art and Design",
                Percentage = rnd.NextDouble()
            });
            ChartData1.Add(new ChartData
            {
                DimensionOne = "Basic Skills",
                Percentage = rnd.NextDouble()
            });
            ChartData1.Add(new ChartData
            {
                DimensionOne = "Business Administration",
                Percentage = rnd.NextDouble()
            });
            ChartData1.Add(new ChartData
            {
                DimensionOne = "Construction",
                Percentage = rnd.NextDouble()
            });
            ChartData1.Add(new ChartData
            {
                DimensionOne = "Engineering",
                Percentage = rnd.NextDouble()
            });
            ChartData1.Add(new ChartData
            {
                DimensionOne = "Foundation Studies",
                Percentage = rnd.NextDouble()
            });
            ChartData1.Add(new ChartData
            {
                DimensionOne = "Services to Business",
                Percentage = rnd.NextDouble()
            });
            ChartData1.Add(new ChartData
            {
                DimensionOne = "Travel and Tourism",
                Percentage = rnd.NextDouble()
            });

            ChartData2.Add(new Models.ChartData
            {
                DimensionOne = "Courses with Contribution 90-100%",
                Quantity = rnd.Next(10)
            });
            ChartData2.Add(new Models.ChartData
            {
                DimensionOne = "Courses with Contribution 80-90%",
                Quantity = rnd.Next(10)
            });
            ChartData2.Add(new Models.ChartData
            {
                DimensionOne = "Courses with Contribution < 80%",
                Quantity = rnd.Next(10)
            });

            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Apr",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "May",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Jun",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Jul",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Aug",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Sep",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Oct",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Nov",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Dec",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Jan",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Feb",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                DimensionOne = "Mar",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });

            //Combine charts together and return as JSON

            Chart.Add(new Models.Chart
            {
                Title = "Attendance % By Dept",
                ChartData = ChartData1
            });

            Chart.Add(new Models.Chart
            {
                Title = "Course Contribution Rates",
                ChartData = ChartData2
            });

            Chart.Add(new Models.Chart
            {
                Title = "Budget vs Actual",
                ChartData = ChartData3
            });

            var collectionWrapper = new
            {
                Charts = Chart
            };

            return new JsonResult(collectionWrapper);
        }
    }
}