using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FEA.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FEA.Pages
{
    public class MISSpecialistsModel : PageModel
    {
        public List<Models.String> ChartData = new List<Models.String>();
        public List<Models.String> ChartData2 = new List<Models.String>();
        public List<Models.String> ChartData3 = new List<Models.String>();
        private Random rnd = new Random();

        public void OnGet()
        {
            ChartData.Add(new Models.String
            {
                DimensionOne = "Art and Design",
                Percentage = rnd.NextDouble()
            });
            ChartData.Add(new Models.String
            {
                DimensionOne = "Basic Skills",
                Percentage = rnd.NextDouble()
            });
            ChartData.Add(new Models.String
            {
                DimensionOne = "Business Administration",
                Percentage = rnd.NextDouble()
            });
            ChartData.Add(new Models.String
            {
                DimensionOne = "Construction",
                Percentage = rnd.NextDouble()
            });
            ChartData.Add(new Models.String
            {
                DimensionOne = "Engineering",
                Percentage = rnd.NextDouble()
            });
            ChartData.Add(new Models.String
            {
                DimensionOne = "Foundation Studies",
                Percentage = rnd.NextDouble()
            });
            ChartData.Add(new Models.String
            {
                DimensionOne = "Services to Business",
                Percentage = rnd.NextDouble()
            });
            ChartData.Add(new Models.String
            {
                DimensionOne = "Travel and Tourism",
                Percentage = rnd.NextDouble()
            });

            ChartData2.Add(new Models.String
            {
                DimensionOne = "Courses with Contribution 90-100%",
                Quantity = rnd.Next(10)
            });
            ChartData2.Add(new Models.String
            {
                DimensionOne = "Courses with Contribution 80-90%",
                Quantity = rnd.Next(10)
            });
            ChartData2.Add(new Models.String
            {
                DimensionOne = "Courses with Contribution < 80%",
                Quantity = rnd.Next(10)
            });

            ChartData3.Add(new Models.String
            {
                DimensionOne = "Apr",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "May",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "Jun",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "Jul",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "Aug",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "Sep",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "Oct",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "Nov",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "Dec",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "Jan",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "Feb",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
            ChartData3.Add(new Models.String
            {
                DimensionOne = "Mar",
                Quantity = rnd.Next(1000000),
                Quantity2 = rnd.Next(1000000)
            });
        }
    }
}