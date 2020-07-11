import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {headers : new HttpHeaders({'Content-Type':'application/json'})}
const baseUrl ="/server/api/play/sharememory";

@Injectable({
  providedIn: 'root'
})
export class MemorySharingGameService {

  constructor(private http:HttpClient) { }

  postMemory(memoryShareObject){
    let body = JSON.stringify(memoryShareObject);
    return this.http.post(baseUrl,body,httpOptions);
  }

  getMemoryShared(id : number){
    return this.http.get(baseUrl+"/"+id);
  }

  updateMemorySharedPerson(id:number,memoryShareObject){
    let body = JSON.stringify(memoryShareObject);
    return this.http.put(baseUrl+"/"+id,body,httpOptions)
  }

}
