import { PaymentService } from './../../../services/payment.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit,OnDestroy {
text:string;
ref: SubscriptionLike
  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
   this.ref =  this.paymentService.alert$.subscribe(text => {
      if(!text){
        return
      }

      this.text = text

      setTimeout(() => {
        this.text = null;
      },5000)
    })
  }
  ngOnDestroy(){
    this.ref.unsubscribe()
  }

}
