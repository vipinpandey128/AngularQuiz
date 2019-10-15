// toast.service.ts
import { Injectable, TemplateRef  } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class ToastService {
 
  toasts: any[] = [];
 
  // Push new Toasts to array with content and options
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }
 
  // Callback method to remove Toast DOM element from view
  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }


  showStandard(msg) {
    this.show(msg, {
      delay: 2000,
      autohide: true
    });
  }

  showSuccess(msg) {
    this.show(msg, {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true,
      headertext: 'Toast Header'
    });
  }
  showError(msg) {
    this.show(msg, {
      classname: 'bg-danger text-light',
      delay: 2000 ,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  showCustomToast(customTpl) {
    this.show(customTpl, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }


  
}