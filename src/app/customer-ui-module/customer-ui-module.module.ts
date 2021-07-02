import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { CustomerUiModuleRoutingModule } from './customer-ui-module-routing.module';
import { CustomerUiModuleComponent } from './customer-ui-module.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CreateCasePageComponent } from './pages/create-case-page/create-case-page.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ChatDisplayComponent } from './components/chat-display/chat-display.component';
import { TabListComponent } from './components/tab-list/tab-list.component';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';

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
    ChatPageComponent,
    ChatDisplayComponent,
    TabListComponent,
    DocsPageComponent,
  ],
  imports: [
    CommonModule,
    CustomerUiModuleRoutingModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
})
export class CustomerUiModuleModule {}
