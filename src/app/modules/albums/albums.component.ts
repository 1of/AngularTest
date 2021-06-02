import {Component, NgModule, OnInit, OnDestroy  } from '@angular/core';
import { AlbumsService } from './albums.service';
import { SelectUsersService } from "../../components/select-users/select-users.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit{

  albums: any[] = [];
  filteredAlbums: any[] = [];
  selectedUserId: number;
  selectedUserName: string;
  subscriptionId: Subscription;
  subscriptionName: Subscription;

  constructor(private albumService: AlbumsService, private usersService: SelectUsersService) {
    this.selectedUserId = 0;
    this.selectedUserName = '';

    this.subscriptionId = this.usersService.onUserId().subscribe(id => {
      if (id) {
        this.filteredAlbums = this.albums.filter((album) => {return album.userId == id});
      } else {
        this.filteredAlbums = this.albums;
      }
    });
    this.subscriptionName = this.usersService.onUserName().subscribe(name => {
      name ? this.selectedUserName = name : this.selectedUserName = '';
    });
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums: any)=> {
      console.log("Albums:", albums);
      this.albums = albums;
      this.filteredAlbums = albums;
    });
    this.albumService.getAlbumsPhotos().subscribe((data: any)=> {
      // Left only unique 1st album thumbnail
      let newAlbumsPhoto = data.filter((el: any, index: any, arr: any) =>
        index === arr.findIndex((t: any) => (
          t.albumId === el.albumId
        )));

      // Modifying albums array by adding thumbnail url
      newAlbumsPhoto.forEach((item: any, i: any) => {
        this.albums.find((id, index)=> {
          if (id.id === item.albumId) {
            this.albums[i].thumbnailUrl = item.thumbnailUrl;
            this.filteredAlbums[i].thumbnailUrl = item.thumbnailUrl;
          }
        } )
      });
    });
  }

  async ngOnDestroy() {
    this.subscriptionId.unsubscribe();
    this.subscriptionName.unsubscribe();
  }
}
