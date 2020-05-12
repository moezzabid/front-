import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreatetaskRoutingModule } from './createtask-routing.component';
import { CreatetaskComponent} from './createtask.component';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, CreatetaskRoutingModule, PageHeaderModule],
    declarations: [CreatetaskComponent]
})
export class CreatetaskModule  {
   
}