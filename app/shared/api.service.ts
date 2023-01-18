import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  //new here i will define the post,get,put,delete 0
  //create resturant using post mathod
  postResturant(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get Resturant data using get method
  getResturant(){
    return this._http.get<any>("http://localhost:3000/posts/").pipe(map((res:any)=>{
      return res;
    }))
  }

  getList(){
    return this._http.get<any>("http://localhost:3000/list/").pipe(map((res1:any)=>{
      return res1;
    }))
  }

  getsig(){
    return this._http.get<any>("http://localhost:3000/sig/").pipe(map((res2:any)=>{
      return res2;
    }))
  }

  getResturaant(){
    return this._http.get<any>("http://localhost:3000/posts/").pipe(map((res:any)=>{
      return res;
    }))
  }
  
  //update resturant using put method

  updateResturant(data:any, id:number){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data)
  }


  //Delete Resturant data using delete method

  deleteResturant(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id);
  }
  //that's it
  deletesig(id:number){
    return this._http.delete<any>("http://localhost:3000/sig/"+id);
  }

  
}
