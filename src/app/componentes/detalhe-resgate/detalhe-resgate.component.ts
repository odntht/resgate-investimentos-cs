import { Component, Input, OnInit } from '@angular/core';
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
  resgateTotal : any;
  displayedColumns: string[] = ['acao', 'saldoAcumulado', 'saldoTotalDisponivel'];

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
