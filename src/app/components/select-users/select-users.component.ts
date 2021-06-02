import { Component, OnInit } from '@angular/core';
import { SelectUsersService } from "./select-users.service";

@Component({
  selector: 'app-select-users',
  templateUrl: './select-users.component.html',
})

export class SelectUsersComponent implements OnInit{
  users: any[];
  constructor(private usersService: SelectUsersService) {
    this.users = [];
  }

  change(event: any, id: number)  {
    if(event.isUserInput) {
      console.log("Selected event", event.source.value);
      this.usersService.sendUserId(id);
      this.usersService.sendUserName(event.source.value);
    }
  }
  selectUser(event: Event) {
    console.log(event)
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: any)=> {
      this.users = data;
    });
  }

}
