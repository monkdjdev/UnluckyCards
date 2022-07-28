import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { AppComponent } from './app.component';
import { PrizesComponent } from './views/prizes/prizes.component';
import { MintComponent } from './views/mint/mint.component';
import { DefaultComponent } from './views/default/default.component';


const appRoutes = [
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'prizes', component: PrizesComponent, pathMatch: 'full' },
  { path: 'mint', component: MintComponent, pathMatch: 'full' },
  { path: 'default', component: DefaultComponent, pathMatch: 'full' },
  { path: '**', component: DefaultComponent, pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
