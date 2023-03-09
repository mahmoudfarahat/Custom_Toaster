import { TosatorService } from './../tosator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private tosatorService:TosatorService) { }
message = {}
  ngOnInit(): void {

  }


  showToastor(status: string){

    if(status ==='primary' ){
    this.message  = { message :"Data all fetched"  ,icon :'✓'}

    }else if(status === 'danger'){
      this.message  = { message :"there is An error"  ,icon :'x'}

    }

  this.tosatorService.tosatorMessage.next(this.message )
  this.tosatorService.toastorStatus= true
  }

}
