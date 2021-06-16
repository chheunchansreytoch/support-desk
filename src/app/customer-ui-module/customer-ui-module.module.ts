import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { CustomerUiModuleRoutingModule } from './customer-ui-module-routing.module';
import { CustomerUiModuleComponent } from './customer-ui-module.component';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';

import {
  BodyComponent,
  HomePageComponent,
  FooterComponent,
  HeaderComponent,
} from './index';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [
    CustomerUiModuleComponent,
    BodyComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    CustomerUiModuleRoutingModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CustomerUiModuleModule {}
