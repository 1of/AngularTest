import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { AlbumsService } from '../../modules/albums/albums.service';
import 'hammerjs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
  public album: any;
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  public userInfo: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumsService) {
    this.userInfo = {name: ""};
    this.album = {title: ""};
    this.galleryOptions = [];
    this.galleryImages = [];
  }

  ngOnInit(): void {
  this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 12,
        imageSize: 'contain',
        thumbnailSize: 'contain',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.route.paramMap.pipe(
      switchMap(params =>  params.getAll('id')),
      map(response => {
             this.albumService.getAlbumPhotos(response).subscribe((photos: any) => {
               //console.log("photos",photos);
               this.galleryImages = photos.map((item: any)=> {
                 return {
                   small: item.thumbnailUrl,
                   medium: item.url,
                   big: item.url
                 }
               });
               //console.log("photos", this.galleryImages);
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
