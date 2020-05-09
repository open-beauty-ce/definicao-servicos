import { ObjectID } from "./ObjectID";
import { Observable } from "rxjs";
export declare namespace Common {
    interface ListaPaginada<T> {
        pagina: number;
        paginas: number;
        total: number;
        itens: T[];
    }
    interface SituacaoExclusao {
        sucesso: boolean;
    }
    type Resposta<T> = Partial<Promise<T> & Observable<T>>;
    enum GrpcStatus {
        OK = 0,
        CANCELLED = 1,
        UNKNOWN = 2,
        INVALID_ARGUMENT = 3,
        DEADLINE_EXCEEDED = 4,
        NOT_FOUND = 5,
        ALREADY_EXISTS = 6,
        PERMISSION_DENIED = 7,
        RESOURCE_EXHAUSTED = 8,
        FAILED_PRECONDITION = 9,
        ABORTED = 10,
        OUT_OF_RANGE = 11,
        UNIMPLEMENTED = 12,
        INTERNAL = 13,
        UNAVAILABLE = 14,
        DATA_LOSS = 15,
        UNAUTHENTICATED = 16
    }
    namespace Input {
        type Condicoes = any;
        interface Paginacao {
            limite?: number;
            pagina?: number;
        }
        enum Ordem {
            NONE = 0,
            ASC = 1,
            DESC = -1
        }
        interface Filtro<F, O> {
            filtro?: F;
            ordenacao?: O;
            paginacao?: Paginacao;
        }
        type FiltroPeloId = {
            id: ObjectID;
        };
    }
}
