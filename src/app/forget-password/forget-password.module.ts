import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ForgetPasswordComponent } from './forget-password.component';

const routes = [
  {path: '', component: ForgetPasswordComponent}
];


@NgModule({
  declarations: [
    ForgetPasswordComponent
   ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ForgetPasswordModule { }
