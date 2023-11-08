import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {name: 'Superman', canFly: true, color: Color.blue},
    {name: 'Batman', canFly: false, color: Color.black},
    {name: 'Robin', canFly: false, color: Color.green},
    {name: 'Daredevil', canFly: false, color: Color.red},
    {name: 'Green Lantern', canFly: true, color: Color.green},
  ]

  public orderBy: keyof Hero | '' = '';

  public changeOrder(value: string): void {
    this.orderBy = value as keyof Hero;
  }

  public toggleCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
