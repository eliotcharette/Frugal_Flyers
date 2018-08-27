import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ItalyComponent } from './italy/italy.component';
import { ColombiaComponent } from './colombia/colombia.component';
import { IcelandComponent } from './iceland/iceland.component';

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
  },
  {
    path: 'iceland',
    component: IcelandComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
