import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'projects', component: ProjectsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProjectsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
