import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SinglePostContentComponent } from './single-post-content/single-post-content.component';
import { CommentComponent } from './comment/comment.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

const routes = [
  {path: '', component: SinglePostContentComponent}
];

@NgModule({
  declarations: [SinglePostContentComponent, CommentComponent, NewCommentComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SinglePostModule { }
