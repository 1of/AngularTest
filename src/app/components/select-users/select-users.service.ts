import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelectUsersService {
  api = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.api + '/users/')
  }

  private selectedUserId = new Subject<any>();
  private selectedUserName = new Subject<any>();

  sendUserId(id: number) {
    this.selectedUserId.next(id);
  }
  sendUserName(name: string) {
    this.selectedUserName.next(name);
  }
  onUserId(): Observable<any> {
    return this.selectedUserId.asObservable();
  }
  onUserName(): Observable<any> {
    return this.selectedUserName.asObservable();
  }
}
