import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";

import { ListaInvestimentosComponent } from './componentes/lista-investimentos/lista-investimentos.component';
import { DetalheResgateComponent } from './componentes/detalhe-resgate/detalhe-resgate.component';
import { InvestimentosService } from './services/investimentos.service';
import { FormsModule } from '@angular/forms';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

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
    MatSnackBarModule,
    CurrencyMaskModule,
    FormsModule
  ],
  providers: [InvestimentosService, {
    provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
