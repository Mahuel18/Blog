import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos Internos
import { BlogModule } from './blog/blog.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CommentModule } from './comment/comment.module';
import { CoreModule } from './core/core.module';
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { PaginationModule } from './pagination/pagination.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    AuthenticationModule,
    CommentModule,
    CoreModule,
    ErrorHandlingModule,
    PaginationModule,
    SearchModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
