import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 readonly APIUrl = "https://localhost:44335/api/Activity";


  constructor(private http:HttpClient) { }

  deleteActivity(val:any){
    return this.http.delete(this.APIUrl+'/activity/'+val)
  }

  getActivityList():Observable<any[]>{
    return  this.http.get<any>(this.APIUrl);
  }
}