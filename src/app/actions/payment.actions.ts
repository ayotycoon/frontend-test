
import { Action } from '@ngrx/store';
import { PaymentI } from '../dtos/payment';

export const PaymentActions = {
  ADD_PAYMENT: 'ADD_PAYMENT',
  CHOOSE_PAYMENT: 'CHOOSE_PAYMENT',
}

export class AddPayment implements Action {
  readonly type = PaymentActions.ADD_PAYMENT
 

  constructor(readonly payload:  PaymentI) {

  }
}

export class ChoosePayment implements Action {
  readonly type = PaymentActions.CHOOSE_PAYMENT
 

  constructor(readonly payload:  PaymentI) {

  }
}
