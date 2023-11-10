import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts'
import { DataService } from '../data.service';

@Component({
  selector: 'app-reg-by-month',
  templateUrl: './reg-by-month.component.html',
  styleUrls: ['./reg-by-month.component.scss']
})
export class RegByMonthComponent implements OnInit{
  data_reg: any[] = []; 
  data_imsi: any[] = []; 
  data_pub: any[] = []; 


  chart :any
  
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData5().subscribe((response) => {
      
      // this.data_imsi=imsi_arr;
      // this.data_pub=pub_arr;
      this.data_reg=response;
      console.log('====================================');
      console.log(response);
      console.log('====================================');
      this.chart = new Chart({
        chart: {
          type: 'line',
          height: 325
        },
        title: {
          text: 'Month wise Registrations'
        },
        xAxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        },
        yAxis: {
          title: {
            text: 'Number Of Registraions in Thousand'
          }
        },
        series: [
          {
            name: "Registrations",
            type: "line",
            color: '#044342',
            data: this.data_reg
          },
          // {
          //   name: 'IMSI',
          //   type: 'line',
          //   color: '#7e0505',
          //   data: this.data_imsi
          // },
          // {
          //   name: 'PUB_ID',
          //   type: 'line',
          //   color: '#ed9e20',
          //   data: this.data_pub
          // },
        ],
        credits: {
          enabled: false
        }
      })
     
      // this.data_imsi=imsi_arr;
      // this.data_pub=pub_arr;
      // this.chart.series[0].data = this.data_reg;
      // console.log('====================================');
      // console.log(this.data_reg);
      // console.log('====================================');
      
    })

      
  }
  
}
