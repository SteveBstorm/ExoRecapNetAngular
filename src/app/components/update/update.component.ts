import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';
import { DateValid } from 'src/app/tools/DateValidator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  fg : FormGroup = this._builder.group([])
  currentFan : Fan = { series : [], dateNaissance : new Date()}
  currentId : number = 0

  constructor(
    private _builder : FormBuilder,
    private _fs : FanService,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentId = this._activatedRoute.snapshot.params['id']
    this.currentFan = this._activatedRoute.snapshot.data['fan']
    this.initForm()
  }

  initForm() : void{
    this.fg  = this._builder.group({
      nom : [this.currentFan.nom, Validators.required],
      dateNaiss : [this.currentFan.dateNaissance, [Validators.required, DateValid()]],
      series : this._builder.array([])
    })
    if(this.currentFan.series != []) {
      let l = this.currentFan.series ? this.currentFan.series.length : 0
      for(let i = 0; i < l; i++) {
        this.getSeries().push(new FormControl(this.currentFan.series ? this.currentFan.series[i]:'', Validators.required))
      }
    }
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

    this._fs.saveFan(fan, this.currentId)
  }

}
