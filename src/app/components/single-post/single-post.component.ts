import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  post: any = {};
  commentForm = {comment:''}
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.getPost();
    this.isUserLoggedIn();
  }

  getPost(){
    const id = this.route.snapshot.paramMap.get('id');
    // right now it is coming form staic data set, it's expected that service will give post data based to ID
    this.postService.getSinglepost(id).subscribe(data => {
      if (data.isInValid) { // handeling invalid id
        this.router.navigate(['/'])
      } else {
        this.post = data;
      }
    })
  }
  
  onSubmitComment(commentForm){
    const commentObj = {
      userId: 1,
      name: 'name 3',
      image: 'https://place-hold.it/70x70/',
      timeStamp: new Date(),
      comment: commentForm.value.comment,
      vote: {
        upVote: 0,
        downVote: 0,
        isUpvote: null
    }
    };
    this.post.comments = this.post.comments ? this.post.comments : [];
    this.post.comments.push(commentObj);
    commentForm.reset()
  }

  isUserLoggedIn(){
    this.postService.isUserLoggedIn.subscribe(data => {
      this.isLoggedIn = data;
    })
  }

}
