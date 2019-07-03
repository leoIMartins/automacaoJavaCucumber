#language: pt
Funcionalidade: Cadastro de contas
  
  Como um usuário 
  Gostaria de cadastrar contas
  Para que eu possa distribuir meu dinheiro de uma forma mais organizada

  Contexto: 
    Dado que estou acessando a aplicação
    Quando informo o usuário "leonardo_ignacio2010@hotmail.com"
    E a senha "lsb123"
    E seleciono entrar
    Então visualizo a página inicial
    Quando seleciono Contas
    E seleciono Adicionar

  Esquema do Cenário: Deve validar regras cadastro contas
    Quando informo a conta "<conta>"
    E seleciono Salvar
    Então recebo a mensagem "<mensagem>"

    Exemplos: 
      | conta            | mensagem                           |
      | Conta de Teste   | Conta adicionada com sucesso!      |
      |                  | Informe o nome da conta            |
      | Conta mesmo nome | Já existe uma conta com esse nome! |

  Cenário: Deve inserir uma conta com sucesso
    E informo a conta "Conta de Teste"
    E seleciono Salvar
    Então a conta é inserida com sucesso

