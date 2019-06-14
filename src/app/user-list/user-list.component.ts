import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContactsService} from '../../shared/services/contacts.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Output() outItem = new EventEmitter();

  items = [];

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.items = this.contactService.items;
  }

  outToHeader(event) {
    console.log(event);
    this.outItem.emit(event);
  }
}
