import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFrontLayoutComponent } from './layouts/admin-front-layout/admin-front-layout.component';
import { DefaultFrontLayoutComponent } from './layouts/default-front-layout/default-front-layout.component';
import { LoginFrontLayoutComponent } from './layouts/login-front-layout/login-front-layout.component';
import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminSidebarPageComponent } from './pages/admin-sidebar-page/admin-sidebar-page.component';
import { ChatterPageComponent } from './pages/chatter-page/chatter-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ManageAgentAccountPageComponent } from './pages/manage-agent-account-page/manage-agent-account-page.component';
import { ManageCasesPageComponent } from './pages/manage-cases-page/manage-cases-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';

const routes: Routes = [
  { path: '',
    component: LoginFrontLayoutComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
    ]
  },
  {
    path: '',
    component: AdminFrontLayoutComponent,

    children: [
      { path: 'admin', component: AdminPageComponent},
      { path: 'agents', component: ManageAgentAccountPageComponent},
      { path: 'cases', component: ManageCasesPageComponent},
    ]
  },
  {
    path: '',
    component: DefaultFrontLayoutComponent,
    children: [
      { path: 'default-page', component: DefaultPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'report-page', component: ReportPageComponent },
      { path: 'account-page', component: AccountPageComponent },
      { path: 'dashboard-page', component: DashboardPageComponent },
      { path: 'chatter-page', component: ChatterPageComponent }
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
