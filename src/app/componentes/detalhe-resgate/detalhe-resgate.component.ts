import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { InvestimentosService } from 'src/app/services/investimentos.service';
import { AppComponent } from "../../app.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhe-resgate',
  templateUrl: './detalhe-resgate.component.html',
  styleUrls: ['./detalhe-resgate.component.css']
})
export class DetalheResgateComponent implements OnInit {
  public investimentos: any = [];
  somaValoresResgatar: Array<{id:number, valor:any}> = [
    {id : 0,valor : 0}
  ];
  displayedColumns: string[] = ['acao', 'saldoAcumulado', 'saldoTotalDisponivel'];
  resgateTotal:number = 0;
  @Input() public parentData: any;
  

  constructor(
    private _investimentoService: InvestimentosService,
    private _appComponent: AppComponent,
    public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.parentData);
  }

  retornarPagina() {
    this._appComponent.selecionarPagina(1);
  }

  abrirModal() {
    console.log('Modal Aberta!');
    this.dialog.open(DialogElementsExampleDialog);
  }

  atualizaValoresResgatar(event: any){
    this.resgateTotal = 0;
    let id = parseInt(event.target.id);
    let valor = event.target.value;
    let found = this.somaValoresResgatar.find(element => element.id == id);
    if(!!found){
      this.somaValoresResgatar[id].valor = valor;
    } else {
    this.somaValoresResgatar.push({id, valor});
    }
    this.somaValoresResgatar.forEach((element, index, array)=> {
      this.resgateTotal += parseInt(element.valor);
    });
  }


}

@Component({
  selector: 'dialog-elements-example-dialog',
  template: `
  <div>
    <div>
      <h1>Resgate efetuado com sucesso!</h1>
      <button (click)="fecharModal()">X</button>
    </div>
    <div>
    <p>O valor solicitado será disponibilizado em até 5 dias úteis</p>
    </div>
    <button (click)="fecharModal()">Novo Resgate</button>
  </div>
  `
})



export class DialogElementsExampleDialog {

  constructor( public dialog: MatDialog) { }

  fecharModal() {
    console.log('Fechando Modal...');
    this.dialog.closeAll();
  }
}
