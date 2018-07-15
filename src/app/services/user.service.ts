import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'GuruSamrudha',
        lastName: 'Jutoor',
        email: 'guru@guru.com',
        isActive: true,
        joined: new Date('05/06/1993 08:30:00'),
        hide: true
      },
      {
        firstName: 'Anagha',
        lastName: 'Gunda',
        email: 'anagha@gunda.com',
        isActive: false,
        joined: new Date('01/12/1953 09:30:00'),
        hide: true
      },
      {
        firstName: 'Vijaya',
        lastName: 'Jutoor',
        email: 'vijaya@jutoor.com',
        isActive: true,
        joined: new Date('01/06/1993 08:30:00'),
        hide: true
      }

    ];
  }

  getData(){
    this.data = new Observable(observer => {
      setTimeout(()=>{
        observer.next(1);
      },1000);

      setTimeout(()=>{
        observer.next(2);
      },2000);

      setTimeout(()=>{
        observer.next(3);
      },3000);
    });
    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log('fdfdfff');
    return of(this.users);
  }

  addUser(user: User){
    this.users.unshift(user);
  }
}
