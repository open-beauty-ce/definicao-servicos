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
        type MarcarHorarioAssinado = Common.Input.DadosAssinados<MarcarHorario>;
        interface CriarProcedimento {
            nome: string;
            duracao: number;
            doutor: Doutor;
        }
        type CriarProcedimentoAssinado = Common.Input.DadosAssinados<CriarProcedimento>;
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
        type FiltroHorariosAssinado = Common.Input.FiltroAssinado<FiltroHorarios>;
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
        type FiltroProcedimentosAssinado = Common.Input.FiltroAssinado<FiltroProcedimentos>;
    }
    namespace Controller {
        interface Horario {
            marcarHorario(dados: Agenda.Input.MarcarHorarioAssinado): Common.Resposta<Agenda.Horario>;
            pegarHorario(filtro: Common.Input.FiltroPeloIdAssinado): Common.Resposta<Agenda.Horario>;
            excluirHorario(filtro: Common.Input.FiltroPeloIdAssinado): Common.Resposta<Common.SituacaoExclusao>;
            listarHorarios(filtro: Agenda.Input.FiltroHorariosAssinado): Common.Resposta<Agenda.Horarios>;
        }
        interface Procedimento {
            criarProcedimento(dados: Agenda.Input.CriarProcedimentoAssinado): Common.Resposta<Agenda.Procedimento>;
            pegarProcedimento(filtro: Common.Input.FiltroPeloIdAssinado): Common.Resposta<Agenda.Procedimento>;
            excluirProcedimento(filtro: Common.Input.FiltroPeloIdAssinado): Common.Resposta<Common.SituacaoExclusao>;
            listarProcedimentos(filtro: Agenda.Input.FiltroProcedimentosAssinado): Common.Resposta<Agenda.Procedimentos>;
        }
    }
}
