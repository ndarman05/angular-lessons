import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public items: string[] = ['Armanov Arman', 'Ivanov Ivan', 'Antonov Anton'];

  constructor() { }

  add(contact: string) {
    this.items.push(contact);
  }
}
