import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageParams } from '../models/PageParams';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private _http:HttpClient) { }
  
  BASE_URL:string = "http://localhost:9191/admin/";


  getAllMembers(pageNo: number,
    pageSize: number,
    sortBy: string,
    orderBy: string){
    return this._http.get(this.BASE_URL+"pagination/get-all-members"+
    "?pageNumber="+pageNo+
    "&pageSize="+pageSize+
    "&sortBy="+sortBy+
    "&orderBy="+orderBy);
  }
}
