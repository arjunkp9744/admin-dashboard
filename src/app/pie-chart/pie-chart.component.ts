import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={

      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'LUMINAR TECHNOLAB ADMISSION 2023-2024',
        align: 'center'
    },
    subtitle: {
        text: 'LUMINAR TECHNOLAB',
        align: 'center'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Admission',
        data: [
            ['MEARN', 25],
            ['PYTHON', 20],
            ['TESTING',15],
            ['.NET', 10],
            ['FLUTTER', 20],
            ['JAVA SPRING', 10]
        ]
    }]

    }
  }
}
