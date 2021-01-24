import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resgateInvestimentos-CS';

  pagina:number = 1;
  public selecionarPagina(pagina:number){
    this.pagina = pagina;
  }
}
