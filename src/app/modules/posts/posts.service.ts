import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  api = environment.apiUrl;
  constructor(private http: HttpClient) {

  }
  getPosts() {
    return this.http.get(this.api + '/posts/');
  }
  getPostById(id: string) {
    return this.http.get(this.api + '/posts/' + id);
  }
  getPostCommentsById(id: string) {
    return this.http.get(this.api + '/posts/' + id + '/comments/');
  }
  getUserById(id:string) {
    return this.http.get(this.api + '/users/' + id);
  }
}
