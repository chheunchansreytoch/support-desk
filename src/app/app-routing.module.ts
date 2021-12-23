import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFrontLayoutComponent } from './layouts/admin-front-layout/admin-front-layout.component';
import { DefaultFrontLayoutComponent } from './layouts/default-front-layout/default-front-layout.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ManageCasesPageComponent } from './pages/manage-cases-page/manage-cases-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { ManageAgentsPageComponent } from './pages/manage-agents-page/manage-agents-page.component';
import { MyCasesPageComponent } from './pages/my-cases-page/my-cases-page.component';
import { TabDefaultpageFrontLayoutComponent } from './layouts/tab-defaultpage-front-layout/tab-defaultpage-front-layout.component';
import { AllOpenCasesPageComponent } from './pages/all-open-cases-page/all-open-cases-page.component';
import { AllClosedCasesPageComponent } from './pages/all-closed-cases-page/all-closed-cases-page.component';
import { CasesPageComponent } from './pages/cases-page/cases-page.component';
import { AllContactsPageComponent } from './pages/all-contacts-page/all-contacts-page.component';
import { MyContactsPageComponent } from './pages/my-contacts-page/my-contacts-page.component';
import { RecentlyViewedContactsPageComponent } from './pages/recently-viewed-contacts-page/recently-viewed-contacts-page.component';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { DetailsCaseFrontLayoutComponent } from './layouts/details-case-front-layout/details-case-front-layout.component';
import { CaseSidebarPageComponent } from './pages/case-sidebar-page/case-sidebar-page.component';
import { CaseDetailsPageComponent } from './pages/case-details-page/case-details-page.component';
import { ChatSidePageComponent } from './pages/chat-side-page/chat-side-page.component';
import { DetailsContactLayoutComponent } from './layouts/details-contact-layout/details-contact-layout.component';
import { ContactSidebarPageComponent } from './pages/contact-sidebar-page/contact-sidebar-page.component';
import { ContactInfoPageComponent } from './pages/contact-info-page/contact-info-page.component';
import { ContactChatterPageComponent } from './pages/contact-chatter-page/contact-chatter-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { AllAccountsPageComponent } from './pages/all-accounts-page/all-accounts-page.component';
import { MyAccountsPageComponent } from './pages/my-accounts-page/my-accounts-page.component';
import { RecentlyViewedAccountsPageComponent } from './pages/recently-viewed-accounts-page/recently-viewed-accounts-page.component';
import { DetailsAccountLayoutComponent } from './layouts/details-account-layout/details-account-layout.component';
import { AccountSidebarPageComponent } from './pages/account-sidebar-page/account-sidebar-page.component';
import { AccountInfoPageComponent } from './pages/account-info-page/account-info-page.component';
import { AccountDetailsPageComponent } from './pages/account-details-page/account-details-page.component';
import { AccountChatterPageComponent } from './pages/account-chatter-page/account-chatter-page.component';
import { ManagerLoginPageComponent } from './pages/manager-login-page/manager-login-page.component';
import { AgentLoginPageComponent } from './pages/agent-login-page/agent-login-page.component';


const routes: Routes = [
  // { path: '',
  //   component: LoginFrontLayoutComponent,
  //   children: [
  //     { path: '', component: LoginPageComponent },
  //     // { path: 'test', component: TestingPageComponent },
  //   ]
  // },

  { path: '', component: ManagerLoginPageComponent },
  { path: 'agent-login', component: AgentLoginPageComponent },

  {
    path: '',
    component: AdminFrontLayoutComponent,

    children: [
      { path: 'admin-homepage', component: AdminPageComponent},
      { path: 'admin-manage-agents', component: ManageAgentsPageComponent},
      { path: 'admin-manage-cases', component: ManageCasesPageComponent},
    ]
  },

  {
    path: '',
    component: DefaultFrontLayoutComponent,
    children: [
      {
        path: '',
        component: TabDefaultpageFrontLayoutComponent,
        children: [
          {
            path: 'cases',
            component: CasesPageComponent,
            children: [
              { path: '', redirectTo: 'agent-all-closed-cases', pathMatch: 'full' },
              { path: 'agent-all-closed-cases', component: AllClosedCasesPageComponent },
              {
                path: 'case-details',
                component: DetailsCaseFrontLayoutComponent,
                children: [
                  {
                    path: '',
                    component: CaseSidebarPageComponent,
                    outlet: 'child1'
                  },

                  {
                    path: '',
                    component: CaseDetailsPageComponent,
                    outlet: 'child2'
                  },

                  {
                    path: '',
                    component: ChatSidePageComponent,
                    outlet: 'child3'
                  },
                ]
              },
              { path: 'agent-all-open-cases', component: AllOpenCasesPageComponent},
              { path: 'agent-my-cases', component: MyCasesPageComponent},
            ],
          },

          {
            path: 'contacts',
            component: ContactPageComponent,
            children: [
              { path: '', redirectTo: 'agent-all-contacts', pathMatch: 'full' },
              { path: 'agent-all-contacts', component: AllContactsPageComponent},
              { path: 'contact-details',
                component: DetailsContactLayoutComponent,
                children: [
                  {
                    path: '',
                    component: ContactSidebarPageComponent,
                    outlet: 'child1'
                  },

                  {
                    path: '',
                    component: ContactInfoPageComponent,
                    outlet: 'child2'
                  },

                  {
                    path: '',
                    component: ContactDetailsPageComponent,
                    outlet: 'child3'
                  },

                  {
                    path: '',
                    component: ContactChatterPageComponent,
                    outlet: 'child4'
                  },
                ]
              },

              { path: 'agent-my-contacts', component: MyContactsPageComponent},
              { path: 'agent-recently-viewed-contacts', component: RecentlyViewedContactsPageComponent},
            ]
          },

          {
            path: 'accounts',
            component: AccountPageComponent,
            children: [
              { path: '', redirectTo: 'agent-all-accounts', pathMatch: 'full' },
              { path: 'agent-all-accounts', component: AllAccountsPageComponent},

              { path: 'account-details',
                component: DetailsAccountLayoutComponent,
                children: [
                {
                  path: '',
                  component: AccountSidebarPageComponent,
                  outlet: 'child1'
                },

                {
                  path: '',
                  component: AccountInfoPageComponent,
                  outlet: 'child2'
                },

                {
                  path: '',
                  component: AccountDetailsPageComponent,
                  outlet: 'child3'
                },

                {
                  path: '',
                  component: AccountChatterPageComponent,
                  outlet: 'child4'
                },
              ]
            },

              { path: 'agent-my-account', component: MyAccountsPageComponent},
              { path: 'agent-recently-viewed-account', component: RecentlyViewedAccountsPageComponent},
            ]
          },

          {
            path: 'reports',
            component: ReportPageComponent
          },
        ]
      }
    ],
  },

  { path: 'test', component: TestingPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
