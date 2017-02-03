import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  // moduleId: module.id,
  selector: 'new-payment',
  templateUrl: 'new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})

export class NewPaymentComponent {
  title = 'New payment';

  form: FormGroup;

  firstName = new FormControl("");
  surname = new FormControl("");
  date = new FormControl("");
  totalAmount = new FormControl("", Validators.required);
  firstInput = new FormControl(""); 
  secondInput = new FormControl(""); 
  thirdInput = new FormControl("");


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "firstName": this.firstName,
      "surname": this.surname,
      "date": this.date,
      "totalAmount": this.totalAmount,
      "firstInput": this.firstInput,
      "secondInput": this.secondInput,
      "thirdInput": this.thirdInput,

    });
  }
  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
  }

}
