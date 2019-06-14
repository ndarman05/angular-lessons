import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import {ContactsService} from '../shared/services/contacts.service';
import { FormItemComponent } from './user-list/form-item/form-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserItemComponent,
    FormItemComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [
      ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
