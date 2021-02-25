import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  { path: 'portal', loadChildren: () => import('./components/portal/portal.module').then(m => m.PortalModule) },
  { path: 'study', loadChildren: () => import('./components/study/study.module').then(m => m.StudyModule) },
  { path: 'philosophy', loadChildren: () => import('./components/philosophy/philosophy.module').then(m => m.PhilosophyModule) },
  { path: 'product', loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) },
  { path: '**', loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
