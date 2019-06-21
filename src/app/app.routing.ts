import { RouterModule, Routes } from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';

const routes: Routes = [
  {path : '', component : NewsListComponent},
  {path : 'ask', component : NewsListComponent},
  {path : 'show', component : NewsListComponent},
  {path : 'jobs', component : NewsListComponent},
  {path: 'item/:id', component: NewsDetailComponent}
];

export const routing = RouterModule.forRoot(routes);
