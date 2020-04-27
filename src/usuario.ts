import {Common} from "./common";

export namespace Usuario {

  export interface Contato {
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
      contatos: Contato[];
    }

    export interface AtualizarUsuario {
      filtro: Common.Input.FiltroPeloId;
      dados: Partial<Usuario.Input.DadosUsuario>;
    }

    export interface Autenticacao {
      email: string;
      senha: string;
    }

  }

  export namespace Controller {

    export interface Usuario {

      criarUsuario(dados: Usuario.Input.DadosUsuario): Promise<Usuario.Usuario>;

      atualizarUsuario(params: Usuario.Input.AtualizarUsuario): Promise<Usuario.Usuario>;

      pegarUsuario(filtro: Common.Input.FiltroPeloId): Promise<Usuario.Usuario>;

      listarUsuarios(FiltroUsuariosInput): Promise<Usuario.Usuarios>;

      excluirUsuario(filtro: Common.Input.FiltroPeloId): Promise<Common.SituacaoExclusao>;

    }

    export interface Autenticacao {

      autenticar(dados: Usuario.Input.Autenticacao): Promise<Usuario.Token>;

      usuarioAutenticado(params: Usuario.Token): Promise<Usuario.Usuario>;

    }

  }

}
