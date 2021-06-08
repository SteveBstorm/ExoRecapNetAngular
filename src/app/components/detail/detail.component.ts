import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  currentFan : Fan = { series : [], dateNaissance : new Date()}

  constructor(
    private _fs : FanService,
    private _activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params['id']
    this.currentFan = this._fs.getById(id)
  }

}
