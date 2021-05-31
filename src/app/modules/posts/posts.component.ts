import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Subscription } from "rxjs";
import { SelectUsersService } from "../../components/select-users/select-users.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  filteredPosts: any[] = [];
  selectedUserId: number;
  selectedUserName: string;
  subscriptionId: Subscription;
  subscriptionName: Subscription;

  constructor(private postService: PostsService, private usersService: SelectUsersService) {
    this.selectedUserId = 0;
    this.selectedUserName = '';

    this.subscriptionId = this.usersService.onUserId().subscribe(id => {
      if (id) {
        this.filteredPosts = this.posts.filter((item) => {return item.userId == id});
      } else {
        this.filteredPosts = this.posts;
      }
    });

    this.subscriptionName = this.usersService.onUserName().subscribe(name => {
      name ? this.selectedUserName = name : this.selectedUserName = '';
    });
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: any)=> {
      //console.log("Posts:", posts);
      this.posts = posts;
      this.filteredPosts = posts;
    });
  }

}
