import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  BodyComponent,
  HomePageComponent,
  HeaderComponent,
  FooterComponent,
} from './index';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'body', component: BodyComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'footer', component: FooterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerUiModuleRoutingModule {}
