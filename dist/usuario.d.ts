import { Common } from "./common";
export declare namespace Usuario {
    interface Contato {
        id: string;
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
            contatos: Omit<Contato, 'id'>[];
        }
        type DadosUsuarioAssinados = Common.Input.DadosAssinados<DadosUsuario>;
        type DadosAtualizarUsuario = Omit<Usuario.Input.DadosUsuario, 'contatos'> & {
            contatos: Contato[];
        };
        interface AtualizarUsuario {
            filtro: Common.Input.FiltroPeloId;
            dados: Partial<DadosAtualizarUsuario>;
        }
        type AtualizarUsuarioAssinado = Common.Input.AtualizacaoAssinada<AtualizarUsuario>;
        interface Autenticacao {
            email: string;
            senha: string;
        }
        type FiltroUsuarios = Common.Input.Filtro<Partial<{
            id: Common.Input.Condicoes;
            nome: Common.Input.Condicoes;
            email: Common.Input.Condicoes;
            funcao: Common.Input.Condicoes;
            contatos: {
                id: Common.Input.Condicoes;
                telefone: Common.Input.Condicoes;
                whatsapp: Common.Input.Condicoes;
            };
        }>, Partial<{
            id: Common.Input.Ordem;
            nome: Common.Input.Ordem;
            email: Common.Input.Ordem;
            funcao: Common.Input.Ordem;
            contatos: {
                id: Common.Input.Ordem;
                telefone: Common.Input.Ordem;
                whatsapp: Common.Input.Ordem;
            };
        }>>;
        type FiltroUsuariosAssinado = Common.Input.FiltroAssinado<FiltroUsuarios>;
    }
    namespace Controller {
        interface Usuario {
            criarUsuario(dados: Usuario.Input.DadosUsuarioAssinados): Common.Resposta<Usuario.Usuario>;
            atualizarUsuario(params: Usuario.Input.AtualizarUsuarioAssinado): Common.Resposta<Usuario.Usuario>;
            pegarUsuario(filtro: Common.Input.FiltroPeloIdAssinado): Common.Resposta<Usuario.Usuario>;
            listarUsuarios(params: Usuario.Input.FiltroUsuariosAssinado): Common.Resposta<Usuario.Usuarios>;
            excluirUsuario(filtro: Common.Input.FiltroPeloIdAssinado): Common.Resposta<Common.SituacaoExclusao>;
        }
        interface Autenticacao {
            autenticar(dados: Usuario.Input.Autenticacao): Common.Resposta<Usuario.Token>;
            usuarioAutenticado(params: Usuario.Token): Common.Resposta<Usuario.Usuario>;
        }
    }
}
