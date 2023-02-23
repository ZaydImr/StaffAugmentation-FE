import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  { path: '', component: AppLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('@modules/home/home.component').then(c => c.HomeComponent) },
      { path: 'business-request', loadChildren: ()=> import('@modules/br/br.module').then(m => m.BrModule) },
      { path: 'company', loadComponent: () => import('@modules/company/company.component').then(c => c.CompanyComponent) },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
