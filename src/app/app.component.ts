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
  constructor(public tosatorService:TosatorService) {

  }
  ngOnInit(): void {
    this.tosatorService.tosatorMessage.subscribe(message=>{
      console.log(message)
    this.message = message.message
    this.icon =message.icon

    if( this.tosatorService.toastorStatus= true){
      setTimeout(() => {
        this.tosatorService.toastorStatus= false
      }, 5000);
    }

    })



  }

  closeToastor(){
    this.tosatorService.toastorStatus= false
  }



}
