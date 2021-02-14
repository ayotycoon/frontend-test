import { PaymentService } from './../../../services/payment.service';
import { PaymentI } from './../../../dtos/payment';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { ChoosePayment } from 'src/app/actions/payment.actions';
import { AppState, getPayments, getSelectedPayment } from '../../../reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'payment2';
  cards$ = this.store.pipe(select(getPayments));
  defaultCardIndex$ = this.store.pipe(select(getSelectedPayment));
  defaultCardIndex:any
  selectedCard:PaymentI;

  constructor(private store: Store<AppState>, private paymentService:PaymentService) {


  }

  choosePayment(i, data:PaymentI){
    this.store.dispatch(new ChoosePayment(i));
    this.selectedCard = data;
    this.defaultCardIndex = i;
  }

}
