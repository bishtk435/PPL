import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'forget-password', loadChildren: () =>
    import('./forget-password/forget-password.module').then( m => m.ForgetPasswordModule)},
  {path: 'home-page', component: HomepageComponent},
  {path: 'login', loadChildren: () =>
    import('./login/login.module').then( m => m.LoginModule)},
  {path: 'register', loadChildren: () =>
     import('./register/register.module').then( m => m.RegisterModule)},
  {path: 'reset-password', loadChildren: () =>
     import('./reset-password/reset-password.module').then( m => m.ResetPasswordModule)},
  {path: 'timeline', loadChildren: () =>
     import('./timeline/timeline.module').then( m => m.TimelineModule)},
  {path: 'post/:id', loadChildren: () =>
     import('./single-post/single-post.module').then( m => m.SinglePostModule)},
  {path: 'admin', loadChildren: () =>
    import('./admin/admin.module').then( m => m.AdminModule)},
  {path: '**', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
