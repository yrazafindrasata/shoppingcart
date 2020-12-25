import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }

  handleAddtoCart() {
    this.msg.sendMsg([this.cartItem, 1])
  }

  handleRemovetoCart() {
    this.msg.sendMsg([this.cartItem, 2])
  }

}
