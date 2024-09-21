import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StoreService } from '@services/store.service';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { Router } from '@angular/router';
import { AppService } from '@services/app.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  standalone: true,
  imports: [PageLayoutComponent, NgIf, ProgressBarComponent],
})
export class PeopleComponent implements OnInit {
  winner?: { firstName: string; lastName: string };
  isDisabled: boolean = true;

  constructor(
    public storeService: StoreService,
    private router: Router,
    private appService: AppService,
  ) {}

  public ngOnInit(): void {
    if (!this.storeService.isTimerDone()) {
      this.router.navigate(['/']);
    }
  }

  getWinner() {
    this.appService
      .createWinner()
      .then(({ data }) => (this.winner = data.responseObject))
      .catch((error) => console.log(error));
  }
}
