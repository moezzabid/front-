import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { projetdetail } from 'src/app/data/projetdetail';
import { NgForm } from '@angular/forms';
import { ProjetService } from 'src/app/service/projet/projet.service';
@Component({
  selector: 'app-createtache',
  templateUrl: './createtache.component.html',
  styleUrls: ['./createtache.component.css'],
  animations: [routerTransition()]
})
export class CreatetacheComponent implements OnInit {

 projet :any ={};
  projets :any[] ;
  nomProjet:String;
  nbreTache:any={};
  id;
  
 

  constructor(private projetService:ProjetService) { }

  ngOnInit(): void {
 
  }
  ajouterprojet(nomProjet,nbreTache){
    console.log(this.projet);
   this.projet={"nomProjet":nomProjet,"nbreTache":'',"dateDebut":new Date(),"dateFin":new Date(),"description":"","hsupp":0,"situation":""}
    this.projetService.ajouterprojet(this.projet).subscribe(projet=>{console.log(this.projet)});
      
  ;}

}

