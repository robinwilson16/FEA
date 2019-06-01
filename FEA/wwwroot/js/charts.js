loadCharts();
function loadCharts() {
    return new Promise(resolve => {
        let dataToLoad = `/Charts/`;

        $.get(dataToLoad, function (data) {

        })
            .then(data => {
                try {
                    doLoadCharts(data);
                    resolve(1);
                }
                catch (e) {
                    doErrorModal("Error Storing Data in Browser", "Sorry an error occurred storing data in your web browser. Please check the local storage settings and your available disk space.");
                    resolve(0);
                }
            })
            .fail(function () {
                let title = `Error Loading Courses`;
                let content = `Sorry an error occurred loading the list of courses. Please try again.`;

                doErrorModal(title, content);
            });
    });
}

function doLoadCharts(data) {
    var randomScalingFactor = function () { return Math.round(Math.random() * 100) };

    let title1 = data.charts[0].title;
    let labels1 = data.charts[0].chartData.map(a => a.dimensionOne);
    let percentages1 = data.charts[0].chartData.map(a => a.percentage);

    let labels2 = data.charts[1].chartData.map(a => a.dimensionOne);
    let quantities2 = data.charts[1].chartData.map(a => a.quantity);

    let labels3 = data.charts[2].chartData.map(a => a.dimensionOne);
    let quantities3a = data.charts[2].chartData.map(a => a.quantity);
    let quantities3b = data.charts[2].chartData.map(a => a.quantity2);

    var chartName = "AttendanceChart";
    var ctx = document.getElementById(chartName).getContext('2d');
    var data = {
        labels: labels1,
        datasets: [{
            label: title1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
            data: percentages1
        },
        {
            label: "Target 90%",
            backgroundColor: [
                'transparent'
            ],
            borderColor: [
                'rgba(255,0,0,1)'
            ],
            type: 'line',
            borderWidth: 1,
            data: [0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9]
        }]
    };

    var options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 1,
                    beginAtZero: true,
                    interval: 1,
                    callback: function (value) {
                        return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
                    },
                },
                gridLines: {
                    display: true,
                    color: "rgba(255,99,164,0.2)"
                }
            }],
            xAxes: [{
                ticks: {
                    min: 0,
                    beginAtZero: true,
                    autoSkip: false
                },
                gridLines: {
                    display: false
                }
            }]
        }
    };

    var myChart = new Chart(ctx, {
        options: options,
        data: data,
        type: 'bar'
    });

    var chartName2 = "AttendanceChart2";
    var ctx2 = document.getElementById(chartName2).getContext('2d');
    var data2 = {
        labels: labels2,
        datasets: [{
            label: "Attendance by Dept",
            backgroundColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1,
            data: quantities2
        }]
    };

    var options2 = {
        maintainAspectRatio: false,
    };

    var myChart2 = new Chart(ctx2, {
        options: options2,
        data: data2,
        type: 'doughnut'
    });

    var chartName = "AttendanceChart3";
    var ctx3 = document.getElementById(chartName).getContext('2d');
    var data3 = {
        labels: labels3,
        datasets: [{
            label: "Target Cashflow",
            backgroundColor: [
                'transparent'
            ],
            borderColor: [
                '#959595'
            ],
            borderWidth: 2,
            borderDash: [
                5, 15
            ],
            data: quantities3a
        },
        {
            label: "Actual Cashflow",
            backgroundColor: [
                'transparent'
            ],
            borderColor: [
                '#69d7de'
            ],
            borderWidth: 2,
            data: quantities3b
        }]
    };

    var options3 = {
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
                    color: "rgba(255,99,164,0.2)"
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
        }
    };

    var myChart3 = new Chart(ctx3, {
        options: options3,
        data: data3,
        type: 'line'
    });
}