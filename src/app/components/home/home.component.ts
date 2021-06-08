import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';
import { ConfirmBoxComponent } from 'src/app/tools/confirm-box/confirm-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fanListe : Fan[] =[]

  constructor(
    private _fs : FanService,
    private _router : Router,
    private _dialog : NbDialogService
  ) { }

  ngOnInit(): void {
    this.fanListe = this._fs.getList()
  }

  toUpdate(id : number) : void {
    this._router.navigate(['update/'+id])
  }

  toDelete(id : number) : void {
    let box = this._dialog.open(ConfirmBoxComponent, {
      closeOnBackdropClick : false,
      context : { id : id}
    })

    box.onClose.subscribe((value : boolean) => {
      if(value) {
        this._fs.deleteFan(id)
        this.fanListe = this._fs.getList()
      }
    })
  }

}
