import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Fan } from "../models/fan.model";
import { FanService } from "./fan.service";

@Injectable({
    providedIn : 'root'
})

export class FanResolver implements Resolve<Fan> {
    
    constructor(private _fs : FanService){

    }
    
    resolve(route : ActivatedRouteSnapshot) : Fan {
        return this._fs.getById(route.params['id'])
    }
}