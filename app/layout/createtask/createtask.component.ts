import { Component, OnInit } from '@angular/core';
import { TacheService } from 'src/app/service/tache/tache.service';
import { tachedetails } from 'src/app/data/tachedetails';
import { routerTransition } from '../../router.animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css'],
  animations: [routerTransition()]
})
export class CreatetaskComponent implements OnInit {

  

  tache :tachedetails =new tachedetails();
  taches :any ;
  id;
  

  constructor(private tacheService:TacheService) { }

  ngOnInit(): void {
  }
  ajoutertache(){
    this.tacheService.ajoutertache(this.tache).subscribe(data=>{
    console.log(data);
    
  });
    }

}


