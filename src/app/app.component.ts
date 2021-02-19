import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public title = 'milco';
  public showFiller = false;
  public fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

  constructor(
  ) {
  }

  ngOnDestroy(): void {
  }
}
