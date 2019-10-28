import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


declare var paypal;
@Component({
  selector: 'app-paypall',
  templateUrl: './paypall.component.html',
  styleUrls: ['./paypall.component.scss']
})

export class PaypallComponent implements OnInit {
  title:String='Paypal';
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  product = {
    price: 777.77,
    description: 'used couch, decent condition',
    img: 'assets/couch.jpg'
  };

  paidFor = false;

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                unit:3,
                warrenty: '3 year',
                description: this.product.description,
                amount: {
                  // currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}