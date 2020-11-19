import { ProductControllerService } from 'src/api/services';
import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { AddProductAction } from './private-product.actions';

export class PrivateProductStateModel {
 
}

const defaults = {
  
};

@State<PrivateProductStateModel>({
  name: 'privateProduct',
 defaults
})
@Injectable()
export class PrivateProductState {
  constructor(public productControllerService: ProductControllerService) {}
  @Action(AddProductAction)
  add({ patchState }: StateContext<PrivateProductStateModel>, { productDto }: AddProductAction) {
    return this.productControllerService.saveProductUsingPOST({productDto})
    
  }
}
