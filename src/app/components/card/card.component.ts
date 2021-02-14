import { PaymentI } from './../../dtos/payment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() default: boolean;
  @Input() payment: PaymentI;
  constructor() { }

  ngOnInit(): void {
  }
  

}
