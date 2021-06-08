import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {

  @Input() id : number = 0

  constructor(
    private _dialogref : NbDialogRef<ConfirmBoxComponent>
  ) { }

  ngOnInit(): void {
  }

  close(value : boolean) : void {
    this._dialogref.close(value)
  }

}
