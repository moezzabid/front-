import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { tacheRoutingModule } from './tache-routing.component';
import { TacheComponent } from './tache.component';
import { PageHeaderModule } from '../shared';

@NgModule({
    imports: [CommonModule, tacheRoutingModule, PageHeaderModule],
    declarations: [TacheComponent]
})
export class CreateTacheModule {}

