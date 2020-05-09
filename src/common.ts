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

  export type Resposta<T> = Partial<Promise<T> & Observable<T>>;

  export enum GrpcStatus {
    OK,
    CANCELLED,
    UNKNOWN,
    INVALID_ARGUMENT,
    DEADLINE_EXCEEDED,
    NOT_FOUND,
    ALREADY_EXISTS,
    PERMISSION_DENIED,
    RESOURCE_EXHAUSTED,
    FAILED_PRECONDITION,
    ABORTED,
    OUT_OF_RANGE,
    UNIMPLEMENTED,
    INTERNAL,
    UNAVAILABLE,
    DATA_LOSS,
    UNAUTHENTICATED
  }

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
