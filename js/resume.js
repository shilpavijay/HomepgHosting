$(function () {
    // Create the chart
    $('#skillchart').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ' '
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: 'Expertise',
            colorByPoint: true,
            data: [{
                name: 'Python Frameworks',
                y: 30,
                drilldown: 'Python'
            },{
                name: 'Analytics/AI/ML',
                y: 20,
                drilldown: 'Analytics/AI/ML'
            },{
                name: 'Javascript',
                y: 20,
                drilldown: 'Javascript'
            }, {
                name: 'HTML',
                y: 5,
                drilldown: null
            }, {
                name: 'CSS',
                y: 5,
                            drilldown: null
            },{
                name: 'Databases',
                y: 20,
                            drilldown: 'Databases'
            },{
                name: 'Misc',
                y: 5,
                            drilldown: 'Misc'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Python',
                id: 'Python',
                data: [
                    ['Django', 60],
                    ['Flask', 40]
                ]
            },{
                name: 'Analytics/AI/ML',
                id: 'Analytics/AI/ML',
                data: [
                    ['Octave', 20],
                    ['Numpy', 15],
                    ['Scipy', 15],
                    ['NLTK', 30],
                    ['Scikit-Learn', 20]                    
                ]
            },{
                name: 'Javascript',
                id: 'Javascript',
                data: [
                    ['Jquery', 40],
                    ['AngularJS', 30],
                    ['Plain/Vanilla-JS', 30]                    
                ]
            }, {
                name: 'Databases',
                id: 'Databases',
                data: [
                    ['MySQL', 20],
                    ['PostgreSQL', 30],
                    ['Oracle', 30],
                    ['MongoDB', 20]
                ]
            }, {
                name: 'Misc',
                id: 'Misc',
                data: [
                    ['Git', 20],
                    ['SVN', 10],
                    ['AWS', 18],
                    ['Fabric',18],
                    ['nosetest', 10],
                    ['unittest', 5],
                    ['Lettuce', 10],
                    ['Bash', 10]
                ]
            }]
        }
    });
});

