import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionsOrdersComponent } from './sections/sections-orders/sections-orders.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    SectionSalesComponent,
    SectionsOrdersComponent,
    SectionHealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
