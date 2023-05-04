import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpServicesService {
  post(arg0: string, model: any, arg2: {}) {
    throw new Error('Method not implemented.');
  }

  apiUrl:string="https://jsonplaceholder.typicode.com"
  constructor(
    private _http:HttpClient,
    private _err:ErrorService
  ) { }

  get(api:string, callback:(res:any)=>void){
    this._http.get(this.apiUrl + api,{}).subscribe({
      next:(res)=>{
        callback(res)
      },
      error:(err:HttpErrorResponse)=>{
        this._err.errorHandler(err)
      }
    })
  }

  posts(api:string, model:any, callback:(res:any)=>void){
    this._http.post(this.apiUrl + api,model,{}).subscribe({
      next:(res)=>{
        callback(res)
      },
      error:(err:HttpErrorResponse)=>{
        this._err.errorHandler(err)
      }
    })
  }
}
