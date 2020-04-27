import { Common } from "./common";
export declare namespace Usuario {
    interface Contato {
        telefone: string;
        whatsapp: boolean;
    }
    interface Usuario {
        id: string;
        nome: string;
        email: string;
        funcao: string;
        contatos: Contato[];
    }
    type Usuarios = Common.ListaPaginada<Usuario>;
    interface Token {
        token: string;
    }
    namespace Input {
        interface DadosUsuario {
            nome: string;
            email: string;
            senha: string;
            funcao: string;
            contatos: Contato[];
        }
        interface AtualizarUsuario {
            filtro: Common.Input.FiltroPeloId;
            dados: Partial<Usuario.Input.DadosUsuario>;
        }
        interface Autenticacao {
            email: string;
            senha: string;
        }
    }
    namespace Controller {
        interface Usuario {
            criarUsuario(dados: Usuario.Input.DadosUsuario): Promise<Usuario.Usuario>;
            atualizarUsuario(params: Usuario.Input.AtualizarUsuario): Promise<Usuario.Usuario>;
            pegarUsuario(filtro: Common.Input.FiltroPeloId): Promise<Usuario.Usuario>;
            listarUsuarios(FiltroUsuariosInput: any): Promise<Usuario.Usuarios>;
            excluirUsuario(filtro: Common.Input.FiltroPeloId): Promise<Common.SituacaoExclusao>;
        }
        interface Autenticacao {
            autenticar(dados: Usuario.Input.Autenticacao): Promise<Usuario.Token>;
            usuarioAutenticado(params: Usuario.Token): Promise<Usuario.Usuario>;
        }
    }
}
