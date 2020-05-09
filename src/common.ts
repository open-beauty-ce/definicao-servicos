import {ObjectID} from "./ObjectID";
import {Observable} from "rxjs";

export namespace Common {

  export interface ListaPaginada<T> {
    pagina: number;
    paginas: number;
    total: number;
    itens: T[];
  }

  export interface SituacaoExclusao {
    sucesso: boolean;
  }

  export type Resposta<T> = Promise<T> & Observable<T>;

  export namespace Input {

    export type Condicoes = any;

    export interface Paginacao {
      limite?: number;
      pagina?: number;
    }

    export enum Ordem {
      NONE,
      ASC,
      DESC = -1
    }

    export interface Filtro<F, O> {
      filtro?: F;
      ordenacao?: O;
      paginacao?: Paginacao;
    }

    export type FiltroPeloId = {
      id: ObjectID;
    }

  }

}
