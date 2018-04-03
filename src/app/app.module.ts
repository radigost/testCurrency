import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CurrencyService} from './currency.service';
import {AppComponent} from './app.component';
import {RatesListComponent} from './rates-list/rates-list.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RatesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
