import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import {MatDividerModule} from '@angular/material/divider';
import { SelectUsersModule } from '../../components/select-users/select-users.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule, RouterModule, SelectUsersModule, MatButtonModule, MatDividerModule
  ],
  exports: []
})
export class PostsModule { }
