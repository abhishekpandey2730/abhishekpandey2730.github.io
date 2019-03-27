fetch('Querries-JSON/topEconomicBowlers.json').then((response) => response.json()).then(data => {
    var jsonData = data;

    plotChart4(jsonData);
})

//create the chart
function plotChart4(jsonObj){

    Highcharts.chart('container4', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top economic bowlers in 2015'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Top economic bowlers rate'
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
                    format: '{point.y:.2f}'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b>'
        },
    
        "series": [
            {
                "name": "Economy",
                "colorByPoint": true,
                "data": jsonObj
            }
        ]
    });
}