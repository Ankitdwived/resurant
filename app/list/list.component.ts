import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
listfrom!:FormGroup
allListdata:any;

  constructor(private formBuilder:FormBuilder,private _http:HttpClient,private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this.listfrom=this.formBuilder.group({
      name:[''],
      password:[''],
      add:['']
    })
    this.geetAllData();
  }
  geetAllData(){
    this.api.getList().subscribe(res1=>{
      this.allListdata=res1;
    })
  }
  
  listup(){
    this._http.post<any>("http://localhost:3000/list",this.listfrom.value).subscribe(res=>{
      alert("succesfully");
    },
    error=>{
      alert("not")
    })
  }
 
}
