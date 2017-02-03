/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewPaymentComponent } from './new-payment.component';

fdescribe('NewPaymentComponent', () => {
  let component: NewPaymentComponent;
  let fixture: ComponentFixture<NewPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeTruthy();
  });

  it('should set the initial value of the 1st input the same as in the totalAmount', () => {
    component.totalAmount = 10;
    expect(component.totalAmount).toBe(component.firstInput);
  });

  it('should set the initial value of the 1st input the same as in the totalAmount', () => {
    component.totalAmount = 10;
    expect(component.totalAmount).toBe(component.firstInput + component.secondInput + component.thirdInput);
  });

});
