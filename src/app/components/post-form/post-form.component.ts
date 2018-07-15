import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Posts } from '../../models/Posts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})


export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Posts> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Posts> = new  EventEmitter();
  @Input() currentPost: Posts;
  @Input() isEdit: boolean;

  constructor(private postServices: PostsService) { }

  ngOnInit() {
    
  }
  addPost(title, body){
    if(!title || !body){
      alert('Please add a Post');
    }
    else{
      this.postServices.savePost({title, body} as Posts).subscribe
      (post => {
          this.newPost.emit(post);
        });
      
    }
      
  }
  updatePost(){
    this.postServices.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }

}
