import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {
  api = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get(this.api + '/albums/');
  }

  getAlbum(id:string) {
    return this.http.get(this.api + '/albums/'+ id);
  }

  getAlbumPhotos(id:string) {
    return this.http.get(this.api + '/albums/' + id + '/photos/');
  }

  getUserById(id:string) {
    return this.http.get(this.api + '/users/' + id);
  }

  getAlbumsPhotos() {
    return this.http.get(this.api + '/photos/' );
  }

}
