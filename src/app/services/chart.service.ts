import { Injectable } from '@angular/core';
import { ChartComponent } from '../content/charts/chart/chart.component';
import { ChartsContainerComponent } from '../content/charts/charts-container/charts-container.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IncomeDataSlice {
  src_office_id: number;
  office_name: string;
  dt_date: string;
  qty_orders: number;
  qty_new: number;
  qty_delivered: number;
  qty_return: number;
}
export interface DataUnit {
  x: string;
  y: number;
}
export interface DataBox {
  [key: string | number]: Array<IncomeDataSlice>;
}

@Injectable()
export class ChartService {
  public dataArray: Array<Array<Array<DataUnit>>> | undefined;

  constructor(private _require: HttpClient) {}

  startService() {
    this.parsedata().subscribe((data) => {
      let result = data.reduce((acc: DataBox, el) => {
        let key = el.src_office_id;
        acc[key] = acc[key] ? [...acc[key], el] : [el];
        return acc;
      }, {});
      console.log(result);
      let temp = [];
      for (let id in result) {
        const names: Array<any> = [];
        const orders: Array<DataUnit> = [];
        const neword: Array<DataUnit> = [];
        const delivered: Array<DataUnit> = [];
        const returned: Array<DataUnit> = [];
        names.push(result[id][0].office_name);
        names.push(result[id][0].src_office_id);

        for (let key in result[id]) {
          let temp = result[id];
          orders.push({ x: temp[key].dt_date, y: temp[key].qty_orders });
          neword.push({ x: temp[key].dt_date, y: temp[key].qty_new });
          delivered.push({ x: temp[key].dt_date, y: temp[key].qty_delivered });
          returned.push({ x: temp[key].dt_date, y: temp[key].qty_return });
        }
        temp.push([names, orders, neword, delivered, returned]);
      }

      let general = data.reduce((acc: DataBox, el) => {
        let key = el.dt_date;
        acc[key] = acc[key] ? [...acc[key], el] : [el];
        return acc;
      }, {});

      const namesArr: Array<any> = [];
      const ordersArr: Array<DataUnit> = [];
      const newordArr: Array<DataUnit> = [];
      const deliveredArr: Array<DataUnit> = [];
      const returnedArr: Array<DataUnit> = [];

      namesArr.push('General Stats');
      namesArr.push('all');

      for (let i in general) {
        let date = i;
        let orders = 0;
        let neword = 0;
        let delivered = 0;
        let returned = 0;

        for (let j in general[i]) {
          orders = orders + general[i][j]?.qty_orders;
          neword = neword + general[i][j]?.qty_new;
          delivered = delivered + general[i][j]?.qty_delivered;
          returned = returned + general[i][j]?.qty_return;
        }
        ordersArr.push({ x: date, y: orders });
        newordArr.push({ x: date, y: neword });
        deliveredArr.push({ x: date, y: delivered });
        returnedArr.push({ x: date, y: returned });
      }

      temp.push([namesArr, ordersArr, newordArr, deliveredArr, returnedArr]);
      this.dataArray = temp;
      console.log(this.dataArray);
    });
  }

  parsedata(): Observable<Array<IncomeDataSlice>> {
    return this._require.get<Array<IncomeDataSlice>>('assets/02.json');
  }
}
