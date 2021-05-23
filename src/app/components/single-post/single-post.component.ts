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
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getSinglepost(id).subscribe(data => {
      if (data.isInValid) {
        this.router.navigate(['/'])
      } else {
        this.post = data;
      }
    })
  }

}
