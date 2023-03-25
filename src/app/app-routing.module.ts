import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  { path: '', component: AppLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('@modules/home/home.component').then(c => c.HomeComponent) },
      { path: 'business-request', loadChildren: ()=> import('@modules/br/br.module').then(m => m.BrModule) },
      { path: 'company', loadComponent: () => import('@modules/company/company.component').then(c => c.CompanyComponent) },
      { path: 'department', loadComponent: () => import('@modules/department/department.component').then(d => d.DepartmentComponent) },
      { path: 'approver', loadComponent: () => import('@modules/approver/approver.component').then(c => c.ApproverComponent) },
      { path: 'profile', loadComponent: () => import('@modules/profile/profile.component').then(c => c.ProfileComponent) },
      { path: 'ptm-owner', loadComponent: () => import('@modules/ptm-owner/ptm-owner.component').then(c => c.PTMOwnerComponent) },
      { path: 'type', loadComponent: () => import('@modules/type/type.component').then(c => c.TypeComponent) },
      { path: 'level', loadComponent: () => import('@modules/level/level.component').then(c => c.LevelComponent) },
      { path: 'category', loadComponent: () => import('@modules/category/category.component').then(c => c.CategoryComponent) },
      { path: 'place-of-delivery', loadComponent: () => import('@modules/place-of-delivery/PlaceOfDelivery.component').then(c => c.PlaceOfDeliveryComponent) },
      { path: 'subcontractor', loadComponent: () => import('@modules/subcontractor/subcontractor.component').then(c => c.SubcontractorComponent) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
