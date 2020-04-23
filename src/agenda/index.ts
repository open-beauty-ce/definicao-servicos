import {ObjectID} from "../ObjectID";
import {Common} from "../common";

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

    export type FiltroHorarios = Common.Input.Filtro<Partial<{
      id: Common.Input.Condicoes;
      data: Common.Input.Condicoes;
      procedimentoId: Common.Input.Condicoes;
      doutor: Common.Input.Condicoes;
    }>, Partial<{
      id: Common.Input.Ordem;
      data: Common.Input.Ordem;
    }>>

    export type FiltroProcedimentos = Common.Input.Filtro<Partial<{
      id: Common.Input.Condicoes;
      nome: Common.Input.Condicoes;
      duracao: Common.Input.Condicoes;
      doutor: Common.Input.Condicoes;
    }>, Partial<{
      id: Common.Input.Ordem;
      nome: Common.Input.Ordem;
      duracao: Common.Input.Ordem;
    }>>

  }

  export namespace Controller {

    export interface Horario {

      marcarHorario(dados: Agenda.Input.MarcarHorario): Promise<Agenda.Horario>;

      pegarHorario(filtro: Common.Input.FiltroPeloId): Promise<Agenda.Horario>;

      pegarProcedimento(filtro: Common.Input.FiltroPeloId): Promise<Agenda.Procedimento>;

      listarHorarios(filtro: Agenda.Input.FiltroHorarios): Promise<Agenda.Horarios>;

      listarProcedimentos(filtro: Agenda.Input.FiltroProcedimentos): Promise<Agenda.Procedimentos>;

    }

  }

}
