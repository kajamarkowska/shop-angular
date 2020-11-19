/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductDto } from '../models/product-dto';

/**
 * Basket Controller
 */
@Injectable({
  providedIn: 'root',
})
class BasketControllerService extends __BaseService {
  static readonly getUserBasketUsingGETPath = '/api/basket';
  static readonly addProductToBasketUsingPOSTPath = '/api/basket';
  static readonly deleteProductByIdInBasketUsingDELETEPath = '/api/basket/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getUserBasket
   * @param Authorization undefined
   * @return OK
   */
  getUserBasketUsingGETResponse(Authorization?: string): __Observable<__StrictHttpResponse<Array<ProductDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (Authorization != null) __headers = __headers.set('Authorization', Authorization.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/basket`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductDto>>;
      })
    );
  }
  /**
   * getUserBasket
   * @param Authorization undefined
   * @return OK
   */
  getUserBasketUsingGET(Authorization?: string): __Observable<Array<ProductDto>> {
    return this.getUserBasketUsingGETResponse(Authorization).pipe(
      __map(_r => _r.body as Array<ProductDto>)
    );
  }

  /**
   * addProductToBasket
   * @param params The `BasketControllerService.AddProductToBasketUsingPOSTParams` containing the following parameters:
   *
   * - `productDto`: productDto
   *
   * - `Authorization`:
   */
  addProductToBasketUsingPOSTResponse(params: BasketControllerService.AddProductToBasketUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productDto;
    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/basket`,
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
   * addProductToBasket
   * @param params The `BasketControllerService.AddProductToBasketUsingPOSTParams` containing the following parameters:
   *
   * - `productDto`: productDto
   *
   * - `Authorization`:
   */
  addProductToBasketUsingPOST(params: BasketControllerService.AddProductToBasketUsingPOSTParams): __Observable<null> {
    return this.addProductToBasketUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * deleteProductByIdInBasket
   * @param params The `BasketControllerService.DeleteProductByIdInBasketUsingDELETEParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `Authorization`:
   */
  deleteProductByIdInBasketUsingDELETEResponse(params: BasketControllerService.DeleteProductByIdInBasketUsingDELETEParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/basket/${encodeURIComponent(params.id)}`,
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
   * deleteProductByIdInBasket
   * @param params The `BasketControllerService.DeleteProductByIdInBasketUsingDELETEParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `Authorization`:
   */
  deleteProductByIdInBasketUsingDELETE(params: BasketControllerService.DeleteProductByIdInBasketUsingDELETEParams): __Observable<null> {
    return this.deleteProductByIdInBasketUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module BasketControllerService {

  /**
   * Parameters for addProductToBasketUsingPOST
   */
  export interface AddProductToBasketUsingPOSTParams {

    /**
     * productDto
     */
    productDto: ProductDto;
    Authorization?: string;
  }

  /**
   * Parameters for deleteProductByIdInBasketUsingDELETE
   */
  export interface DeleteProductByIdInBasketUsingDELETEParams {

    /**
     * id
     */
    id: number;
    Authorization?: string;
  }
}

export { BasketControllerService }
