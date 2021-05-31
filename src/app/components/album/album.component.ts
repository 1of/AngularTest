import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {switchMap, map} from 'rxjs/operators';
import { AlbumsService } from '../../modules/albums/albums.service';
import { Orientation } from '@ngbmodule/material-carousel';
import { ThemePalette } from '@angular/material/core';
import 'hammerjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
  public album: any;
  public albumPhotos: any[] = [];
  public userInfo: any;
  // Carousel settings
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 25;
  public slideHeight = '200px';
  public slides = this.albumPhotos.length;
  public useKeyboard = true;
  public useMouseWheel = true;
  public orientation: Orientation = 'ltr';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumsService) {
    this.userInfo = {name: ""};
    this.album = {title: ""};
  }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap(params =>  params.getAll('id')),
      map(response => {
             this.albumService.getAlbumPhotos(response).subscribe((photos: any) => {
               this.albumPhotos = [...photos];
               //console.log("photos",photos);
             });
             this.albumService.getAlbum(response).subscribe((album: any) => {
               this.album = {...album};
               //console.log("album", album);
             });
             // Return Observable
             return this.albumService.getAlbum(response)
           })
       ).subscribe(id => {
             id.subscribe((response: any)=> {
               this.albumService.getUserById(response.userId).subscribe(user => {
                 this.userInfo = {...user};
                 //console.log("user", user);
               });
             })
    });
  }
}
