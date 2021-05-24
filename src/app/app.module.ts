import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostListComponent } from './components/post-list/post-list.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { HeaderComponent } from './components/header/header.component';
import { CommentComponent } from './components/comment/comment.component';
import { FormsModule } from '@angular/forms';
import { UserModalComponent } from './components/user-modal/user-modal.component';
// import { MomentModule } from 'ngx-moment';
// import * as moment from 'moment';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    SinglePostComponent,
    HeaderComponent,
    CommentComponent,
    UserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
