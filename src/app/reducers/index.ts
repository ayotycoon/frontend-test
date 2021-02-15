
import { ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { PaymentI } from '../dtos/payment';
import { PaymentActions } from '../actions/payment.actions';


export interface PaymentsStateI {
  payments: PaymentI[];
  selectedPayment: number;
}

const initialPaymentsState: PaymentsStateI = {
  payments: [
    
  

],

  selectedPayment:0

};


export interface AppState {
  payments: PaymentsStateI;

}

export function PaymentReducer(state: PaymentsStateI = initialPaymentsState, action): PaymentsStateI {
  switch (action.type) {
    case PaymentActions.ADD_PAYMENT:
      return { ...state, payments: [...state.payments, action.payload] };

    case PaymentActions.CHOOSE_PAYMENT:
      return { ...state, selectedPayment:action.payload};

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {

  payments: PaymentReducer,
};

export const getPayments = (state: AppState) => state.payments.payments;
export const getSelectedPayment = (state: AppState) => state.payments.selectedPayment;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];