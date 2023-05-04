import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { GenericHttpServicesService } from './generic-http-services.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http:GenericHttpServicesService,
    private _err:ErrorService
  ) { }

  get(callback:(res:any) => void){
    this._http.get("todos", res=> callback(res))
  }

  add(model:any, callback:(res:any)=> void){
    this._http.post("/todos",model, (res: any)=> callback(res))
  }
}
