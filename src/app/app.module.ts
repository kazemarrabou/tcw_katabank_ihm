import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DepotComponent } from './depot/depot.component';
import { RetraitComponent } from './retrait/retrait.component';
import { MesOperationComponent } from './mes-operation/mes-operation.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SoldeComponent } from './solde/solde.component';
import { OperationService } from './services/operation.service';


@NgModule({
  declarations: [
    AppComponent,
    DepotComponent,
    RetraitComponent,
    MesOperationComponent,
    SoldeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
