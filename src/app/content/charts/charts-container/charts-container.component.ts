import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';


@Component({
  selector: 'app-charts-container',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.scss'],
  providers: [ChartService]
})
export class ChartsContainerComponent implements OnInit {

  constructor(public chartService : ChartService) {
    this.chartService.startService();
  }

  ngOnInit(): void {
  }

}
