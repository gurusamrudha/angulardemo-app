import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.components.html',
  styleUrls: ['./user.components.css']
  // template: '<h2>Guru Samrudha</h2>'
})

export class UserComponent implements OnInit {
  //Properties
  user: User;

  //Methods
  constructor(){
    

    }
    ngOnInit(){
      this.user = {
        firstName: 'GuruSamrudha',
        lastName: 'Jutoor',
        email: 'guru@guru.guru'
    }
    
  
    }
  }

 


