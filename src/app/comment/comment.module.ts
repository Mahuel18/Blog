import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';



@NgModule({
  declarations: [
    CommentListComponent,
    CommentFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentModule { }
