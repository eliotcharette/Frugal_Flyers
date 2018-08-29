import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ItalyComponent } from './italy/italy.component';
import { ColombiaComponent } from './colombia/colombia.component';
import { IcelandComponent } from './iceland/iceland.component';
import { AboutComponent } from './about/about.component';
import { HotelsearchComponent } from './hotelsearch/hotelsearch.component';
import { DealsComponent } from './deals/deals.component';
import { CarribComponent } from './carrib/carrib.component';
import { BogotaComponent } from './bogota/bogota.component';
import { CaliComponent } from './cali/cali.component';
import { CartagenaComponent } from './cartagena/cartagena.component';
import { MedellinComponent } from './medellin/medellin.component';
import { NewzealandComponent } from './newzealand/newzealand.component';
import { CroatiaComponent } from './croatia/croatia.component';

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
  },
  {
    path: 'deals',
    component:DealsComponent
  },

  {
    path: 'about',
    component:AboutComponent
  },
  {
    path: 'hotels',
    component:HotelsearchComponent
  },
  {
    path: 'bogota',
    component:BogotaComponent
  },
  {
    path: 'medellin',
    component:MedellinComponent
  },
  {
    path: 'cartagena',
    component:CartagenaComponent
  },
  {
    path: 'cali',
    component:CaliComponent
  },
  {
    path: 'carrib',
    component:CarribComponent
  },
  {
    path: 'newzealand',
    component: NewzealandComponent
  },
  {
    path: 'croatia',
    component: CroatiaComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
