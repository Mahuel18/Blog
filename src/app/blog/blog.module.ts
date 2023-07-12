import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogPostComponent,
    CreateBlogComponent,
    EditBlogComponent,
    BlogCategoriesComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
  ]
})
export class BlogModule { }
