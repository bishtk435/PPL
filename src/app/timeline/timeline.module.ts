import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineBodyComponent } from './timeline-body/timeline-body.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailNavigationComponent } from './user-detail-navigation/user-detail-navigation.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MyPostsComponent } from './user-detail-navigation/my-posts/my-posts.component';
import { AboutComponent } from './user-detail-navigation/about/about.component';
import { AlbumComponent } from './user-detail-navigation/album/album.component';
import { PetsComponent } from './user-detail-navigation/pets/pets.component';
import { TimelinePostsComponent } from './timeline-posts/timeline-posts.component';


const routes: Routes = [
  {
  path: '',
  component: TimelineBodyComponent,
  children: [
    {
      path: 'my-posts',
      component: MyPostsComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'album',
      component: AlbumComponent
    },
    {
      path: 'pets',
      component: PetsComponent
    },
    {
      path: '/',
      component: TimelinePostsComponent
    }
  ]
},
];

@NgModule({
  declarations: [
    TimelineBodyComponent,
    UserDetailComponent,
    UserDetailNavigationComponent,
    ProfileFormComponent,
    MyPostsComponent,
    AboutComponent,
    AlbumComponent,
    PetsComponent,
    TimelinePostsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TimelineModule { }
