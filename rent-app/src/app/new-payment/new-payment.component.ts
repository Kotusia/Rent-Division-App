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

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      totalPayment: new FormControl('', <any>Validators.required),

      paymentDivision: new FormArray([
        new FormGroup({
          description: new FormControl('', <any>Validators.required),
          amount: new FormControl('', <any>Validators.required)
        })
      ])
    });

    (<FormControl>this.form.controls['totalPayment']).valueChanges.subscribe(value => {
      (<FormControl>(<FormGroup>(<FormArray>this.form.controls['paymentDivision']).controls[0]).controls['amount'])
        .setValue(this.form.value.totalPayment);
    });
  }

  submit() {
    this.submitted = true;
    console.log("Form submitted !");
    console.log(this.form.value);
  }

}
