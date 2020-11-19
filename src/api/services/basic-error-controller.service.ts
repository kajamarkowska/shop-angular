/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Basic Error Controller
 */
@Injectable({
  providedIn: 'root',
})
class BasicErrorControllerService extends __BaseService {
  static readonly errorUsingGETPath = '/error';
  static readonly errorUsingHEADPath = '/error';
  static readonly errorUsingPOSTPath = '/error';
  static readonly errorUsingPUTPath = '/error';
  static readonly errorUsingDELETEPath = '/error';
  static readonly errorUsingOPTIONSPath = '/error';
  static readonly errorUsingPATCHPath = '/error';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingGETResponse(Authorization?: string): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Authorization != null) __headers = __headers.set('Authorization', Authorization.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingGET(Authorization?: string): __Observable<{[key: string]: {}}> {
    return this.errorUsingGETResponse(Authorization).pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingHEADResponse(Authorization?: string): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Authorization != null) __headers = __headers.set('Authorization', Authorization.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingHEAD(Authorization?: string): __Observable<{[key: string]: {}}> {
    return this.errorUsingHEADResponse(Authorization).pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingPOSTResponse(Authorization?: string): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Authorization != null) __headers = __headers.set('Authorization', Authorization.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingPOST(Authorization?: string): __Observable<{[key: string]: {}}> {
    return this.errorUsingPOSTResponse(Authorization).pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingPUTResponse(Authorization?: string): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Authorization != null) __headers = __headers.set('Authorization', Authorization.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingPUT(Authorization?: string): __Observable<{[key: string]: {}}> {
    return this.errorUsingPUTResponse(Authorization).pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingDELETEResponse(Authorization?: string): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Authorization != null) __headers = __headers.set('Authorization', Authorization.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingDELETE(Authorization?: string): __Observable<{[key: string]: {}}> {
    return this.errorUsingDELETEResponse(Authorization).pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingOPTIONSResponse(Authorization?: string): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Authorization != null) __headers = __headers.set('Authorization', Authorization.toString());
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingOPTIONS(Authorization?: string): __Observable<{[key: string]: {}}> {
    return this.errorUsingOPTIONSResponse(Authorization).pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }

  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingPATCHResponse(Authorization?: string): __Observable<__StrictHttpResponse<{[key: string]: {}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Authorization != null) __headers = __headers.set('Authorization', Authorization.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/error`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: {}}>;
      })
    );
  }
  /**
   * error
   * @param Authorization undefined
   * @return OK
   */
  errorUsingPATCH(Authorization?: string): __Observable<{[key: string]: {}}> {
    return this.errorUsingPATCHResponse(Authorization).pipe(
      __map(_r => _r.body as {[key: string]: {}})
    );
  }
}

module BasicErrorControllerService {
}

export { BasicErrorControllerService }
