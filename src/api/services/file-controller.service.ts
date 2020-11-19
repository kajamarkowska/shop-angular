/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * File Controller
 */
@Injectable({
  providedIn: 'root',
})
class FileControllerService extends __BaseService {
  static readonly getFileUsingGETPath = '/api/files';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getFile
   * @param params The `FileControllerService.GetFileUsingGETParams` containing the following parameters:
   *
   * - `fileType`: fileType
   *
   * - `Authorization`:
   *
   * @return OK
   */
  getFileUsingGETResponse(params: FileControllerService.GetFileUsingGETParams): __Observable<__StrictHttpResponse<ArrayBuffer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.fileType != null) __params = __params.set('fileType', params.fileType.toString());
    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/files`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'arraybuffer'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArrayBuffer>;
      })
    );
  }
  /**
   * getFile
   * @param params The `FileControllerService.GetFileUsingGETParams` containing the following parameters:
   *
   * - `fileType`: fileType
   *
   * - `Authorization`:
   *
   * @return OK
   */
  getFileUsingGET(params: FileControllerService.GetFileUsingGETParams): __Observable<ArrayBuffer> {
    return this.getFileUsingGETResponse(params).pipe(
      __map(_r => _r.body as ArrayBuffer)
    );
  }
}

module FileControllerService {

  /**
   * Parameters for getFileUsingGET
   */
  export interface GetFileUsingGETParams {

    /**
     * fileType
     */
    fileType: 'PDF' | 'XLS' | 'CSV' | 'DOC' | 'JSON';
    Authorization?: string;
  }
}

export { FileControllerService }
