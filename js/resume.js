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
                name: 'Python and Web Development',
                y: 30,
                drilldown: 'Python'
            },{
                name: 'Machine Learning, Analytics and AI',
                y: 25,
                drilldown: 'ML/AI/DA'
            },{
                name: 'Javascript and Frameworks',
                y: 20,
                drilldown: 'Javascript'
            }, {
                name: 'Databases',
                y: 20,
                drilldown: 'Databases'
            },{
                name: 'Misc',
                y: 10,
                drilldown: 'Misc'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Python',
                id: 'Python',
                data: [
                    ['Django', 30],
                    ['Flask', 25],
                    ['HTML',25],
                    ['CSS',20]
                ]
            },{
                name: 'ML/AI/DA',
                id: 'ML/AI/DA',
                data: [
                    ['Octave', 20],
                    ['Pandas', 25],
                    ['Numpy', 10],
                    ['Scipy', 10],
                    ['NLTK', 25],
                    ['Scikit-Learn', 10]                    
                ]
            },{
                name: 'Javascript',
                id: 'Javascript',
                data: [
                    ['Jquery', 30],
                    ['AngularJS', 10],
                    ['Plain/Vanilla-JS', 20],
                    ['Vue', 20],
                    ['D3', 20]                    
                ]
            }, {
                name: 'Databases',
                id: 'Databases',
                data: [
                    ['MySQL', 30],
                    ['PostgreSQL', 20],
                    ['Oracle', 30],
                    ['MongoDB', 5],
                    ['Cassandra', 15],
                ]
            }, {
                name: 'Misc',
                id: 'Misc',
                data: [
                    ['Git', 20],
                    ['SVN', 20],
                    ['AWS', 10],
                    ['Fabric',10],
                    ['Tableau', 20],
                    ['Lettuce', 5],
                    ['Bash', 15]
                ]
            }]
        }
    });
});

