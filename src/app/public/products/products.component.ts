import { PageProductDto } from './../../../api/models/page-product-dto';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, Action, Select } from '@ngxs/store';
import { PageProductAction } from '../state/product.actions';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  displayedColumns=['id','name','description', 'price','quantity','details']
  @Select(state=> state.product.pageProduct)
  pageProduct$: Observable<PageProductDto>
  autoComplete$: Observable<string[]>
  constructor(public store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new PageProductAction(0,10))
  }
  changePage(event : PageEvent){
    this.store.dispatch(new PageProductAction (event.pageIndex, event.pageSize))
  }
  
}
