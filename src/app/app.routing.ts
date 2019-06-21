import { RouterModule, Routes } from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';

const routes: Routes = [
  {path : '', component : NewsListComponent},
  {path: 'item/:id', component: NewsDetailComponent},
  {path : 'newest', component : NewsListComponent},
  {path : 'ask', component : NewsListComponent},
  {path : 'show', component : NewsListComponent},
  {path : 'jobs', component : NewsListComponent},
  {path : 'newest/:number', component : NewsListComponent},
  {path : 'ask/:number', component : NewsListComponent},
  {path : 'show/:number', component : NewsListComponent},
  {path : 'jobs/:number', component : NewsListComponent},
];

export const routing = RouterModule.forRoot(routes);
