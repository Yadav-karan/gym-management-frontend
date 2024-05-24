import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Member} from "../models/member";
import { MemberServiceService } from '../Services/member-service.service';
@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {

  constructor(private _memberService:MemberServiceService) { }

  @Output() updateMemberDetailsEvent = new EventEmitter<any>()
  
  modeOfPayment:string[] =["Cash","UPI"]
  member:Member = new Member();
  ngOnInit(): void {
  }

  registerMember(item:any){
    this._memberService.registerMember(this.member).subscribe((data:any)=>{
      alert(data.message);
      let ref = document.getElementById('closeModel');
      ref?.click();
      item.resetForm();
    },err=>{
      console.log(err);
    })
  }
}
