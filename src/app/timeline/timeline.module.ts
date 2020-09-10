import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineBodyComponent } from './timeline-body/timeline-body.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailNavigationComponent } from './user-detail-navigation/user-detail-navigation.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';


const routes = [
  {path: '', component: TimelineBodyComponent}
];

@NgModule({
  declarations: [TimelineBodyComponent, UserDetailComponent, UserDetailNavigationComponent, ProfileFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TimelineModule { }
