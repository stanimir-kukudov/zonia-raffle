import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { StoreService } from '@services/store.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  standalone: true,
  imports: [RouterLink, NgbCollapse, RouterLinkActive, NgbDropdownToggle, NgbDropdownMenu, NgIf],
})
export class LayoutHeaderComponent implements OnInit {
  public appName: string = environment.appName;
  public isMenuCollapsed: boolean = true;

  constructor(
    private router: Router,
    public storeService: StoreService,
  ) {}

  public ngOnInit(): void {}
}
