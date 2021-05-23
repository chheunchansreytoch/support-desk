import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFrontLayoutComponent } from './layouts/main-front-layout/main-front-layout.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
 {
   path: '',
   component: MainFrontLayoutComponent,
   children: [
    { path: '', component: HomePageComponent },
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
