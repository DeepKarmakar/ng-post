import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment;
  commentForm = {comment:''}
  isLoggedIn: boolean;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.isUserLoggedIn();
  }

  toggleCommentBox(comment){
    if (!this.isLoggedIn) {
      return;
    }
    comment.isReplying = comment.isReplying ? false : true;
  }

  onSubmitComment(commentValue, comment){
    const commentObj = {
      userId: 1,
      name: 'name 3',
      image: 'https://place-hold.it/70x70/',
      timeStamp: new Date(),
      comment: commentValue.comment,
    };
    comment.childComments = comment.childComments ? comment.childComments : [];
    comment.childComments.push(commentObj)
    this.toggleCommentBox(comment);
  }

  voteHandeller(comment, isUpVote){
    
    if (!this.isLoggedIn) {
      return;
    }
    if (comment.vote.isUpvote == null) { // fresh vote
      if (isUpVote) {
        comment.vote.upVote += 1;
      } else{
        comment.vote.downVote += 1;
      }
    } else if(comment.vote.isUpvote){ //already having up vote
      comment.vote.upVote -= 1;
      if (!isUpVote) {
        comment.vote.downVote += 1;
      } else {
        isUpVote = null
      }
    } else if(!comment.vote.isUpvote){ //already having down vote
      comment.vote.downVote -= 1;
      if (isUpVote) {
        comment.vote.upVote += 1;
      } else{
        isUpVote = null
      }  
    }
    comment.vote.isUpvote = isUpVote;
  }

  
  isUserLoggedIn(){
    this.postService.isUserLoggedIn.subscribe(data => {
      this.isLoggedIn = data;
    })
  }
}
