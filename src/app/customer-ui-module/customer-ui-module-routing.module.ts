import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { CreateCasePageComponent } from './pages/create-case-page/create-case-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'home', component: HomePageComponent },
    ],
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'case', component: DashboardPageComponent },
      { path: 'case/list', component: DashboardPageComponent },
      { path: 'case/create', component: CreateCasePageComponent },
      { path: 'chat', component: ChatPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerUiModuleRoutingModule {}
