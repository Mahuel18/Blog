import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormControl, FormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog/blog-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Modulos Internos
import { BlogModule } from './blog/blog.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CommentModule } from './comment/comment.module';
import { CoreModule } from './core/core.module';
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { PaginationModule } from './pagination/pagination.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';





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
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
