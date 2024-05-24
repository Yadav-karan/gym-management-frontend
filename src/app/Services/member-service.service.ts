import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  constructor(private _http:HttpClient) { }

  BASE_URL:string = "http://localhost:9191/member/";

  registerMember(member:Member){
    return this._http.post(this.BASE_URL+"register-member",member);
  }

  getMember(member_id:string){
    return this._http.get(this.BASE_URL+"get-member?"+member_id);
  }

  updateMember(member:Member){
    return this._http.put(this.BASE_URL+"update-member",member);
  }

}
