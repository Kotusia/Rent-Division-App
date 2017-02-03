import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    PaymentListComponent,
    NewPaymentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'payment-list',
        component: PaymentListComponent
      },
      {
        path: 'new-payment',
        component: NewPaymentComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
