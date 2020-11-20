import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'manage', component: ManagementPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
