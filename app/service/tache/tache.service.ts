import { Injectable} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  options;
  domain="http://localhost:8080";
  constructor(private http:HttpClient) { }
  
  ajoutertache(tache): Observable <any> {
   
    return this.http.post(this.domain+'/administrateur/addProjet',tache).pipe(map((res: any) => {
     
      console.log('res', res.json());}
      
    )) }
  supprimerTache(id){
    return new Promise(resolve=>{
      this.http.delete(this.domain+'/administrateur/deletetache?id='+id,{headers:new HttpHeaders({
        'Content-Type':'application/json'
      })}).subscribe(data=>{resolve(data);}, err=>{console.log(err);
      })
    })
  }
  updatetache(id,tache){
    return new Promise(resolve=>{
      this.http.put(this.domain+'?id='+id,tache,{headers:new HttpHeaders({
        'Content-Type':'application/json'
      })}).subscribe(data=>{resolve(data);}, err=>{console.log(err);
      })
    })
    
  }
}
