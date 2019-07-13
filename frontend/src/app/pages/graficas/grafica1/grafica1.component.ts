import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Estudiantes' },
    { data: [30, 10, 40, 50, 2, 100, 0], label: 'Temas' },
    { data: [1, 2, 3, 1, 2, 3, 3], label: 'Unidades' },
    { data: [100, 100, 100, 100, 100, 100, 100], label: 'Puntuación maximas' },
    { data: [28, 42, 40, 19, 86, 27, 90], label: 'Puntuación ontenidas' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(54, 162, 235, 0.7)',
      borderWidth: 2,
    },
    {
    backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(255, 206, 86, 0.7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(75, 192, 192, 0.7)',
      borderWidth: 2,
    } ,
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(255, 99, 132, 0.7)',
      borderWidth: 2,

    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }



  constructor() { }

  ngOnInit() {
  }

}







