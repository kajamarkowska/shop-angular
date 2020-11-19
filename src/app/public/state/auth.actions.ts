import { UserDto } from './../../../api/models/user-dto';
export class LoginAction {
  static readonly type = '[Auth] LoginAction';
  constructor(public email: string, public password: string) { }
}

export class RegisterAction{
 static readonly type = '[Auth] RegisterAction';
  constructor(public userDto: UserDto) { }
}
export class GetCurrentUserAction{
  static readonly type ='[Auth] GetCurrentUserAction';
  constructor(){}
}
