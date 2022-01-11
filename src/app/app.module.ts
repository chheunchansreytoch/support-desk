import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { IntroductionBlockComponent } from './components/introduction-block/introduction-block.component';
import { HeaderFrontComponent } from './shared/header-front/header-front.component';
import { FooterFrontComponent } from './shared/footer-front/footer-front.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
import { LoginHeaderComponent } from './shared/login-header/login-header.component';
import { LoginFooterComponent } from './shared/login-footer/login-footer.component';
import { LoginFrontLayoutComponent } from './layouts/login-front-layout/login-front-layout.component';
import { DefaultFrontLayoutComponent } from './layouts/default-front-layout/default-front-layout.component';
import { DefaultHeaderFrontComponent } from './shared/default-header-front/default-header-front.component';
import { DefaultFooterFrontComponent } from './shared/default-footer-front/default-footer-front.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AdminSidebarPageComponent } from './pages/admin-sidebar-page/admin-sidebar-page.component';
import { ManageCasesPageComponent } from './pages/manage-cases-page/manage-cases-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AdminFrontLayoutComponent } from './layouts/admin-front-layout/admin-front-layout.component';
import { AdminFooterFrontComponent } from './shared/admin-footer-front/admin-footer-front.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminHeaderFrontComponent } from './shared/admin-header-front/admin-header-front.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ManageAgentsPageComponent } from './pages/manage-agents-page/manage-agents-page.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MoreDetailDialogComponent } from './components/dialogs/more-detail-dialog/more-detail-dialog.component';
import { CreateAgentsDialogComponent } from './components/dialogs/create-agents-dialog/create-agents-dialog.component';
import { MatListModule } from '@angular/material/list';
import { MyCasesPageComponent } from './pages/my-cases-page/my-cases-page.component';
import { AllClosedCasesPageComponent } from './pages/all-closed-cases-page/all-closed-cases-page.component';
import { AllOpenCasesPageComponent } from './pages/all-open-cases-page/all-open-cases-page.component';
import { AgentCasesComponent } from './shared/agent-cases/agent-cases.component';
import { AgentContactsComponent } from './shared/agent-contacts/agent-contacts.component';
import { TabDefaultpageFrontLayoutComponent } from './layouts/tab-defaultpage-front-layout/tab-defaultpage-front-layout.component';
import { CasesPageComponent } from './pages/cases-page/cases-page.component';
import { RecentlyViewedCasesPageComponent } from './pages/recently-viewed-cases-page/recently-viewed-cases-page.component';
import { AllContactsPageComponent } from './pages/all-contacts-page/all-contacts-page.component';
import { MyContactsPageComponent } from './pages/my-contacts-page/my-contacts-page.component';
import { RecentlyViewedContactsPageComponent } from './pages/recently-viewed-contacts-page/recently-viewed-contacts-page.component';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { MatChipsModule } from '@angular/material/chips';
import { DetailsCaseFrontLayoutComponent } from './layouts/details-case-front-layout/details-case-front-layout.component';
import { CaseSidebarPageComponent } from './pages/case-sidebar-page/case-sidebar-page.component';
import { CaseDetailsPageComponent } from './pages/case-details-page/case-details-page.component';
import { ChatSidePageComponent } from './pages/chat-side-page/chat-side-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SendToDialogComponent } from './components/dialogs/send-to-dialog/send-to-dialog.component';
import { QuillModule } from 'ngx-quill';
import { DetailsContactLayoutComponent } from './layouts/details-contact-layout/details-contact-layout.component';
import { DetailsAccountLayoutComponent } from './layouts/details-account-layout/details-account-layout.component';
import { ReportLayoutComponent } from './layouts/report-layout/report-layout.component';
import { ContactSidebarPageComponent } from './pages/contact-sidebar-page/contact-sidebar-page.component';
import { ContactInfoPageComponent } from './pages/contact-info-page/contact-info-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactChatterPageComponent } from './pages/contact-chatter-page/contact-chatter-page.component';
import { AllAccountsPageComponent } from './pages/all-accounts-page/all-accounts-page.component';
import { MyAccountsPageComponent } from './pages/my-accounts-page/my-accounts-page.component';
import { RecentlyViewedAccountsPageComponent } from './pages/recently-viewed-accounts-page/recently-viewed-accounts-page.component';
import { AccountSidebarPageComponent } from './pages/account-sidebar-page/account-sidebar-page.component';
import { AccountDetailsPageComponent } from './pages/account-details-page/account-details-page.component';
import { AccountChatterPageComponent } from './pages/account-chatter-page/account-chatter-page.component';
import { AccountInfoPageComponent } from './pages/account-info-page/account-info-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewAllDialogComponent } from './components/dialogs/view-all-dialog/view-all-dialog.component';
import { CreateNewDialogComponent } from './components/dialogs/create-new-dialog/create-new-dialog.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { ViewAllcasesDialogComponent } from './components/dialogs/view-allcases-dialog/view-allcases-dialog.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { CreateCaseDialogComponent } from './components/dialogs/create-case-dialog/create-case-dialog.component';
import { AssignToDialogComponent } from './components/dialogs/assign-to-dialog/assign-to-dialog.component';
import { AdminSidebarLayoutComponent } from './layouts/admin-sidebar-layout/admin-sidebar-layout.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ViewNotificationDialogComponent } from './components/dialogs/view-notification-dialog/view-notification-dialog.component';
import { ManagerLoginPageComponent } from './pages/manager-login-page/manager-login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AgentLoginPageComponent } from './pages/agent-login-page/agent-login-page.component';
import { CustomerLoginPageComponent } from './pages/customer-login-page/customer-login-page.component';
import { MatTreeModule } from '@angular/material/tree';
import { ConfirmDeleteDialogComponent } from './components/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { DialogDeleteComponent } from './components/dialogs/crud-manageCase-page/dialog-delete/dialog-delete.component';
import { DialogUpdateComponent } from './components/dialogs/crud-manageCase-page/dialog-update/dialog-update.component';
import {MatButtonModule} from '@angular/material/button';
import { AgentDeleteCaseDialogComponent } from './components/dialogs/agent-delete-case-dialog/agent-delete-case-dialog.component';
//import { UpdateCaseDialogComponent } from './components/dialogs/update-case-dialog/update-case-dialog.component';
import { AgentUpdateDialogComponent } from './components/dialogs/agent-update-dialog/agent-update-dialog.component';
import { AlertInformationDialogComponent } from './components/alert-information-dialog/alert-information-dialog.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { TableSkeletonLoadingComponent } from './components/table-skeleton-loading/table-skeleton-loading.component';
import { SkeletonModule } from 'primeng/skeleton';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CaseUpdateDialogComponent } from './components/dialogs/case-update-dialog/case-update-dialog.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    IntroductionBlockComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    MainFrontLayoutComponent,
    LoginHeaderComponent,
    LoginFooterComponent,
    LoginFrontLayoutComponent,
    DefaultFrontLayoutComponent,
    DefaultHeaderFrontComponent,
    DefaultFooterFrontComponent,
    UserProfileComponent,
    ReportPageComponent,
    AdminSidebarPageComponent,
    ManageCasesPageComponent,
    AdminPageComponent,
    AccountPageComponent,
    AdminHeaderFrontComponent,
    AdminFrontLayoutComponent,
    AdminFooterFrontComponent,
    ManageAgentsPageComponent,
    CreateAgentsDialogComponent,
    MyCasesPageComponent,
    AllClosedCasesPageComponent,
    AllOpenCasesPageComponent,
    AgentCasesComponent,
    AgentContactsComponent,
    TabDefaultpageFrontLayoutComponent,
    CasesPageComponent,
    RecentlyViewedCasesPageComponent,
    AllContactsPageComponent,
    MyContactsPageComponent,
    RecentlyViewedContactsPageComponent,
    TestingPageComponent,
    DetailsCaseFrontLayoutComponent,
    CaseSidebarPageComponent,
    CaseDetailsPageComponent,
    ChatSidePageComponent,
    SendToDialogComponent,
    DetailsContactLayoutComponent,
    DetailsAccountLayoutComponent,
    ReportLayoutComponent,
    ContactSidebarPageComponent,
    ContactInfoPageComponent,
    ContactDetailsPageComponent,
    ContactChatterPageComponent,
    AllAccountsPageComponent,
    MyAccountsPageComponent,
    RecentlyViewedAccountsPageComponent,
    AccountDetailsPageComponent,
    AccountChatterPageComponent,
    AccountInfoPageComponent,
    AccountSidebarPageComponent,
    ViewAllDialogComponent,
    CreateNewDialogComponent,
    DialogsComponent,
    ViewAllcasesDialogComponent,
    TestPageComponent,
    CreateCaseDialogComponent,
    AssignToDialogComponent,
    AdminSidebarLayoutComponent,
    ViewNotificationDialogComponent,
    ManagerLoginPageComponent,
    AgentLoginPageComponent,
    CustomerLoginPageComponent,
    ConfirmDeleteDialogComponent,
    DialogDeleteComponent,
    DialogUpdateComponent,
    AgentDeleteCaseDialogComponent,
    //UpdateCaseDialogComponent,
    AgentUpdateDialogComponent,
    AlertInformationDialogComponent,
    ConfirmationDialogComponent,
    NotFoundPageComponent,
    TableSkeletonLoadingComponent,
    CaseUpdateDialogComponent
  ],
  entryComponents: [CreateAgentsDialogComponent, MoreDetailDialogComponent, SendToDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatProgressBarModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    QuillModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatBadgeModule,
    HttpClientModule,
    MatTreeModule,
    MatButtonModule,
    LottieModule.forRoot({ player: playerFactory }),
    SkeletonModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
