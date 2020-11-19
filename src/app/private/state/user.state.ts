import { UserControllerService } from 'src/api/services';
import { PageUserDto } from './../../../api/models/page-user-dto';
import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { PageUserAction } from './user.actions';
import { tap } from 'rxjs/operators';

export class UserStateModel {
  public pageUser: PageUserDto
}

const defaults = {
  pageUser: null
};

@State<UserStateModel>({
  name: 'user',
  defaults
})
@Injectable()
export class UserState {

  constructor(public userControllerService: UserControllerService) { }
  @Action(PageUserAction)
  getPage({ patchState }: StateContext<UserStateModel>, { page, size }: PageUserAction) {
    return this.userControllerService.getUserPageUsingGET({ page, size }).pipe(
      tap(response => patchState({ pageUser: response }))
    )
  }
}
