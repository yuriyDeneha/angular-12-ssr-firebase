import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
