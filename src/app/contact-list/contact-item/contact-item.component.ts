import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() user;
  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  onEdit(user){
    this._userService.editUser(user);
  }
}
