import { PaymentI } from './../dtos/payment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  alert$ = new BehaviorSubject(null as any);

  constructor(private http: HttpClient) { }


  addPayment(data: PaymentI){
    return new Promise((resolve,reject) => {

      this.http.get('https://jsonplaceholder.typicode.com/todos/1').toPromise()
      .then(()=>resolve(data))
      .catch((e)=>reject(e))
    }) 
  }
 
}
