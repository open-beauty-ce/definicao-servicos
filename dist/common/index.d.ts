import { ObjectID } from "../ObjectID";
export declare namespace Common {
    interface ListaPaginada<T> {
        pagina: number;
        paginas: number;
        total: number;
        itens: T[];
    }
    namespace Input {
        type Condicoes = Partial<{
            eq: string;
            regexp: string;
            gt: any;
            gte: any;
            lt: any;
            lte: any;
        }>;
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
