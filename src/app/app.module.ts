import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-list/contact-item/contact-item.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
