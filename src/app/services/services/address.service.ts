/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AddressDto } from '../models/address-dto';
import { delete2 } from '../fn/address/delete-2';
import { Delete2$Params } from '../fn/address/delete-2';
import { findAll3 } from '../fn/address/find-all-3';
import { FindAll3$Params } from '../fn/address/find-all-3';
import { findById3 } from '../fn/address/find-by-id-3';
import { FindById3$Params } from '../fn/address/find-by-id-3';
import { save3 } from '../fn/address/save-3';
import { Save3$Params } from '../fn/address/save-3';

@Injectable({ providedIn: 'root' })
export class AddressService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll3()` */
  static readonly FindAll3Path = '/address/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3$Response(params?: FindAll3$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AddressDto>>> {
    return findAll3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3(params?: FindAll3$Params, context?: HttpContext): Observable<Array<AddressDto>> {
    return this.findAll3$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AddressDto>>): Array<AddressDto> => r.body)
    );
  }

  /** Path part for operation `save3()` */
  static readonly Save3Path = '/address/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3$Response(params: Save3$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3(params: Save3$Params, context?: HttpContext): Observable<number> {
    return this.save3$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById3()` */
  static readonly FindById3Path = '/address/{address-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3$Response(params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressDto>> {
    return findById3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3(params: FindById3$Params, context?: HttpContext): Observable<AddressDto> {
    return this.findById3$Response(params, context).pipe(
      map((r: StrictHttpResponse<AddressDto>): AddressDto => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/address/{address-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<void> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
