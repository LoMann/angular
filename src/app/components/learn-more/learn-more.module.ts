import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LearnMoreRoutingModule } from './learn-more-routing.module';
import { LearnMoreComponent } from './learn-more.component';

@NgModule({
    imports: [
        CommonModule,
        LearnMoreRoutingModule
    ],
    declarations: [LearnMoreComponent]
})
export class LearnMoreModule { }
