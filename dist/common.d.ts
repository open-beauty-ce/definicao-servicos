import { ObjectID } from "./ObjectID";
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
