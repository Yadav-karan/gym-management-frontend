import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminServiceService } from '../Services/admin-service.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private _adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  pageSizeArray = [5,10,15];

  //pageParams = new PageParams();
  memberData:any;
  total?:number; 
  pageNumber:number = 1;
  pageSize:number = 5;
  sortBy:string = 'memberId';
  orderBy:string = 'asc';
  item:any;

  getMembers(){
    this._adminService.getAllMembers(this.pageNumber-1,this.pageSize,this.sortBy,this.orderBy).subscribe((data:any)=>{
      console.log(data);
      this.memberData = data.data;
      this.total = data.total_records
    },err=>{
      console.log(err)
    })
  }

  onPageChange(cnumber: number) {
    this.pageNumber = cnumber;
    this.getMembers();
  }

  updatePageSize() {
    this.getMembers();
  }
}
