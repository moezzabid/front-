import { Injectable} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  options;
  domain="http://localhost:8080";
  constructor(private http:HttpClient) { }
  
  ajouterprojet(projet) {
   
    return this.http.post(this.domain+'/administrateur/addProjet',projet).pipe(map((data: any) => {
     
      console.log(data);}
      
    )) }
  
    
  supprimerProjet(id){
    return new Promise(resolve=>{
      this.http.delete(this.domain+'/administrateur/deleteProjet?id='+id,{headers:new HttpHeaders({
        'Content-Type':'application/json'
      })}).subscribe(data=>{resolve(data);}, err=>{console.log(err);
      })
    })
  }
  updateProjet(id,projet){
    return new Promise(resolve=>{
      this.http.put(this.domain+'?id='+id,projet,{headers:new HttpHeaders({
        'Content-Type':'application/json'
      })}).subscribe(data=>{resolve(data);}, err=>{console.log(err);
      })
    })
    
  }
}