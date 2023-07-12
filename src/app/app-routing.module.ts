import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "Blog",
    pathMatch: 'full',
  },
  {
    path: "blog",
    loadChildren: () => 
      import("./blog/blog.module").then((m) => m.BlogModule),
  },
  {
    path: "auth",
    loadChildren: () => 
      import("./authentication/authentication.module").then((m) => m.AuthenticationModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
