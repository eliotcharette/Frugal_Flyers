import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ItalyComponent } from './italy/italy.component';
import { ColombiaComponent } from './colombia/colombia.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'italy',
    component: ItalyComponent
  },
  {
    path: 'colombia',
    component: ColombiaComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
