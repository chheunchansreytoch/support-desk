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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
