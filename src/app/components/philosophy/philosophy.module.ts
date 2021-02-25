import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhilosophyRoutingModule } from './philosophy-routing.module';
import { PhilosophyComponent } from './philosophy.component';

@NgModule({
    imports: [
        CommonModule,
        PhilosophyRoutingModule
    ],
    declarations: [PhilosophyComponent]
})
export class PhilosophyModule { }
