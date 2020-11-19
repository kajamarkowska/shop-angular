/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Mail Type Controller
 */
@Injectable({
  providedIn: 'root',
})
class MailTypeControllerService extends __BaseService {
  static readonly sendMailUsingGETPath = '/api/mails';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * sendMail
   * @param params The `MailTypeControllerService.SendMailUsingGETParams` containing the following parameters:
   *
   * - `mailType`: mailType
   *
   * - `Authorization`:
   */
  sendMailUsingGETResponse(params: MailTypeControllerService.SendMailUsingGETParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.mailType != null) __params = __params.set('mailType', params.mailType.toString());
    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mails`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * sendMail
   * @param params The `MailTypeControllerService.SendMailUsingGETParams` containing the following parameters:
   *
   * - `mailType`: mailType
   *
   * - `Authorization`:
   */
  sendMailUsingGET(params: MailTypeControllerService.SendMailUsingGETParams): __Observable<null> {
    return this.sendMailUsingGETResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MailTypeControllerService {

  /**
   * Parameters for sendMailUsingGET
   */
  export interface SendMailUsingGETParams {

    /**
     * mailType
     */
    mailType: 'PRIVATE' | 'PUBLIC';
    Authorization?: string;
  }
}

export { MailTypeControllerService }
