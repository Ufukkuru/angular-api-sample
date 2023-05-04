import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errorHandler(err:HttpErrorResponse){
    if (err.status==404){
      console.log("Unable to reach api address")
    }
    console.log(err)
  }
}
