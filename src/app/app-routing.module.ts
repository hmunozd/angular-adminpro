import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth-routing.routing';

import { NofoundComponent } from './nofound/nofound.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NofoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
