import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  @Input() doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3'];

  @Input()
  titulo: string = 'Sin titulo';

  @Input() data: number[] = [100, 60, 90];

  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data,
        backgroundColor: ['#e22c5a', '#2c5ae2	', '#2ce287'],
        hoverBackgroundColor: ['#e22c5a', '#2c5ae2', '#2ce287'],
        hoverBorderColor: ['#000000', '#000000', '#000000'],
      },
    ],
  };
  doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.data,
          backgroundColor: ['#e22c5a', '#2c5ae2	', '#2ce287'],
          hoverBackgroundColor: ['#e22c5a', '#2c5ae2', '#2ce287'],
          hoverBorderColor: ['#000000', '#000000', '#000000'],
        },
      ],
    };
  }
}
