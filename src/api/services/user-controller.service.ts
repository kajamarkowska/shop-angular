/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageUserDto } from '../models/page-user-dto';
import { UserDto } from '../models/user-dto';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly getUserPageUsingGETPath = '/api/users';
  static readonly saveUserUsingPOSTPath = '/api/users';
  static readonly getCurrentUserUsingGETPath = '/api/users/current';
  static readonly searchUserByIdUsingGETPath = '/api/users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getUserPage
   * @param params The `UserControllerService.GetUserPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `Authorization`:
   *
   * @return OK
   */
  getUserPageUsingGETResponse(params: UserControllerService.GetUserPageUsingGETParams): __Observable<__StrictHttpResponse<PageUserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageUserDto>;
      })
    );
  }
  /**
   * getUserPage
   * @param params The `UserControllerService.GetUserPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `Authorization`:
   *
   * @return OK
   */
  getUserPageUsingGET(params: UserControllerService.GetUserPageUsingGETParams): __Observable<PageUserDto> {
    return this.getUserPageUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageUserDto)
    );
  }

  /**
   * saveUser
   * @param params The `UserControllerService.SaveUserUsingPOSTParams` containing the following parameters:
   *
   * - `userDto`: userDto
   *
   * - `Authorization`:
   *
   * @return OK
   */
  saveUserUsingPOSTResponse(params: UserControllerService.SaveUserUsingPOSTParams): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.userDto;
    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * saveUser
   * @param params The `UserControllerService.SaveUserUsingPOSTParams` containing the following parameters:
   *
   * - `userDto`: userDto
   *
   * - `Authorization`:
   *
   * @return OK
   */
  saveUserUsingPOST(params: UserControllerService.SaveUserUsingPOSTParams): __Observable<UserDto> {
    return this.saveUserUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * getCurrentUser
   * @param Authorization undefined
   * @return OK
   */
  getCurrentUserUsingGETResponse(Authorization?: string): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Authorization != null) __headers = __headers.set('Authorization', Authorization.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/current`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * getCurrentUser
   * @param Authorization undefined
   * @return OK
   */
  getCurrentUserUsingGET(Authorization?: string): __Observable<UserDto> {
    return this.getCurrentUserUsingGETResponse(Authorization).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * searchUserById
   * @param params The `UserControllerService.SearchUserByIdUsingGETParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `Authorization`:
   *
   * @return OK
   */
  searchUserByIdUsingGETResponse(params: UserControllerService.SearchUserByIdUsingGETParams): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * searchUserById
   * @param params The `UserControllerService.SearchUserByIdUsingGETParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `Authorization`:
   *
   * @return OK
   */
  searchUserByIdUsingGET(params: UserControllerService.SearchUserByIdUsingGETParams): __Observable<UserDto> {
    return this.searchUserByIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }
}

module UserControllerService {

  /**
   * Parameters for getUserPageUsingGET
   */
  export interface GetUserPageUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;
    Authorization?: string;
  }

  /**
   * Parameters for saveUserUsingPOST
   */
  export interface SaveUserUsingPOSTParams {

    /**
     * userDto
     */
    userDto: UserDto;
    Authorization?: string;
  }

  /**
   * Parameters for searchUserByIdUsingGET
   */
  export interface SearchUserByIdUsingGETParams {

    /**
     * id
     */
    id: number;
    Authorization?: string;
  }
}

export { UserControllerService }
