import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';

//configuracion del locale de la app
import localeEsCO from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsCO);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule
  ],
  exports: [],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-CO'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
