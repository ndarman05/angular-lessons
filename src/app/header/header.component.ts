import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: string;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUser.subscribe(user => this.user = user)
  }

}
