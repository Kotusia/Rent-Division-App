import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms'

@Component({
  // moduleId: module.id,
  selector: 'new-payment',
  templateUrl: 'new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})

export class NewPaymentComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;

  formFields = {
      totalPayment: new FormControl('', Validators.required),

      paymentDivision: new FormArray([
        new FormGroup({
          description: new FormControl('', Validators.required),
          amount: new FormControl('', <any>Validators.required)
        })
      ]
  }

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup(this.formFields);

    this.formFields.totalPayment.valueChanges.subscribe(value => {
      (this.formFields.paymentDivision['amount'])
        .setValue(this.formFields.totalPayment);
    });
  }

  submit() {
    this.submitted = true;
    console.log("Form submitted !");
    console.log(this.form.value);
  }

}
