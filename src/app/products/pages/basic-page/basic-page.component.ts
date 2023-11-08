import { Component } from '@angular/core';

@Component({
  selector: 'products-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLowerCase: string = 'daniel'
  public nameUpperCase: string = 'DANIEL'
  public fullName: string = 'daniel ViLlA MoRalEs'
  public customDate: Date = new Date()

}
