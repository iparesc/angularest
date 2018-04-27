/** 
import { Injectable } from '@angular/core';

@Injectable()
export class CancionesService {

  getCanciones(): any {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CancionesService {

  constructor(private http: HttpClient) {
    console.log('CancionesService constructor');
   }



  getAll(): Observable<any>{
    let url = `http://localhost:8080/cancion/`;
    console.log(`CancionesService getAll ${url}`);    
    return this.http.get(url);
  } 

}