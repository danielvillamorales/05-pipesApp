import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n select
  public name :string = 'Daniel';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla'
  }

  //i18n plural
  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Daniel', 'Ana'];
  public clientsMap ={
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  //keyvalue pipe
  public person = {
    name: 'Daniel',
    age: 35,
    address: 'Madrid, España'
  }

  //async pipe
  public myObservableTimer = interval(2000).pipe(
    tap( (value) => console.log('timer ', value))
  );

  public myPromise:Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  } );

  changeClient(){
    this.name = 'Maria';
    this.gender = 'female';
  }

  deleteClient(){
    this.clients.shift();
  }
}
