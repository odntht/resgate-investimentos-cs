import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ListaInvestimentosComponent } from './componentes/lista-investimentos/lista-investimentos.component';
import { DetalheResgateComponent } from './componentes/detalhe-resgate/detalhe-resgate.component';
import { InvestimentosService } from './services/investimentos.service';


@NgModule({
  declarations: [
    AppComponent,
    ListaInvestimentosComponent,
    DetalheResgateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [InvestimentosService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
