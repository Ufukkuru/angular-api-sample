import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input [(ngModel)]="model.title">
  <button (click)="save()">kaydet</button>
  `
})
export class AppComponent {

  model : {
    id:number,
    title:string,
    completed:boolean,
    userId:number
  } = {
    id:0,
    title:"",
    completed: false,
    userId:1
  }

  constructor(
    private _http:HttpClient
  ){
    let headers={
      headers:{
        "authorization": "deger"
      }
    }
    this._http.get("https://jsonplaceholder.typicode.com/todos",headers).subscribe(res=>{
      console.log(res)
    })
  }

  save(){}
}
