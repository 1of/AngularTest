import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './modules/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'posts', component: PostsComponent, data: { animation: 'posts' } },
  { path: 'post/:id', component: PostComponent,  data: { animation: 'post' } },
  { path: 'albums', component: AlbumsComponent, data: { animation: 'albums' }},
  { path: 'album/:id', component: AlbumComponent, data: { animation: 'album' } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

