import { Component } from '@angular/core';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentService } from './payment.service';


@Component({
  // moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ PaymentService]
})
export class AppComponent  {
  title = 'Rent Payment Administration Application';
}
