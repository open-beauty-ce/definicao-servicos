import { ObjectID } from "./ObjectID";
import { Common } from "./common";
export declare namespace Agenda {
    interface Doutor {
        id: ObjectID;
        nome: string;
    }
    interface Procedimento {
        id: ObjectID;
        nome: string;
        duracao: number;
        doutor: Doutor;
    }
    type Procedimentos = Common.ListaPaginada<Procedimento>;
    interface Encontro {
        id: ObjectID;
        data: number | Date;
        realizado: boolean;
    }
    interface Horario {
        id: ObjectID;
        encontros: Encontro[];
        doutor: Doutor;
        procedimentoId: string;
    }
    type Horarios = Common.ListaPaginada<Horario>;
    namespace Input {
        interface MarcarHorario {
            procedimentoId: ObjectID;
            datas: Array<Date | number>;
            doutor: Doutor;
        }
        interface CriarProcedimento {
            nome: string;
            duracao: number;
            doutor: Doutor;
        }
        type FiltroHorarios = Common.Input.Filtro<Partial<{
            id: Common.Input.Condicoes;
            data: Common.Input.Condicoes;
            procedimentoId: Common.Input.Condicoes;
            doutor: Partial<{
                id: Common.Input.Condicoes;
                nome: Common.Input.Condicoes;
            }>;
        }>, Partial<{
            id: Common.Input.Ordem;
            data: Common.Input.Ordem;
        }>>;
        type FiltroProcedimentos = Common.Input.Filtro<Partial<{
            id: Common.Input.Condicoes;
            nome: Common.Input.Condicoes;
            duracao: Common.Input.Condicoes;
            doutor: Partial<{
                id: Common.Input.Condicoes;
                nome: Common.Input.Condicoes;
            }>;
        }>, Partial<{
            id: Common.Input.Ordem;
            nome: Common.Input.Ordem;
            duracao: Common.Input.Ordem;
        }>>;
    }
    namespace Controller {
        interface Horario {
            marcarHorario(dados: Agenda.Input.MarcarHorario, metadata: Common.Input.Metadata): Common.Resposta<Agenda.Horario>;
            pegarHorario(filtro: Common.Input.FiltroPeloId, metadata: Common.Input.Metadata): Common.Resposta<Agenda.Horario>;
            excluirHorario(filtro: Common.Input.FiltroPeloId, metadata: Common.Input.Metadata): Common.Resposta<Common.SituacaoExclusao>;
            listarHorarios(filtro: Agenda.Input.FiltroHorarios, metadata: Common.Input.Metadata): Common.Resposta<Agenda.Horarios>;
        }
        interface Procedimento {
            criarProcedimento(dados: Agenda.Input.CriarProcedimento, metadata: Common.Input.Metadata): Common.Resposta<Agenda.Procedimento>;
            pegarProcedimento(filtro: Common.Input.FiltroPeloId, metadata: Common.Input.Metadata): Common.Resposta<Agenda.Procedimento>;
            excluirProcedimento(filtro: Common.Input.FiltroPeloId, metadata: Common.Input.Metadata): Common.Resposta<Common.SituacaoExclusao>;
            listarProcedimentos(filtro: Agenda.Input.FiltroProcedimentos, metadata: Common.Input.Metadata): Common.Resposta<Agenda.Procedimentos>;
        }
    }
}
