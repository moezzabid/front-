import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-createtache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css'],
  animations: [routerTransition()]
})
export class TacheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
