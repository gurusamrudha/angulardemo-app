import { Component, OnInit } from '@angular/core';

import { Posts } from '../../models/Posts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Posts[];
  currentPost: Posts = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private postServices: PostsService) { }

  ngOnInit() {
    this.postServices.getPosts().subscribe(posts => {
      this.posts = posts;

    });
  }
  onNewPost(post: Posts) {
    this.posts.unshift(post);
  }

  editPost(post: Posts) {
    this.currentPost = post;
    this.isEdit = true;

  }

  onUpdatedPost(post: Posts) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    })
  }

  removePost(post: Posts) {
    if (confirm('Are you sure?')) {
      this.postServices.removePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if (post.id === cur.id) {
            this.posts.splice(index, 1);
          }
        })
      })
    }
  }

}
