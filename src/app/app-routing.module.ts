import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionsOrdersComponent } from './sections/sections-orders/sections-orders.component';

const routes: Routes = [
  {path:'sales' , component: SectionSalesComponent},
  {path:'orders' , component: SectionsOrdersComponent},
  {path:'health' , component: SectionHealthComponent},

  {path:'',redirectTo:'/sales', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
