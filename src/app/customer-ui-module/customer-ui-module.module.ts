import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { CustomerUiModuleRoutingModule } from './customer-ui-module-routing.module';
import { CustomerUiModuleComponent } from './customer-ui-module.component';
import { MatIconModule } from '@angular/material/icon';

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
  imports: [
    CommonModule,
    CustomerUiModuleRoutingModule,
    MatSliderModule,
    MatIconModule,
  ],
})
export class CustomerUiModuleModule {}
