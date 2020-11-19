/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { BasketControllerService } from './services/basket-controller.service';
import { FileControllerService } from './services/file-controller.service';
import { MailTypeControllerService } from './services/mail-type-controller.service';
import { ProductControllerService } from './services/product-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    BasketControllerService,
    FileControllerService,
    MailTypeControllerService,
    ProductControllerService,
    UserControllerService,
    BasicErrorControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
