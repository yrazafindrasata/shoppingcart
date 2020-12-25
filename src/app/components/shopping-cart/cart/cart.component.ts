import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  cartItems = []

  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((item: any) => {
      if (item[1] === 1){
        this.addProduct(item[0])
      }
      if (item[1] === 0){
        this.addProductToCart(item[0])
      }
      if (item[1] === 2){
        this.removeProduct(item[0])
      }
    })
  }

  addProduct(cartItem){
    for (let i in this.cartItems){
      if(this.cartItems[i].productId === cartItem.productId){
        this.cartItems[i].qty++
        break
      }
    }
    this.sommeTotal()

  }

  removeProduct(cartItem){
    let i = 0
    while (i<this.cartItems.length){
      if(this.cartItems[i].productId === cartItem.productId){
        this.cartItems[i].qty--
        if(this.cartItems[i].qty===0){
          this.cartItems.splice(i,1)         
        }
        break
      }
      i++
    }
    this.sommeTotal()
  }

  addProductToCart(product: Product){
    let productExists = false
    for (let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].qty++
        productExists = true
        break
      }
    }
    if(!productExists){
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
    this.sommeTotal()
  }

  sommeTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item =>{
      this.cartTotal+=(item.qty*item.price)
    })
  }
}
