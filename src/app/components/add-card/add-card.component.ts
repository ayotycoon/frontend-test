import { PaymentI } from './../../dtos/payment';
import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddPayment } from 'src/app/actions/payment.actions';
import { AppState } from 'src/app/reducers';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  form = new FormGroup({
    number: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    expDate: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    cvv: new FormControl('', []),
  });

  constructor(private store: Store<AppState>, private router: Router,private paymentService:PaymentService) {

    // setInterval(() => {
    //   this.store.dispatch(new AddPayment(3))
    // }, 2000);

  }

  ngOnInit(): void {
  }
  addPayment(){
    this.paymentService.addPayment(this.form.value)
    .then((data: PaymentI) => {
      this.store.dispatch(new AddPayment(data))
      this.paymentService.alert$.next('Payment Added')

      this.form.reset()
      this.router.navigate(['/'])
    })
    .catch(e => {

    })
    

  }

}
