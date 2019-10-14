import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(public toastService: ToastService) { }

  showStandard(msg) {
    this.toastService.show(msg, {
      delay: 2000,
      autohide: true
    });
  }

  showSuccess(msg) {
    this.toastService.show(msg, {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true,
      headertext: 'Toast Header'
    });
  }
  showError(msg) {
    this.toastService.show(msg, {
      classname: 'bg-danger text-light',
      delay: 2000 ,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  showCustomToast(customTpl) {
    this.toastService.show(customTpl, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }
}
