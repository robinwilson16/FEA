//Define charts
var courseContributionCanvas = document.getElementById("CourseContributionChart").getContext('2d');
var attendanceChartCanvas = document.getElementById("AttendanceChart").getContext('2d');
var cashflowChartCanvas = document.getElementById("CashflowChart").getContext('2d');

var optionsDoughnut = {
    maintainAspectRatio: false,
    cutoutPercentage: 0
};

var optionsLine = {
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                beginAtZero: true,
                callback: function (value) {
                    if (parseInt(value) >= 1000) {
                        return '£' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    } else {
                        return '£' + value;
                    }
                },
            },
            gridLines: {
                display: true,
                color: "rgba(200,200,200,0.2)"
            }
        }],
        xAxes: [{
            ticks: {
                min: 0,
                beginAtZero: true
            },
            gridLines: {
                display: false
            }
        }]
    },
    tooltips: {
        mode: 'label',
        label: 'mylabel',
        callbacks: {
            label: function (tooltipItem, data) {
                if (parseInt(tooltipItem.yLabel) >= 1000) {
                    return '£' + tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                } else {
                    return '£' + tooltipItem.yLabel;
                }
            }
        }
    },
};

var optionsBarPercentage = {
    responsive: true,
    maintainAspectRatio: false, //Do not set to true if hiding element
    xAxisID: 0,
    scales: {
        xAxes: [{
            ticks: {
                min: 0,
                beginAtZero: true,
                autoSkip: false
            },
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            ticks: {
                min: 0,
                max: 1,
                beginAtZero: true,
                interval: 1,
                callback: function (value) {
                    return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
                }
            },
            gridLines: {
                display: true,
                color: "rgba(200,200,200,0.2)"
            }
        }]
    },
    tooltips: {
        mode: 'label',
        label: 'mylabel',
        callbacks: {
            label: function (tooltipItem, data) {
                return (tooltipItem.yLabel * 100).toFixed(1) + '%'; // convert it to percentage
            }
        }
    },
    plugins: { //See https://nagix.github.io/chartjs-plugin-colorschemes/
        colorschemes: {
            scheme: 'tableau.Summer8'
        }
    },
    events: ['click'],
    onClick: function (c, i) {
        
    }
};

var courseContributionChart = new Chart(courseContributionCanvas, {
    options: optionsDoughnut,
    type: "doughnut"
});

var attendanceChart = new Chart(attendanceChartCanvas, {
    options: optionsBarPercentage,
    type: "bar"
});

var cashflowChart = new Chart(cashflowChartCanvas, {
    options: optionsLine,
    type: "line"
});

getChartData();

function getChartData() {
    return new Promise(resolve => {
        let dataToLoad = `/Charts/`;

        let chartToRefresh = null;

        

        $.get(dataToLoad, function (data) {

        })
            .then(data => {
                console.log(dataToLoad + " Loaded");

                //try {
                chartToRefresh = courseContributionChart;
                populateCourseContributionChart(chartToRefresh, data);

                chartToRefresh = attendanceChart;
                populateAttendanceChart(chartToRefresh, data);

                chartToRefresh = cashflowChart;
                populateCashflowChart(chartToRefresh, data);

                    resolve(1);
            //    }
            //    catch (e) {
            //        let title = `Error Loading Chart`;
            //        let content = `Sorry an error occurred loading the Chart. Please refresh the page to try again.`;

            //        doErrorModal(title, content);

            //        resolve(0);
            //    }
            //})
            //.fail(function () {
            //    let title = `Error Loading Chart`;
            //    let content = `Sorry an error occurred loading the Chart. Please refresh the page to try again.`;

            //    doErrorModal(title, content);
            //})
            //.then(data => {
            //    chartLoaded();
            });
    });
}

function populateCourseContributionChart(chart, data) {
    let chartTitle = data.charts[1].chartTitle;
    let level = 0;
    let chartLabels = data.charts[1].chartData.map(a => a.dimension);
    let chartNumbers = data.charts[1].chartData.map(a => a.quantity1);

    let colours = palette('qualitative', data.charts[1].chartData.length, 0);

    //Update chart
    chart.data.labels = chartLabels;

    //Add two datasets
    chart.data.datasets.push({});
    chart.data.datasets.push({});

    chart.data.datasets[0].type = "doughnut";
    chart.data.datasets[0].backgroundColor = colours.map(function (hex) {
        return '#' + hex;
    });
    chart.data.datasets[0].label = chartTitle;
    chart.data.datasets[0].data = chartNumbers;
    chart.options.xAxisID = level;
    chart.update();
}

function populateAttendanceChart(chart, data) {
    let chartTitle = data.charts[0].chartTitle;
    let level = 0;
    let chartLabels = data.charts[0].chartData.map(a => a.dimension);
    let chartActuals = data.charts[0].chartData.map(a => a.percentage1);
    let chartTargets = data.charts[0].chartData.map(a => a.percentage2);

    let colours = palette('qualitative', data.charts[0].chartData.length, 0);

    //Update chart
    chart.data.labels = chartLabels;

    //Add two datasets
    chart.data.datasets.push({});
    chart.data.datasets.push({});

    chart.data.datasets[0].type = "bar";
    chart.data.datasets[0].backgroundColor = colours.map(function (hex) {
        return '#' + hex;
    });
    chart.data.datasets[0].label = chartTitle;
    chart.data.datasets[0].data = chartActuals;

    chart.data.datasets[1].type = "line";
    chart.data.datasets[1].backgroundColor = "transparent";
    chart.data.datasets[1].borderColor = "rgba(255,0,0,1)";
    chart.data.datasets[1].label = "Target";
    chart.data.datasets[1].data = chartTargets;
    chart.options.xAxisID = level;
    chart.update();
}

function populateCashflowChart(chart, data) {
    let chartTitle = data.charts[2].chartTitle;
    let level = 0;
    let chartLabels = data.charts[2].chartData.map(a => a.dimension);

    let chartTargets = data.charts[2].chartData.map(a => a.quantity1);
    let chartActuals = data.charts[2].chartData.map(a => a.quantity2);

    let colours = palette('qualitative', data.charts[2].chartData.length, 0);

    //Update chart
    chart.data.labels = chartLabels;

    //Add two datasets
    chart.data.datasets.push({});
    chart.data.datasets.push({});

    chart.data.datasets[0].type = "line";
    chart.data.datasets[0].backgroundColor = "transparent";
    chart.data.datasets[0].borderColor = "#959595";
    chart.data.datasets[0].borderDash = [10, 10];
    chart.data.datasets[0].label = "Target Cashflow";
    chart.data.datasets[0].data = chartTargets;

    chart.data.datasets[1].type = "line";
    chart.data.datasets[1].backgroundColor = "transparent";
    chart.data.datasets[1].borderColor = "#69d7de";
    chart.data.datasets[1].label = "Actual Cashflow";
    chart.data.datasets[1].data = chartActuals;

    chart.options.xAxisID = level;
    chart.update();
}

function chartLoaded() {

}