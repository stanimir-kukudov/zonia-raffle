import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { NgbToastHeader } from '@ng-bootstrap/ng-bootstrap';
import { ToastManager } from './toast.manager';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, NgbToast, NgbToastHeader],
})
export class ToastComponent {
  constructor(public toastManager: ToastManager) {}
}
