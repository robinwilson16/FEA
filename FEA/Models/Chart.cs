using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FEA.Models
{
    public class Chart
    {
        public string ChartTitle { get; set; }
        public ICollection<ChartData> ChartData { get; set; }
    }
}
