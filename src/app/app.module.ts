// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { IntroductionBlockComponent } from './components/introduction-block/introduction-block.component';
// import { HeaderFrontComponent } from './shared/header-front/header-front.component';
// import { FooterFrontComponent } from './shared/footer-front/footer-front.component';
// import { HomePageComponent } from './pages/home-page/home-page.component';
// import { ContactPageComponent } from './pages/contact-page/contact-page.component';
// import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
// import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
// import { AllCasesFrontComponent } from './layouts/all-cases-front/all-cases-front.component';
// import { LoginPageComponent } from './pages/login-page/login-page.component';
// import { LoginHeaderComponent } from './shared/login-header/login-header.component';
// import { LoginFooterComponent } from './shared/login-footer/login-footer.component';
// import { LoginFrontLayoutComponent } from './layouts/login-front-layout/login-front-layout.component';
// import { DefaultFrontLayoutComponent } from './layouts/default-front-layout/default-front-layout.component';
// import { DefaultPageComponent } from './pages/default-page/default-page.component';
// import { DefaultHeaderFrontComponent } from './shared/default-header-front/default-header-front.component';
// import { DefaultFooterFrontComponent } from './shared/default-footer-front/default-footer-front.component';
// import { UserProfileComponent } from './components/user-profile/user-profile.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';

// import { MatSelectModule } from '@angular/material/select';
// import { MatTabsModule } from '@angular/material/tabs';

// @NgModule({
//   declarations: [
//     AppComponent,
//     IntroductionBlockComponent,
//     HeaderFrontComponent,
//     FooterFrontComponent,
//     HomePageComponent,
//     ContactPageComponent,
//     NotFoundPageComponent,
//     MainFrontLayoutComponent,
//     AllCasesFrontComponent,
//     LoginPageComponent,
//     LoginHeaderComponent,
//     LoginFooterComponent,
//     LoginFrontLayoutComponent,
//     DefaultFrontLayoutComponent,
//     DefaultPageComponent,
//     DefaultHeaderFrontComponent,
//     DefaultFooterFrontComponent,
//     UserProfileComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MatMenuModule,
//     MatIconModule,
//     MatFormFieldModule,
//     MatSelectModule,
//     MatTabsModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AdminSidebarPageComponent } from './pages/admin-sidebar-page/admin-sidebar-page.component';
import { ManageCasesPageComponent } from './pages/manage-cases-page/manage-cases-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ChatterPageComponent } from './pages/chatter-page/chatter-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AdminFrontLayoutComponent } from './layouts/admin-front-layout/admin-front-layout.component';
import { AdminFooterFrontComponent } from './shared/admin-footer-front/admin-footer-front.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminHeaderFrontComponent } from './shared/admin-header-front/admin-header-front.component';
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
    DashboardPageComponent,
    ChatterPageComponent,
    AdminPageComponent,
    AccountPageComponent,
    AdminHeaderFrontComponent,
    AdminFrontLayoutComponent,
    AdminFooterFrontComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatPaginatorModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
