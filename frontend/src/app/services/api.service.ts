import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/catch';
import { catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
   private baseURL = 'http://localhost:3200/reg_prof';
   httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'Authorization': 'my-auth-token'
  })
};
    constructor(private http: HttpClient) {}



getLoginUser(user: string,password: string){
return this.http.get('http://localhost:3200/user_list/?userId='+user+'&userPass='+password).pipe(
map(respuestaData => {
  console.log('respuestaDataaaa::', respuestaData);
  return respuestaData;
}),
      // "catchError" instead "catch"
      catchError(error => {
              return throwError(error.message);
            })
);
}

getProfesor(){
return this.http.get('http://localhost:3200/prof_grup_list').pipe(
map(respuestaData => {
  console.log('respuestaDataaaa::', respuestaData);
  return respuestaData;
}),
      // "catchError" instead "catch"
      catchError(error => {
              return throwError(error.message);
            })
);
}

postReg_Prof(profesor) {
   let url = this.baseURL;
   console.log('body::::::: ', profesor);
   return this.http.post(url, profesor, this.httpOptions)
     .pipe(map(res => {
       console.log('respuestapostttDataaa::', res);
       return res;
     })
     );
 }

private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
}


}
