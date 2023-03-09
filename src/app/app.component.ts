import { Component } from '@angular/core';
import { TosatorService } from './tosator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customToaster';
  message =''
  icon =''
    time:any
  constructor(public tosatorService:TosatorService) {

  }
  ngOnInit(): void {

    this.tosatorService.tosatorMessage.subscribe(message=>{

      window.clearTimeout(this.time)
      console.log(message)
      this.message = message.message
      this.icon =message.icon

   this.time = setTimeout((a:any) => {
        this.tosatorService.toastorStatus= false
      }, 5000);

    })

  }

  closeToastor(){
    this.tosatorService.toastorStatus= false
  }



}
