/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NewPaymentComponent } from './new-payment.component';

fdescribe('NewPaymentComponent', () => {
  let component: NewPaymentComponent;
  let fixture: ComponentFixture<NewPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewPaymentComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeDefined();
  });

  it('should create the form group', () => {
    expect(component.form).toBeDefined();
  });

  it('should set the initial value of the 1st input the same as in the totalAmount', () => {
    component.formFields.totalPayment.setValue(1000);
    expect(component.formFields.paymentDivision.controls[0].value.amount).toBe(1000);
  });

  it('should set the initial value of the 1st input the same as in the totalAmount', () => {
    // component.totalAmount = 10;
    // expect(component.totalAmount).toBe(component.firstInput + component.secondInput + component.thirdInput);
  });

});
