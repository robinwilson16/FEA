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
                Dimension = "Art and Design",
                Percentage1 = rnd.NextDouble(),
                Percentage2 = 0.9
            });
            ChartData1.Add(new ChartData
            {
                Dimension = "Basic Skills",
                Percentage1 = rnd.NextDouble(),
                Percentage2 = 0.9
            });
            ChartData1.Add(new ChartData
            {
                Dimension = "Business Administration",
                Percentage1 = rnd.NextDouble(),
                Percentage2 = 0.9
            });
            ChartData1.Add(new ChartData
            {
                Dimension = "Construction",
                Percentage1 = rnd.NextDouble(),
                Percentage2 = 0.9
            });
            ChartData1.Add(new ChartData
            {
                Dimension = "Engineering",
                Percentage1 = rnd.NextDouble(),
                Percentage2 = 0.9
            });
            ChartData1.Add(new ChartData
            {
                Dimension = "Foundation Studies",
                Percentage1 = rnd.NextDouble(),
                Percentage2 = 0.9
            });
            ChartData1.Add(new ChartData
            {
                Dimension = "Services to Business",
                Percentage1 = rnd.NextDouble(),
                Percentage2 = 0.9
            });
            ChartData1.Add(new ChartData
            {
                Dimension = "Travel and Tourism",
                Percentage1 = rnd.NextDouble(),
                Percentage2 = 0.9
            });

            ChartData2.Add(new Models.ChartData
            {
                Dimension = "Courses with Contribution 90-100%",
                Quantity1 = rnd.Next(10)
            });
            ChartData2.Add(new Models.ChartData
            {
                Dimension = "Courses with Contribution 80-90%",
                Quantity1 = rnd.Next(10)
            });
            ChartData2.Add(new Models.ChartData
            {
                Dimension = "Courses with Contribution < 80%",
                Quantity1 = rnd.Next(10)
            });

            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Apr",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "May",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Jun",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Jul",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Aug",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Sep",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Oct",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Nov",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Dec",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Jan",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Feb",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.ChartData
            {
                Dimension = "Mar",
                Quantity1 = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });

            //Combine charts together and return as JSON

            Chart.Add(new Models.Chart
            {
                ChartTitle = "Attendance % By Dept",
                ChartData = ChartData1
            });

            Chart.Add(new Models.Chart
            {
                ChartTitle = "Course Contribution Rates",
                ChartData = ChartData2
            });

            Chart.Add(new Models.Chart
            {
                ChartTitle = "Budget vs Actual",
                ChartData = ChartData3
            });

            var collectionWrapper = new
            {
                charts = Chart
            };

            return new JsonResult(collectionWrapper);
        }
    }
}