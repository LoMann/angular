import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `
            <app-home></app-home>
            <app-footer></app-footer>
    `
})
export class DashboardComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
