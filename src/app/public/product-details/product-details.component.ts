import { ProductDetailsAction } from './../state/product.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {
  displayedColumns=['id','state','language version', 'product reviews','quantity','details']
  constructor(public store: Store, public activateRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      this.store.dispatch(new ProductDetailsAction (params.id))
      
    })
  }

}
