export class PageUserAction {
  static readonly type = '[User] UserProductAction';
  constructor(public page: number, public size:number) { }
}

