#language: pt
@funcionais
Funcionalidade: Cadastro de contas
  
  Como um usuario 
  Gostaria de cadastrar contas
  Para que eu possa distribuir meu dinheiro de uma forma mais organizada

  Contexto: 
    Dado que estou acessando a aplicação
    Quando informo o usuario "leonardo_ignacio2010@hotmail.com"
    E a senha "lsb123"
    E seleciono entrar
    Entao visualizo a pagina inicial
    Quando seleciono Contas
    E seleciono Adicionar

  Esquema do Cenario: Deve validar regras cadastro contas
    Quando informo a conta "<conta>"
    E seleciono Salvar
    Entao recebo a mensagem "<mensagem>"

    Exemplos: 
      | conta            | mensagem                           |
      | Conta de Teste   | Conta adicionada com sucesso!      |
      |                  | Informe o nome da conta            |
      | Conta mesmo nome | Já existe uma conta com esse nome! |
