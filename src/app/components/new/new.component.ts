import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FanService } from 'src/app/services/fan.service';
import { DateValid } from 'src/app/tools/DateValidator';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  fg : FormGroup = this._builder.group([])

  constructor(
    private _builder : FormBuilder,
    private _fs : FanService
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() : void{
    this.fg  = this._builder.group({
      nom : [null, Validators.required],
      dateNaiss : [null, [Validators.required, DateValid()]],
      series : this._builder.array([])
    })
  }

  getSeries() : FormArray {
    return this.fg.get('series') as FormArray
  }

  addSerie() : void {
    this.getSeries().push(new FormControl(null, Validators.required))
  }

  removeSerie(id : number) : void {
    this.getSeries().removeAt(id)
  }

  submitForm() : void {
    let fan = {
      nom : this.fg.value['nom'],
      dateNaissance : this.fg.value['dateNaiss'],
      series : this.fg.value['series'] ? this.fg.value['series'] : [] 
    }

    this._fs.saveFan(fan)
  }

}
