import { Injectable } from '@angular/core';

export interface Slice {
  src_office_id: number,
  office_name: string,
  dt_date: string,
  qty_orders: number,
  qty_new: number,
  qty_delivered: number,
  qty_return: number
}

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  public dataArray: Array<any> | undefined;
  public generalData: Array<any> | undefined;


  constructor() {

  }

  _init(){
    let data = this.parsedata().then( data =>{
      let result = data.reduce((acc:any, el) => {
        let key = el.src_office_id;
        acc[key] = acc[key] ? [...acc[key], el] : [el];
        return acc;
      }, {});

      let temp = [];
      for (let id in result){
        let names:any = [];
        let orders = [];
        let neword = [];
        let delivered = [];
        let returned = [];
        names.push(result[id][0].office_name)
        names.push(result[id][0].src_office_id)


        for (let key in result[id]){
        let temp = result[id];
        orders.push({x:temp[key].dt_date, y:temp[key].qty_orders});
        neword.push({x:temp[key].dt_date, y:temp[key].qty_new});
        delivered.push({x:temp[key].dt_date, y:temp[key].qty_delivered});
        returned.push({x:temp[key].dt_date, y:temp[key].qty_return});
        }
        temp.push([names,orders,neword,delivered,returned])
      }
      this.dataArray = temp;

      let general = data.reduce((acc:any, el) => {
        let key = el.dt_date;
        acc[key] = acc[key] ? [...acc[key], el] : [el];
        return acc;
      }, {});

      let temp2 = [];
      let namesArr = [];
      let ordersArr = [];
      let newordArr = [];
      let deliveredArr = [];
      let returnedArr = [];
      namesArr.push('General Stats')
      namesArr.push('all')
      for (let i in general){

        let date = i;
        let orders: number = 0;
        let neword: number = 0;
        let delivered: number = 0;
        let returned: number = 0;


        for(let j in general[i]){
          orders = orders + general[i][j]?.qty_orders;
          neword = neword + general[i][j]?.qty_new;
          delivered = delivered + general[i][j]?.qty_delivered;
          returned = returned + general[i][j]?.qty_return;
        }
        ordersArr.push({x:date, y:orders});
        newordArr.push({x:date, y:neword});
        deliveredArr.push({x:date, y:delivered});
        returnedArr.push({x:date, y:returned});
      }
      temp2.push([namesArr,ordersArr,newordArr,deliveredArr,returnedArr])
      this.generalData = temp2;
      console.log(this.dataArray);
    })

  }

  parsedata = async (): Promise<Array<Slice>> => {
      let  data  = await fetch('assets/02.json').then(response => {
              return response.json();
            })
      return data
    }
}
