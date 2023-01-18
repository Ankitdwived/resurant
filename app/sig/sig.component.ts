import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-sig',
  templateUrl: './sig.component.html',
  styleUrls: ['./sig.component.css']
})
export class SigComponent implements OnInit {

  sig!:FormGroup;

  constructor(private fb :FormBuilder,private _http:HttpClient,private api:ApiService) { }
  
  alllListdata:any;

  ngOnInit(): void {
    this.sig=this.fb.group({
      name:[''],
      address:[''],
      mob:['']
    })
this.geettAllData();
  }
  geettAllData(){
    this.api.getsig().subscribe(res2=>{
      this.alllListdata=res2;
    })
  }

  signUp(){
    this._http.post<any>("http://localhost:3000/sig",this.sig.value ).subscribe(res=>{
      alert("signup successfully");
      this.alllListdata()
      //this.getAllData()//this is use to directly insert a data and without refrence show a data 
      this.sig.reset();
      
    },
    error=>{
      alert("not successfully");
    })
  }
  deleteSigg(data:number){
    this.api.deletesig(data).subscribe((res2)=>{
      alert("resturant record deleted successfully");
      let ref=document.getElementById('clear');
      ref?.click();
      this.sig.reset()
      this.alllListdata()
  },
  error=>{
    alert("data not deleted");
    })
  
  }
 
}


