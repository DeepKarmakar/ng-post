import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  loginObj = {
    email: 'deep@gmail.com',
    password: 'password'
  }

  isWrongLogin = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private postService: PostService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(){

  }

  open(content) {
    this.modalService.open(content);
  }

  onSubmitLogin(val, content){
    if (val.email == 'deep@gmail.com' && val.password == 'password') {
      this.postService.updateLogin(true);
      this.modalService.dismissAll()
    } else{
      console.log('n');
      this.isWrongLogin = true; 
    }
  }
}
