import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreatetacheRoutingModule } from './createtache-routing.component';
import { CreatetacheComponent } from './createtache.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, CreatetacheRoutingModule, PageHeaderModule],
    declarations: [CreatetacheComponent]
})
export class CreateTacheModule {
    
}
