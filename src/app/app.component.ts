import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RetornoHttp } from "./app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private http: HttpClient){}
  listaInvestimentos: any;
  dataSource: any;
  title = 'resgateInvestimentos-CS';
  pagina:number = 1;
  public investimentoSelecionado:any = [];


  addItem(newItem: string) {
    this.investimentoSelecionado = newItem;
    this.investimentoSelecionado;
  }
  
  ngOnInit(): void {
    this.obterLista()
      .subscribe(
        (        data: any) => (
          this.listaInvestimentos = data,
          this.dataSource = this.listaInvestimentos.response.data.listaInvestimentos
          ),
        (        error: any) => console.log(error),
      )
  }

  private _BASE_URL: string = 'http://www.mocky.io/v2/5e76797e2f0000f057986099';

  obterLista(): Observable<RetornoHttp[]> {
    return this.http.get<RetornoHttp[]>(this._BASE_URL)
  }

  public selecionarPagina(pagina:number){
    this.pagina = pagina;
  }
}

export interface RootObject {
  response: Response;
}

interface Response {
  status: string;
  data: Data;
}

interface Data {
  listaInvestimentos: ListaInvestimento[];
}

interface ListaInvestimento {
  nome: string;
  objetivo: string;
  saldoTotalDisponivel: number;
  indicadorCarencia: string;
  acoes: Acoe[];
}

interface Acoe {
  id: string;
  nome: string;
  percentual: number;
}

