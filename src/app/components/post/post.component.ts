import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../../modules/posts/posts.service';
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;
  postComments: any[] = [];
  userInfo: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostsService) {
    this.userInfo = {name: ""};
    this.post = {title: ""};
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params =>  params.getAll('id')),
      map(response => {
        this.postService.getPostById(response).subscribe((post: any) => {
          this.post = post;
          //console.log("Post",post);
        });
        this.postService.getPostCommentsById(response).subscribe((comments: any) => {
          this.postComments = comments;
          //console.log("Comments", comments);
        });
        return this.postService.getPostById(response)
      })
    ).subscribe(id => {
      id.subscribe((response: any)=> {
        this.postService.getUserById(response.userId).subscribe(user=> {
          this.userInfo = user;
          //console.log("USER", user);
        });
      })
    });
  }
}
