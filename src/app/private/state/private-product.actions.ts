import { ProductDto } from '../../../api/models/product-dto';
export class AddProductAction {
  static readonly type = '[PrivateProduct] AddProductAction';
  constructor(public productDto: ProductDto) { }
}
