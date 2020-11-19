import { UserDto } from './../../../api/models/user-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetCurrentUserAction, LoginAction, RegisterAction } from './auth.actions';
import { UserControllerService } from 'src/api/services';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Navigate } from '@ngxs/router-plugin';


export class AuthStateModel {
  public token:string
  public currentUser: UserDto
}

const defaults = {
  token: null,
  currentUser: null
};

@State<AuthStateModel>({
  name: 'auth',
  defaults
})
@Injectable()
export class AuthState {

  constructor(public httpClient: HttpClient,public userControllerService: UserControllerService, public matSnackBar: MatSnackBar) { }
  @Selector ()
  static token(state: AuthStateModel){
    return state.token;
  }
  @Selector ()
  static currentUser(state:AuthStateModel){
    return state.currentUser;
  }

  @Action(LoginAction)
  login(ctx: StateContext<AuthStateModel>, { email, password }: LoginAction) {
    const formData: FormData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    return this.httpClient.post<{ token }>('http://localhost:8080/login', formData, {}).pipe(tap(({token})=> {
      ctx.patchState({token})
      ctx.dispatch(new GetCurrentUserAction())
    } ),
    catchError((err, caught)=> {
      this.matSnackBar.open('Invalid data', null, {duration: 10000});
      return of()
    })
    );
  }

  @Action(RegisterAction)
  register( ctx: StateContext<AuthStateModel>, { userDto }: RegisterAction) {
    return this.userControllerService.saveUserUsingPOST({userDto}).pipe(
      tap(response => {
        this.matSnackBar.open('User is property register', null, {duration: 10000});
        ctx.dispatch(new Navigate(['/login']))
      }),
      catchError((err, caught)=> {
        this.matSnackBar.open('Invalid user data', null, {duration: 10000});
        return of()
      })
    );
  }

  @Action(GetCurrentUserAction)
  currentUser(ctx: StateContext<AuthStateModel>){
    return this.userControllerService.getCurrentUserUsingGET().pipe(tap(response=> {
     console.log(response)
      ctx.patchState({currentUser: response})
    } ));
  }

}
