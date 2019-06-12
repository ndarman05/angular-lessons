import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() item;
  @Output() outItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  sendToHeader() {
    this.outItem.emit(this.item);
  }

}
