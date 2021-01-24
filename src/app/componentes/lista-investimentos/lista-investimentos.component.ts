import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { InvestimentosService } from 'src/app/services/investimentos.service';
import { AppComponent } from "../../app.component";
import { RootObject } from "./lista-investimentos";

export interface ListaInvestimentos {
  nome: string;
  objetivo: string;
  saldoTotalDisponivel: number;
  indicadorCarencia: string;
  acoes: Acoes[];
}

interface Acoes {
  id: string;
  nome: string;
  percentual: number;
}

@Component({
  selector: 'app-lista-investimentos',
  templateUrl: './lista-investimentos.component.html',
  styleUrls: [
    './lista-investimentos.component.css',
     '../../app.component.css']
})
export class ListaInvestimentosComponent implements OnInit {
  erroMsg : string = '';
  listaInvestimentos: any;
  dataSource: any;

  constructor(
    private _investimentoService: InvestimentosService,
    private _appComponent: AppComponent,
    private http: HttpClient) {
  }

  ngOnInit(): void {
    this.obterLista()
      .subscribe(
        data => (
          this.listaInvestimentos = data,
          this.dataSource = this.listaInvestimentos.response.data.listaInvestimentos
        ),
        error => console.log(error),
      )
  }

  private _BASE_URL: string = 'http://www.mocky.io/v2/5e76797e2f0000f057986099';

  obterLista(): Observable<RootObject[]> {
    return this.http.get<RootObject[]>(this._BASE_URL)
  }

  abrirResgate(row: any) {
    this._appComponent.investimentoSelecionado = row;
    if (row.indicadorCarencia == 'N') {
      this._appComponent.selecionarPagina(2);
    } else {
      console.log('Possui Indicador de Carencia!');
    }
  }
  displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotalDisponivel'];
}
