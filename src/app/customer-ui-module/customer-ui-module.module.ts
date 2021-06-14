import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerUiModuleRoutingModule } from './customer-ui-module-routing.module';
import { CustomerUiModuleComponent } from './customer-ui-module.component';

import {
  BodyComponent,
  HomePageComponent,
  FooterComponent,
  HeaderComponent,
} from './index';

@NgModule({
  declarations: [
    CustomerUiModuleComponent,
    BodyComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, CustomerUiModuleRoutingModule],
})
export class CustomerUiModuleModule {}
