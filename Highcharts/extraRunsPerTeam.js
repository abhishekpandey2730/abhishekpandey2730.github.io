fetch('Querries-JSON/extraRunsPerTeam.json').then((response) => response.json()).then(data => {
    var jsonData = data;
    console.log(jsonData);
     plotChart3(jsonData);
})

//create the chart
function plotChart3(jsonObj){

    Highcharts.chart('container3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Extra runs per team in 2016'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Extras'
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
                "name": "Extras",
                "colorByPoint": true,
                "data": jsonObj
            }
        ]
    });
}