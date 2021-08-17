import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { IntroductionBlockComponent } from './components/introduction-block/introduction-block.component';
import { HeaderFrontComponent } from './shared/header-front/header-front.component';
import { FooterFrontComponent } from './shared/footer-front/footer-front.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
import { AllCasesFrontComponent } from './layouts/all-cases-front/all-cases-front.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginHeaderComponent } from './shared/login-header/login-header.component';
import { LoginFooterComponent } from './shared/login-footer/login-footer.component';
import { LoginFrontLayoutComponent } from './layouts/login-front-layout/login-front-layout.component';
import { DefaultFrontLayoutComponent } from './layouts/default-front-layout/default-front-layout.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
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
import { ConfirmMessageDialogComponent } from './components/dialogs/confirm-message-dialog/confirm-message-dialog.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { MatListModule } from '@angular/material/list';
// import { DefaultContentHeaderPageComponent } from './pages/default-content-header-page/default-content-header-page.component';
import { MycasesTablePageComponent } from './pages/mycases-table-page/mycases-table-page.component';
import { MyCasesPageComponent } from './pages/my-cases-page/my-cases-page.component';
import { AllClosedCasesPageComponent } from './pages/all-closed-cases-page/all-closed-cases-page.component';
import { AllOpenCasesPageComponent } from './pages/all-open-cases-page/all-open-cases-page.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionBlockComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    HomePageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    MainFrontLayoutComponent,
    AllCasesFrontComponent,
    LoginPageComponent,
    LoginHeaderComponent,
    LoginFooterComponent,
    LoginFrontLayoutComponent,
    DefaultFrontLayoutComponent,
    DefaultPageComponent,
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
    // DefaultContentHeaderPageComponent,
    MycasesTablePageComponent,
    MyCasesPageComponent,
    AllClosedCasesPageComponent,
    AllOpenCasesPageComponent,
  ],
  entryComponents: [CreateAgentsDialogComponent, ConfirmMessageDialogComponent, MoreDetailDialogComponent, ConfirmDialogComponent],
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
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatListModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
