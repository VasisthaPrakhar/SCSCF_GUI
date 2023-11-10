import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts'
import { DataService } from '../data.service';

@Component({
  selector: 'app-reg-by-pod',
  templateUrl: './reg-by-pod.component.html',
  styleUrls: ['./reg-by-pod.component.scss']
})
export class RegByPodComponent implements OnInit{

  
  pod: any[] = []
  data: any[] = []
  chart :any
  
  
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData1().subscribe((response) => {
      let c=0,cp=0;
      for(let p of response){
        this.pod.push(p.pod_id);
        c+=p.count;
      }
      window.localStorage.setItem('pod',response.length)
      class pod_data {
        constructor(public name: string, public y: number, public color: string) {}
      }
      function generateUniqueColors(numColors: number): string[] {
        const colors = [];
        const goldenRatioConjugate = 0.618033988749895;
      
        for (let i = 0; i < numColors; i++) {
          const hue = (i * goldenRatioConjugate) % 1; // Generate hues with the golden ratio
          const color = `hsl(${Math.floor(hue * 360)}, 70%, 50%)`; // Create an HSL color
          colors.push(color);
        }
      
        return colors;
      }
      const colors = generateUniqueColors(cp);
      cp=0;
      for(let p of response){
        let d=new pod_data(p.pod_id,(p.count/c),colors[cp++]);
        this.data.push(d);
      }
      this.chart = new Chart({
        chart: {
          type: 'pie',
          height: 325
        },
        title: {
          text: 'Pod wise Registration'
        },
        xAxis: {
          categories: this.pod
        },
        yAxis: {
          title: {
            text: 'Registration in %'
          }
        },
        series: [
         {
          type: 'pie',
          data: this.data
         }
        ],
        credits: {
          enabled: false
        }
      })
      
    })

      
  }
    
}
