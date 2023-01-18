import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ResturantData } from './resturant.model';

@Component({
  selector: 'app-rsturant-dash',
  templateUrl: './rsturant-dash.component.html',
  styleUrls: ['./rsturant-dash.component.css']
})
export class RsturantDashComponent implements OnInit {


  formValue!:FormGroup
  resturantModelObj :ResturantData= new ResturantData;
  allResturantdata:any;
  showAdd!:boolean
  shobtn!:boolean
  constructor( private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
    name:[''],
    email:[''],
    mobile:[''],
    address:[''],
    services:['']
    })
this.getAllData();
  }

  ClickAddResto(){
  // console.log("hello")
    this.formValue.reset();
    //this.showAdd=true;
    console.log("true")

   // this.shobtn=false;
    console.log("false")

  }

  //Now subscribe our data which is mapped via services
  //add a data 
  addResto(){
    this.resturantModelObj.name=this.formValue.value.name;
    this.resturantModelObj.email=this.formValue.value.email;
    this.resturantModelObj.mobile=this.formValue.value.mobile;
    this.resturantModelObj.address=this.formValue.value.address;
    this.resturantModelObj.services=this.formValue.value.services;
    
    this.api.postResturant(this.resturantModelObj).subscribe(res=>{
      console.log(res);
      alert("resturand record add successfull");
      let ref=document.getElementById('clear');
      ref?.click();
      this.formValue.reset()
      this.getAllData()//this is use to directly insert a data and without refrence show a data 
    },
    error=>{
      alert("data not inserted");
    })
  
}

getAllData(){
  this.api.getResturant().subscribe(res=>{
    this.allResturantdata=res;
  })
}


//delete data
deleteResto(data:number){
  this.api.deleteResturant(data).subscribe((res)=>{
    alert("resturant record deleted successfully");
    
    //this.formValue.reset()
    this.getAllData()
},
error=>{
  alert("data not deleted");
  })
}

//its use a  edit a data 
onEditResto(data:any){
  this.shobtn=true;
    this.showAdd=false;

  this.resturantModelObj.id=data.id
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['address'].setValue(data.address);
  this.formValue.controls['services'].setValue(data.services);
 

}
//update a data 

updateResto(){

  this.resturantModelObj.name=this.formValue.value.name;
    this.resturantModelObj.email=this.formValue.value.email;
    this.resturantModelObj.mobile=this.formValue.value.mobile;
    this.resturantModelObj.address=this.formValue.value.address;
    this.resturantModelObj.services=this.formValue.value.services;
 this.api.updateResturant(this.resturantModelObj,this.resturantModelObj.id) .subscribe(res=>{
  alert("data update successfully");
  /*updateResturant(data:any, id:number){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data)
  } */
  let ref=document.getElementById('clear');
  ref?.click();
  this.formValue.reset()
  this.getAllData()
},
error=>{
  alert("data not updated");
 })  
}

}
