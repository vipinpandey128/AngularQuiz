import { Component } from '@angular/core';
import { ToastMessageService } from './_service/toast-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ans';

  constructor(public toasterServices:ToastMessageService){
     
  }

  showError()
  {
    this.toasterServices.showError('Something is wrong??');
  }

  showSuccess()
  {

  }

  showStandard()
  {

  }
}
