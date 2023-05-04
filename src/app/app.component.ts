import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  template: `
  
  `
})
export class AppComponent {
  constructor(
  private _app : AppService
  ){
    _app.get((res) => {
      console.log(res)
    })
  }

  save(){
    this._app.add({userId:1,title:"deneme",completed:false,id:0},(res)=>{
      console.log(res)
    })
  }
}
