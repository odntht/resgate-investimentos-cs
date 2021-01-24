import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from "@angular/material/table";


import { ListaInvestimentosComponent } from './componentes/lista-investimentos/lista-investimentos.component';
import { ListaResgateComponent } from './componentes/lista-resgate/lista-resgate.component';
import { DetalheResgateComponent } from './componentes/detalhe-resgate/detalhe-resgate.component';
import { InvestimentosService } from './services/investimentos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListaInvestimentosComponent,
    ListaResgateComponent,
    DetalheResgateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [InvestimentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
