import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

@NgModule({
    imports: [
        CommonModule,
        DemoRoutingModule
    ],
    declarations: [DemoComponent]
})
export class DemoModule { }
