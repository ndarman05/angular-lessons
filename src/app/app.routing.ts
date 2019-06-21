import { RouterModule, Routes } from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {AskPageComponent} from './ask-page/ask-page.component';
import {ShowPageComponent} from './show-page/show-page.component';
import {JobsPageComponent} from './jobs-page/jobs-page.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';

const routes: Routes = [
  {path : '', component : NewsListComponent},
  {path : 'ask', component : AskPageComponent},
  {path : 'show', component : ShowPageComponent},
  {path : 'jobs', component : JobsPageComponent},
  {path: 'news/:id', component: NewsDetailComponent}
];

export const routing = RouterModule.forRoot(routes);
