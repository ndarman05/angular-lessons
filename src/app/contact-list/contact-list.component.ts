import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  users: any;
  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.users = this._userService.getUsers();
    console.log(this.users);
  }

}
