import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionsOrdersComponent } from './sections/sections-orders/sections-orders.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { ChartsModule } from 'ng2-charts';
import { BarchartComponent } from './Charts/barchart/barchart.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    SectionSalesComponent,
    SectionsOrdersComponent,
    SectionHealthComponent,
    BarchartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
