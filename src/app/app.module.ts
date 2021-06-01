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
    LoginFrontLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
