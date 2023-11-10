import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8081/users';
  //private apiUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getData1(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/users/pods')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getData2(data: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8081/user/${data}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getData3(data: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8081/user/imsi/${data}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getData4(): Observable<any> {
    return this.http.get<any>(`http://localhost:8081/users/count`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getData5(): Observable<any> {
    return this.http.get<any>(`http://localhost:8081/users/pod_count`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
