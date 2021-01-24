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