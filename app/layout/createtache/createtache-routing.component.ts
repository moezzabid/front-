import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatetacheComponent } from './createtache.component';

const routes: Routes = [
    {
        path: '',
        component: CreatetacheComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreatetacheRoutingModule {}
