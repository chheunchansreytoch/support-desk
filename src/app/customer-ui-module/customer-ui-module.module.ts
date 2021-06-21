import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { CustomerUiModuleRoutingModule } from './customer-ui-module-routing.module';
import { CustomerUiModuleComponent } from './customer-ui-module.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CreateCasePageComponent } from './pages/create-case-page/create-case-page.component';
import { QuillModule } from 'ngx-quill';

// import { QuillModule } from 'ngx-quill';
// QuillModule.forRoot(),
@NgModule({
  declarations: [
    CustomerUiModuleComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    MainLayoutComponent,
    DashboardPageComponent,
    DashboardLayoutComponent,
    CreateCasePageComponent,
  ],
  imports: [
    CommonModule,
    CustomerUiModuleRoutingModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    // QuillModule.forRoot(),
  ],
})
export class CustomerUiModuleModule {}
