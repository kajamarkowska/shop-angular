export class PageProductAction {
  static readonly type = '[Product] PageProductAction';
  constructor(public page: number, public size: number) { }
}
export class ProductDetailsAction {
  static readonly type = '[Product] PageDetailsAction';
  constructor(public id: number) { }
}
