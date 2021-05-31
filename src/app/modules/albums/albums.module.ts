import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SelectUsersModule } from '../../components/select-users/select-users.module';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule, RouterModule, SelectUsersModule, MatSelectModule, MatCardModule, MatButtonModule
  ],
  exports: []
})
export class AlbumsModule { }
