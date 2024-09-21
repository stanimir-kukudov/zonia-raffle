import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StoreService } from '@services/store.service';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { AppService } from '@services/app.service';
import { CountdownEvent, CountdownModule } from 'ngx-countdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [PageLayoutComponent, NgIf, ProgressBarComponent, CountdownModule],
})
export class HomeComponent implements OnInit {
  timeLeft: number = 0;

  constructor(
    public storeService: StoreService,
    private appService: AppService,
  ) {}

  public ngOnInit(): void {
    !this.storeService.isTimerDone() && this.fetchTimeLeft();
  }

  handleCountdownEvent(event: CountdownEvent) {
    event.action === 'done' && this.storeService.setTimerDone();
  }

  fetchTimeLeft() {
    this.appService
      .timeLeft()
      .then(({ data }) => (this.timeLeft = data.responseObject.timeLeft))
      .catch((error) => console.log(error));
  }
}
