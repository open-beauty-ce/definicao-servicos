import {ObjectID} from "../ObjectID";

export namespace Common {

  export interface ListaPaginada<T> {
    pagina: number;
    paginas: number;
    total: number;
    itens: T[];
  }

  export namespace Input {

    export type Condicoes = Partial<{
      eq: string;
      regexp: string;
      gt: any;
      gte: any;
      lt: any;
      lte: any;
    }>;

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
