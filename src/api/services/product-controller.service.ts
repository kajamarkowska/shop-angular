/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageProductDto } from '../models/page-product-dto';
import { ProductDto } from '../models/product-dto';

/**
 * Product Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductControllerService extends __BaseService {
  static readonly getProductPageUsingGETPath = '/api/products';
  static readonly saveProductUsingPOSTPath = '/api/products';
  static readonly searchProductByIdUsingGETPath = '/api/products/{id}';
  static readonly deleteProductUsingDELETEPath = '/api/products/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getProductPage
   * @param params The `ProductControllerService.GetProductPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `Authorization`:
   *
   * @return OK
   */
  getProductPageUsingGETResponse(params: ProductControllerService.GetProductPageUsingGETParams): __Observable<__StrictHttpResponse<PageProductDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageProductDto>;
      })
    );
  }
  /**
   * getProductPage
   * @param params The `ProductControllerService.GetProductPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `Authorization`:
   *
   * @return OK
   */
  getProductPageUsingGET(params: ProductControllerService.GetProductPageUsingGETParams): __Observable<PageProductDto> {
    return this.getProductPageUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageProductDto)
    );
  }

  /**
   * saveProduct
   * @param params The `ProductControllerService.SaveProductUsingPOSTParams` containing the following parameters:
   *
   * - `productDto`: productDto
   *
   * - `Authorization`:
   *
   * @return OK
   */
  saveProductUsingPOSTResponse(params: ProductControllerService.SaveProductUsingPOSTParams): __Observable<__StrictHttpResponse<ProductDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productDto;
    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDto>;
      })
    );
  }
  /**
   * saveProduct
   * @param params The `ProductControllerService.SaveProductUsingPOSTParams` containing the following parameters:
   *
   * - `productDto`: productDto
   *
   * - `Authorization`:
   *
   * @return OK
   */
  saveProductUsingPOST(params: ProductControllerService.SaveProductUsingPOSTParams): __Observable<ProductDto> {
    return this.saveProductUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as ProductDto)
    );
  }

  /**
   * searchProductById
   * @param params The `ProductControllerService.SearchProductByIdUsingGETParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `Authorization`:
   *
   * @return OK
   */
  searchProductByIdUsingGETResponse(params: ProductControllerService.SearchProductByIdUsingGETParams): __Observable<__StrictHttpResponse<ProductDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/products/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDto>;
      })
    );
  }
  /**
   * searchProductById
   * @param params The `ProductControllerService.SearchProductByIdUsingGETParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `Authorization`:
   *
   * @return OK
   */
  searchProductByIdUsingGET(params: ProductControllerService.SearchProductByIdUsingGETParams): __Observable<ProductDto> {
    return this.searchProductByIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as ProductDto)
    );
  }

  /**
   * deleteProduct
   * @param params The `ProductControllerService.DeleteProductUsingDELETEParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `Authorization`:
   */
  deleteProductUsingDELETEResponse(params: ProductControllerService.DeleteProductUsingDELETEParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.Authorization != null) __headers = __headers.set('Authorization', params.Authorization.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/products/${encodeURIComponent(params.id)}`,
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
   * deleteProduct
   * @param params The `ProductControllerService.DeleteProductUsingDELETEParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `Authorization`:
   */
  deleteProductUsingDELETE(params: ProductControllerService.DeleteProductUsingDELETEParams): __Observable<null> {
    return this.deleteProductUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ProductControllerService {

  /**
   * Parameters for getProductPageUsingGET
   */
  export interface GetProductPageUsingGETParams {

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
   * Parameters for saveProductUsingPOST
   */
  export interface SaveProductUsingPOSTParams {

    /**
     * productDto
     */
    productDto: ProductDto;
    Authorization?: string;
  }

  /**
   * Parameters for searchProductByIdUsingGET
   */
  export interface SearchProductByIdUsingGETParams {

    /**
     * id
     */
    id: number;
    Authorization?: string;
  }

  /**
   * Parameters for deleteProductUsingDELETE
   */
  export interface DeleteProductUsingDELETEParams {

    /**
     * id
     */
    id: number;
    Authorization?: string;
  }
}

export { ProductControllerService }
