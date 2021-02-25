import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  { path: 'portal', loadChildren: () => import('./components/portal/portal.module').then(m => m.PortalModule) },
  { path: '**', loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
