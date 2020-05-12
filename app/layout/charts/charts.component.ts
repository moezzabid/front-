import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    table:any;
public 
    
    

    constructor() {}

    ngOnInit() {
        
    }
}
