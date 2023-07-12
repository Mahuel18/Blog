import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogCategoriesComponent} from './blog-categories/blog-categories.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';


const routes: Routes = [
    {
        path: "",
        component: BlogListComponent,
    },
    {
        path: "categories",
        component: BlogCategoriesComponent,
    },
    {
        path: "list",
        component: BlogListComponent,
    },
    {
        path: "post",
        component: BlogPostComponent,
    },
    {
        path: "edit",
        component: EditBlogComponent,
    },
    {
        path: "create",
        component: CreateBlogComponent,
    },
  ];
  
  @NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class BlogRoutingModule {}