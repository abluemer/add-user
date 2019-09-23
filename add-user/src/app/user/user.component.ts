import { Component } from '@angular/core';
import { User } from '../models/user-interface'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

onDeleteUser(index: number) {
  this.users.splice(index, 1); // 1 steht dafür das er nur einen löscht
}

  constructor() { }

  ngOnInit() {
  }

}
