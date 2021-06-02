import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';

import { AlbumsModule } from './modules/albums/albums.module';
import { PostsModule } from './modules/posts/posts.module';
import { AlbumsService } from "./modules/albums/albums.service";
import { PostsService } from "./modules/posts/posts.service";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AlbumComponent } from './components/album/album.component';
import { PostComponent } from './components/post/post.component';
import { SelectUsersModule } from './components/select-users/select-users.module';
import { MatListModule } from '@angular/material/list';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgxGalleryModule } from 'ngx-gallery-9';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AlbumComponent,
    PostComponent,
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlbumsModule,
    PostsModule,
    SelectUsersModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    NgxGalleryModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [AlbumsService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
