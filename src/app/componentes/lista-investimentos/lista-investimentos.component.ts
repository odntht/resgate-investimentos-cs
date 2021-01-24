import { Component, OnInit } from '@angular/core';
import { InvestimentosService } from 'src/app/services/investimentos.service';

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
  styleUrls: ['./lista-investimentos.component.css']
})
export class ListaInvestimentosComponent implements OnInit {
  constructor(private _investimentoService: InvestimentosService) { }

  ngOnInit(): void {
    let temp = this._investimentoService.obterInvestimentos();
    this.listaInvestimentos = this.tratarLista(temp);
    console.log(this.listaInvestimentos);

  }

  tratarLista(lista: any) {
  return lista[0].response.data.listaInvestimentos;
  }

  listaInvestimentos: ListaInvestimentos[] = [ {
    "nome": "INVESTIMENTO I",
    "objetivo": "Minha aposentadoria",
    "saldoTotalDisponivel": 39321.29,
    "indicadorCarencia": "N",
    "acoes": [
      {
        "id": "1",
        "nome": "BBAS3",
        "percentual": 28.1
      },
      {
        "id": "2",
        "nome": "VALE3",
        "percentual": 20.71
      },
      {
        "id": "3",
        "nome": "PETR4",
        "percentual": 21.63
      },
      {
        "id": "4",
        "nome": "CMIG3",
        "percentual": 12.41
      },
      {
        "id": "5",
        "nome": "OIBR3",
        "percentual": 17.15
      }
    ]
  },
  {
    "nome": "INVESTIMENTO II",
    "objetivo": "Viajem dos sonhos",
    "saldoTotalDisponivel": 7300,
    "indicadorCarencia": "N",
    "acoes": [
      {
        "id": "1",
        "nome": "BBAS3",
        "percentual": 35.81
      },
      {
        "id": "2",
        "nome": "VALE3",
        "percentual": 26.42
      },
      {
        "id": "3",
        "nome": "PETR4",
        "percentual": 37.77
      }
    ]
  },
  {
    "nome": "INVESTIMENTO III",
    "objetivo": "Abrir meu próprio negócio",
    "saldoTotalDisponivel": 26000,
    "indicadorCarencia": "N",
    "acoes": [
      {
        "id": "1",
        "nome": "BBAS3",
        "percentual": 41.1
      },
      {
        "id": "2",
        "nome": "VALE3",
        "percentual": 22.43
      },
      {
        "id": "3",
        "nome": "PETR4",
        "percentual": 26.12
      },
      {
        "id": "5",
        "nome": "OIBR3",
        "percentual": 10.35
      }
    ]
  },
  {
    "nome": "INVESTIMENTO IV",
    "objetivo": "Investimento em carencia",
    "saldoTotalDisponivel": 44000,
    "indicadorCarencia": "S",
    "acoes": [
      {
        "id": "1",
        "nome": "BBAS3",
        "percentual": 41.1
      },
      {
        "id": "2",
        "nome": "VALE3",
        "percentual": 22.43
      },
      {
        "id": "3",
        "nome": "PETR4",
        "percentual": 26.12
      },
      {
        "id": "5",
        "nome": "OIBR3",
        "percentual": 10.35
      }
    ]
  }];

  displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotalDisponivel'];
  dataSource = this.listaInvestimentos;
}
