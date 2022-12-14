import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import { Chart, registerables, _adapters } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { DataUnit } from 'src/app/services/chart.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: [],
})
export class ChartComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() dataset!: Array<Array<DataUnit>> | undefined;
  @Input() index!: number | string;
  name: string | undefined;

  constructor() {}
  ngAfterViewInit() {
    this.initChart(this.name!);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataset']) {
      this.name = 'id' + this.index;
    }
  }
  ngOnInit(): void {}

  initChart(name: string) {
    let chart = new Chart(name, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'orders',
            backgroundColor: 'rgba(250, 0, 129, 0.8)',
            borderColor: 'rgba(250, 0, 129, 0.8)',
            data: this.dataset![1],
          },
          {
            label: 'new',
            backgroundColor: 'rgba(0, 250, 49, 0.8)',
            borderColor: 'rgba(0, 250, 49, 0.8)',
            data: this.dataset![2],
          },
          {
            label: 'delivered',
            backgroundColor: 'rgba(67, 70, 90, 0.8)',
            borderColor: 'rgba(67, 70, 90, 0.8)',
            data: this.dataset![3],
          },
          {
            label: 'returned',
            backgroundColor: 'rgba(182, 117, 44, 0.8)',
            borderColor: 'rgba(182, 117, 44, 0.8)',
            data: this.dataset![4],
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'id ' + this.dataset![0][1] + ' ' + this.dataset![0][0],
          },
        },
      },
    });
  }
}
