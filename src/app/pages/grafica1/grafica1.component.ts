import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component implements OnInit {
  public label1: string[] = ['Pan', 'Refrescos', 'Tacos'];

  data1: number[] = [40, 20, 35];

  ngOnInit(): void {}
}
