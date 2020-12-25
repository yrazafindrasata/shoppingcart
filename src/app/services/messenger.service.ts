import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }
  sendMsg(item){
    this.subject.next(item)
  }

  getMsg(){
    return this.subject.asObservable()
  }

  // sendMsg(product){
  //   this.subject.next(product)
  // }

  // sendMsgCartItem(cartItem){
  //   this.subject.next(cartItem)
  // }

  // getMsgCartItem(){
  //   return this.subject.asObservable()
  // }

  // getMsg(){
  //   return this.subject.asObservable()
  // }
}
