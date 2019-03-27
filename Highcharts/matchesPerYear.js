fetch('Querries-JSON/MatchesPerYear.json').then((response) => response.json()).then(data => {
    var jsonData = data;

    plotChart1(jsonData);
})

//create the chart
function plotChart1(jsonObj){

    Highcharts.chart('container1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Matches Played Per Year'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Number of matches played'
            }
    
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:0f}</b>'
        },
    
        "series": [
            {
                "name": "Matches",
                "colorByPoint": true,
                "data": jsonObj
            }
        ]
    });
}