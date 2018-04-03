import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {currenciesMetaMocks} from './mocks/currenciesMetaMock';

@Injectable()
export class CurrencyService {
  currencies = currenciesMetaMocks;

  constructor(private http: HttpClient) {
  }

  getRates() {
    const t = this.currencies.map(curr => curr.symbol);
    return this.http.get('/api/rates/v2', {params: {t}});
  }

  getNameForCurrency(symbol) {
    return this.currencies.find(curr => curr.symbol === symbol).name;
  }

  getCurrency(symbol) {
    return this.currencies.find(curr => curr.symbol === symbol);
  }

}
