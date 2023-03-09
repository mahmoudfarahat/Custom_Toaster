import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TosatorService {


  tosatorMessage = new BehaviorSubject<any>('')

  constructor() { }

  toastorStatus = false




}
