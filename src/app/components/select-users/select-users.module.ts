import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectUsersComponent } from './select-users.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [SelectUsersComponent],
  imports: [
    CommonModule, MatSelectModule
  ],
  exports: [CommonModule, SelectUsersComponent]
})
export class SelectUsersModule { }
