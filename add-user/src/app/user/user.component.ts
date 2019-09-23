import { Component } from '@angular/core';
import { User } from '../models/user-interface'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users = [
    new User("Hans", "Wurst"),
    new User("Hans1", "Wurst2"),
  ];

  onAddUser() {
    this.users.push(
      new User('Neuer', 'User')
    );
  }
  constructor() { }

  ngOnInit() {
  }

}
