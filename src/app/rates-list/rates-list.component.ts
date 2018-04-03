import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../currency.service';

@Component({
  selector: 'app-rates-list',
  templateUrl: './rates-list.component.html',
  styleUrls: ['./rates-list.component.css']
})
export class RatesListComponent implements OnInit {
  rates = [];

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.currencyService.getRates()
      .subscribe(
        data => this.rates = data.rates,
        err => console.error(err),
      );
  }

  getName(symbol) {
    return this.currencyService.getNameForCurrency(symbol);
  }

  getUrl(symbol) {
    return this.currencyService.getCurrency(symbol).iconUrl;
  }

}
