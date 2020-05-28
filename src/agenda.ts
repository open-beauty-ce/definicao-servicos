import {ObjectID} from "./ObjectID";
import {Common} from "./common";

export namespace Agenda {

  export interface Doutor {
    id: ObjectID;
    nome: string;
  }

  export interface Procedimento {
    id: ObjectID;
    nome: string;
    duracao: number;
    doutor: Doutor;
  }

  export type Procedimentos = Common.ListaPaginada<Procedimento>;

  export interface Encontro {
    id: ObjectID;
    data: number | Date;
    realizado: boolean;
  }

  export interface Horario {
    id: ObjectID;
    encontros: Encontro[];
    doutor: Doutor;
    procedimentoId: string;
  }

  export type Horarios = Common.ListaPaginada<Horario>;

  export namespace Input {

    export interface MarcarHorario {
      procedimentoId: ObjectID;
      datas: Array<Date | number>;
      doutor: Doutor;
    }

    export type MarcarHorarioAssinado = Common.Input.DadosAssinados<MarcarHorario>

    export interface CriarProcedimento {
      nome: string;
      duracao: number;
      doutor: Doutor;
    }

    export type CriarProcedimentoAssinado = Common.Input.DadosAssinados<CriarProcedimento>

    export type FiltroHorarios = Common.Input.Filtro<Partial<{
      id: Common.Input.Condicoes;
      data: Common.Input.Condicoes;
      procedimentoId: Common.Input.Condicoes;
      doutor: Partial<{
        id: Common.Input.Condicoes,
        nome: Common.Input.Condicoes
      }>;
    }>, Partial<{
      id: Common.Input.Ordem;
      data: Common.Input.Ordem;
    }>>

    export type FiltroHorariosAssinado = Common.Input.FiltroAssinado<FiltroHorarios>

    export type FiltroProcedimentos = Common.Input.Filtro<Partial<{
      id: Common.Input.Condicoes;
      nome: Common.Input.Condicoes;
      duracao: Common.Input.Condicoes;
      doutor: Partial<{
        id: Common.Input.Condicoes,
        nome: Common.Input.Condicoes
      }>;
    }>, Partial<{
      id: Common.Input.Ordem;
      nome: Common.Input.Ordem;
      duracao: Common.Input.Ordem;
    }>>

    export type FiltroProcedimentosAssinado = Common.Input.FiltroAssinado<FiltroProcedimentos>

  }

  export namespace Controller {

    export interface Horario {

      marcarHorario(dados: Agenda.Input.MarcarHorarioAssinado): Common.Resposta<Agenda.Horario>;

      pegarHorario(filtro: Common.Input.FiltroPeloIdAssinado): Common.Resposta<Agenda.Horario>;

      excluirHorario(filtro: Common.Input.FiltroPeloIdAssinado): Common.Resposta<Common.SituacaoExclusao>;

      listarHorarios(filtro: Agenda.Input.FiltroHorariosAssinado): Common.Resposta<Agenda.Horarios>;

    }

    export interface Procedimento {

      criarProcedimento(dados: Agenda.Input.CriarProcedimentoAssinado): Common.Resposta<Agenda.Procedimento>;

      pegarProcedimento(filtro: Common.Input.FiltroPeloIdAssinado): Common.Resposta<Agenda.Procedimento>;

      excluirProcedimento(filtro: Common.Input.FiltroPeloIdAssinado): Common.Resposta<Common.SituacaoExclusao>;

      listarProcedimentos(filtro: Agenda.Input.FiltroProcedimentosAssinado): Common.Resposta<Agenda.Procedimentos>;

    }

  }

}
