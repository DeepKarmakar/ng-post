import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { SinglePostComponent } from './components/single-post/single-post.component';


const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path:'post/:id',
    component: SinglePostComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
