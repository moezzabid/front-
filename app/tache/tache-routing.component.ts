import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TacheComponent } from './tache.component';

const routes: Routes = [
    {
        path: '',
        component: TacheComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class tacheRoutingModule {}
