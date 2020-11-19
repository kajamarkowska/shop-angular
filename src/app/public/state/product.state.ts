import { ProductDto } from './../../../api/models/product-dto';
import { PageProductDto } from './../../../api/models/page-product-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { ProductControllerService } from 'src/api/services';
import { PageProductAction, ProductDetailsAction } from './product.actions';
import { tap } from 'rxjs/operators';

export class ProductStateModel {
  public pageProduct: PageProductDto
  public product: ProductDto
}

const defaults = {
  pageProduct: null,
  product: null

};

@State<ProductStateModel>({
  name: 'product',
  defaults 
})
@Injectable()
export class ProductState {

  constructor(public httpClient: HttpClient, public productControllerService: ProductControllerService){}

  @Action(PageProductAction)
  getPage(ctx: StateContext<ProductStateModel>, { page, size }: PageProductAction) {
   return this.productControllerService.getProductPageUsingGET({page, size}).pipe(
     tap(response=>ctx.patchState({pageProduct: response}))
   );
  }
  @Action(ProductDetailsAction)
  getDetails(ctx: StateContext<ProductStateModel>, { id}: ProductDetailsAction) {
   return this.productControllerService.searchProductByIdUsingGET({id}).pipe(
     tap(response=>ctx.patchState({product: response}))
   );
  }
}
