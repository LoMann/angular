import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        FooterComponent,
        HomeComponent
    ]
})
export class DashboardModule { }
