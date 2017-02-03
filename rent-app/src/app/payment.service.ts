import { Injectable } from '@angular/core';
import { IPayment } from './payment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()


export class PaymentService {

  private _paymentUrl = 'api/payment/payments.json';

  constructor(private _http: Http){}

  getPayments(): Observable<IPayment[]> {
    return this._http.get(this._paymentUrl)
      .map((response: Response) => <IPayment[]> response.json())
      .do(data => console.log('All'+ JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
