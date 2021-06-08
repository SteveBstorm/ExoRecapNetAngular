import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private fanList : Fan[] = []

  constructor(
    private _router : Router
  ) { }

  getList() : Fan[] {
    return this.fanList
  }

  getById(id : number) : Fan {
    return this.fanList[id]
  }

  saveFan(fan : Fan, id : number = -1) : void {
    if(id == -1) this.fanList.push(fan)
    else {
      this.fanList[id] = fan
    }

    this._router.navigate(['home'])
  }

  deleteFan(id : number) : void {
    this.fanList.splice(id, 1)
  }
}

