import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StudyRoutingModule } from './study-routing.module';
import { StudyComponent } from './study.component';

@NgModule({
    imports: [
        CommonModule,
        StudyRoutingModule
    ],
    declarations: [StudyComponent]
})
export class StudyModule { }
