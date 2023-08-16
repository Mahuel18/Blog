import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogRoutingModule } from './blog-routing.module';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommentModule } from '../comment/comment.module';
import { CommentListComponent } from '../comment/comment-list/comment-list.component';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogPostComponent,
    CreateBlogComponent,
    EditBlogComponent,
    BlogCategoriesComponent,
    LandingComponent,
    ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RouterModule,
    FormsModule,
    CommentModule,
  ]
})
export class BlogModule { }
