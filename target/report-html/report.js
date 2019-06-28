$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\nComo um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 21,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 22,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "informo o usuário \"leonardo_ignacio2010@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "a senha \"lsb123\"",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 27,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "sou notificado que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "inserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 13043998200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leonardo_ignacio2010@hotmail.com",
      "offset": 19
    }
  ],
  "location": "inserirContaSteps.informo_o_usuário(String)"
});
formatter.result({
  "duration": 342613500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lsb123",
      "offset": 9
    }
  ],
  "location": "inserirContaSteps.a_senha(String)"
});
formatter.result({
  "duration": 101676100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 837018100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_página_inicial()"
});
formatter.result({
  "duration": 46635600,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 87207500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 433096400,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 288813500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.sou_notificar_que_o_nome_da_conta_é_obrigatório()"
});
formatter.result({
  "duration": 34300800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 33,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "informo o usuário \"leonardo_ignacio2010@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "a senha \"lsb123\"",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 38,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 39,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "location": "inserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 4563283900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leonardo_ignacio2010@hotmail.com",
      "offset": 19
    }
  ],
  "location": "inserirContaSteps.informo_o_usuário(String)"
});
formatter.result({
  "duration": 199588700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lsb123",
      "offset": 9
    }
  ],
  "location": "inserirContaSteps.a_senha(String)"
});
formatter.result({
  "duration": 101867400,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 842664700,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_página_inicial()"
});
formatter.result({
  "duration": 48451400,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 85310600,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 413594500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "inserirContaSteps.informo_a_conta(String)"
});
formatter.result({
  "duration": 109709200,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 318894500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.sou_notificado_que_já_existe_uma_conta_com_esse_nome()"
});
formatter.result({
  "duration": 47612700,
  "status": "passed"
});
});