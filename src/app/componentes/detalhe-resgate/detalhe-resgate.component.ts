import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { InvestimentosService } from 'src/app/services/investimentos.service';
import { AppComponent } from "../../app.component";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-detalhe-resgate',
  templateUrl: './detalhe-resgate.component.html',
  styleUrls: [
    './detalhe-resgate.component.css',
    '../../app.component.css']
})
export class DetalheResgateComponent implements OnInit {
  public investimentos: any = [];
  somaValoresResgatar: Array<{ id: number, valor: any }> = [
    { id: 0, valor: 0 }
  ];
  displayedColumns: string[] = ['acao', 'saldoAcumulado', 'saldoTotalDisponivel'];
  resgateTotal: number = 0;
  @Input() public parentData: any;


  constructor(
    private _investimentoService: InvestimentosService,
    private _appComponent: AppComponent,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.parentData);
  }

  retornarPagina() {
    this._appComponent.selecionarPagina(1);
  }

  abrirModal() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  openSnackBar(message:string) {
    this._snackBar.openFromComponent(AlertComponent, {
      duration: 2000,
      announcementMessage : message
    });
  }

  atualizaValoresResgatar(event: any) {
    this.resgateTotal = 0;
    let id = parseInt(event.target.id);
    let valor = event.target.value;
    let found = this.somaValoresResgatar.find(element => element.id == id);
    let valorMaximo = (this.parentData.acoes[id-1].percentual * this.parentData.saldoTotalDisponivel)/100
    if (valor <= valorMaximo) {
      if (!!found) {
        this.somaValoresResgatar[id].valor = valor;
      } else {
        this.somaValoresResgatar.push({ id, valor });
      }
      this.somaValoresResgatar.forEach((element, index, array) => {
        this.resgateTotal += parseInt(element.valor);
      });
    } else {
      console.log('Valor excedido!');
      this.openSnackBar('Valor Excedido!');
    }
  }

  
}

@Component({
  template: `
  <div class="w-74vw borda">
    <div class="container jc-c">
      <div class="w-95p container jc-c">
        <h1>Resgate efetuado com sucesso!</h1>
      </div>
      <div class="container w-5p jc-e">
        <button class="botao-fecha" (click)="fecharModal()">X</button>
      </div>
    </div>
    <br />
    <div class="container jc-c">
      <p>O valor solicitado será disponibilizado em até 5 dias úteis</p>
      <br />
      <br />
    </div>
    <div class="container jc-c">
      <button class="container botao-azul" (click)="fecharModal()">Novo Resgate</button>
    </div>
    <br/>
  </div>
  `,
  styleUrls: [
    './detalhe-resgate.component.css',
    '../../app.component.css']
})

export class DialogElementsExampleDialog {

  constructor(public dialog: MatDialog) { }

  fecharModal() {
    console.log('Fechando Modal...');
    this.dialog.closeAll();
  }
  
}


@Component({
  template: `
  <span class="example-pizza-party">
       O valor informado excede o saldo acumulado!
  </span>`,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class AlertComponent {
  
}
