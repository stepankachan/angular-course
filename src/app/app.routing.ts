import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from './login/components/login/login.component';
import {MainPageComponent} from './main/components/main/main-page.component';
import {ErrorPageComponent} from './error/components/error-page/error-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'error', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
