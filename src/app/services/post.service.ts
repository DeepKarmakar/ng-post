import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as constant from '../constants/post.constant';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(){
    return of(constant.posts);
  }

  getSinglepost(id){
    // check for valid ID
    const validIds = constant.posts.map(item => item.id);
    const notValidPost = {
      isInValid:true
    }
    if (validIds.includes(Number(id))) {
      return of(constant.post);
    }
    return of(notValidPost)
  }
}
