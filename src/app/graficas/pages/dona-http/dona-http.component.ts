import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(
    private graficasService: GraficasService
  ) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe(data => {
    //     console.log(data);

    //     this.doughnutChartData = {
    //       labels: Object.keys(data),
    //       datasets: [{ data: Object.values(data) }]
    //     }
    //   })

    this.graficasService.getUsuariosRedesSocialesData()
      .subscribe(({ labels, values }) => {
        console.log(labels, values);

        this.doughnutChartData = {
          labels,
          datasets: [{ data: values }]
        }
      })
  }

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: []
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
