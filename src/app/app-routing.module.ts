import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DepotComponent } from "./depot/depot.component";
import { RetraitComponent } from "./retrait/retrait.component";
import { MesOperationComponent } from "./mes-operation/mes-operation.component";
import { SoldeComponent } from "./solde/solde.component";

const routes: Routes = [
    { path: '', redirectTo: '/solde', pathMatch: 'full' },
    {path : 'solde', component: SoldeComponent},
    {path : 'deposit', component: DepotComponent},
    {path : 'retrieve', component: RetraitComponent},
    {path : 'operations', component: MesOperationComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}