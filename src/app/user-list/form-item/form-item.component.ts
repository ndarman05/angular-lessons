import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../../shared/services/contacts.service';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

  fullname = '';

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
  }

  submit() {
    // console.log(this.fullname);
    this.contactService.add(this.fullname);
    // alert('Contact added successful!');
    this.fullname = '';
  }
}
