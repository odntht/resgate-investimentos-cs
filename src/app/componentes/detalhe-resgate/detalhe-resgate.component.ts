import { Component, OnInit } from '@angular/core';
import { InvestimentosService } from 'src/app/services/investimentos.service';

@Component({
  selector: 'app-detalhe-resgate',
  templateUrl: './detalhe-resgate.component.html',
  styleUrls: ['./detalhe-resgate.component.css']
})
export class DetalheResgateComponent implements OnInit {

  public investimentos: any = [];

  constructor( private _investimentoService : InvestimentosService) { }

  ngOnInit() {
    this.investimentos = this._investimentoService.obterInvestimentos();
    console.log(this.investimentos[0].response.data.listaInvestimentos);
  }

}
