import {Common} from "./common";

export namespace Usuario {

  export interface Contato {
    id: string;
    telefone: string;
    whatsapp: boolean;
  }

  export interface Usuario {
    id: string;
    nome: string;
    email: string;
    funcao: string;
    contatos: Contato[];
  }

  export type Usuarios = Common.ListaPaginada<Usuario>;

  export interface Token {
    token: string;
  }

  export namespace Input {

    export interface DadosUsuario {
      nome: string;
      email: string;
      senha: string;
      funcao: string;
      contatos: Omit<Contato, 'id'>[];
    }

    export interface AtualizarUsuario {
      filtro: Common.Input.FiltroPeloId;
      dados: Partial<Usuario.Input.DadosUsuario | { contatos: Contato[] }>;
    }

    export interface Autenticacao {
      email: string;
      senha: string;
    }

    export type FiltroUsuarios = Common.Input.Filtro<Partial<{
      id: Common.Input.Condicoes,
      nome: Common.Input.Condicoes,
      email: Common.Input.Condicoes,
      funcao: Common.Input.Condicoes,
      contatos: {
        id: Common.Input.Condicoes,
        telefone: Common.Input.Condicoes,
        whatsapp: Common.Input.Condicoes,
      }
    }>, Partial<{
      id: Common.Input.Ordem,
      nome: Common.Input.Ordem,
      email: Common.Input.Ordem,
      funcao: Common.Input.Ordem,
      contatos: {
        id: Common.Input.Ordem,
        telefone: Common.Input.Ordem,
        whatsapp: Common.Input.Ordem,
      }
    }>>

  }

  export namespace Controller {

    export interface Usuario {

      criarUsuario(dados: Usuario.Input.DadosUsuario): Promise<Usuario.Usuario>;

      atualizarUsuario(params: Usuario.Input.AtualizarUsuario): Promise<Usuario.Usuario>;

      pegarUsuario(filtro: Common.Input.FiltroPeloId): Promise<Usuario.Usuario>;

      listarUsuarios(params: Usuario.Input.FiltroUsuarios): Promise<Usuario.Usuarios>;

      excluirUsuario(filtro: Common.Input.FiltroPeloId): Promise<Common.SituacaoExclusao>;

    }

    export interface Autenticacao {

      autenticar(dados: Usuario.Input.Autenticacao): Promise<Usuario.Token>;

      usuarioAutenticado(params: Usuario.Token): Promise<Usuario.Usuario>;

    }

  }

}
