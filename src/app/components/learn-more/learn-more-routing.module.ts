import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearnMoreComponent } from './learn-more.component';

const routes: Routes = [
    {
        path: '',
        component: LearnMoreComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LearnMoreRoutingModule { }
