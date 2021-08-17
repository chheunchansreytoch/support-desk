import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFrontLayoutComponent } from './layouts/admin-front-layout/admin-front-layout.component';
import { DefaultFrontLayoutComponent } from './layouts/default-front-layout/default-front-layout.component';
import { LoginFrontLayoutComponent } from './layouts/login-front-layout/login-front-layout.component';
import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminSidebarPageComponent } from './pages/admin-sidebar-page/admin-sidebar-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
// import { ManageAgentAccountPageComponent } from './pages/manage-agent-account-page/manage-agent-account-page.component';
import { ManageCasesPageComponent } from './pages/manage-cases-page/manage-cases-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { ManageAgentsPageComponent } from './pages/manage-agents-page/manage-agents-page.component';
import { MyCasesPageComponent } from './pages/my-cases-page/my-cases-page.component';
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
      { path: 'admin/homepage', component: AdminPageComponent},
      { path: 'admin/manage/agents', component: ManageAgentsPageComponent},
      { path: 'admin/manage/cases', component: ManageCasesPageComponent},
    ]
  },
  {
    path: '',
    component: DefaultFrontLayoutComponent,
    children: [
      { path: 'cases', component: DefaultPageComponent },
      { path: 'contacts', component: ContactPageComponent },
      { path: 'reports', component: ReportPageComponent },
      { path: 'accounts', component: AccountPageComponent },

      // { path: 'mycases', component: MyCasesPageComponent },

    ],
  },

  // {
  //   path: '',
  //   component: MyCasesPageComponent,
  //   children: [
  //     path: '',
  //   ]
  // },

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
