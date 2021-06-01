import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFrontLayoutComponent } from './layouts/login-front-layout/login-front-layout.component';
import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', 
    component: LoginFrontLayoutComponent,
    children: [
      { path: '', component: LoginPageComponent }
    ] 
  },
  {
    path: '',
    component: MainFrontLayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'contact-us', component: ContactPageComponent }
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
