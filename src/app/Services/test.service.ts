import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  public getData(): Observable < any [] >{
    return this.http.get< any >("https://fakestoreapi.com/products");
  }

  public getIData(id:any): Observable < any [] >{
    return this.http.get< any >("https://fakestoreapi.com/products/" + id);
  }

  public addData(val:any){
    return this.http.post("http://localhost:4200/addpro", val);
  }

  public updateData(val:any, id:any){
    return this.http.put("https://fakestoreapi.com/products/" + id, val);
  }

  public deleteDate(id:any){
    return this.http.delete("https://fakestoreapi.com/products/" + id);
  }

}
