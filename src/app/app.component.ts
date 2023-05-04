import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _http:HttpClient
  ){
    let model = {
      userId:1,
      id:0,
      title:"Deneme",
      complete:false
    }
    this._http.post('https://jsonplaceholder.typicode.com/todos',model).subscribe({
      next: (res: any) =>{
        console.log(res)
      },
      error: (err:HttpErrorResponse) =>{
        console.log(err)
      },
      complete : () =>{

      }
    })
  }
}
