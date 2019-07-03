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
  "description": "\r\nComo um usuario \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 23,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 24,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 321200,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"leonardo_ignacio2010@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"lsb123\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "inserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 3435692100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leonardo_ignacio2010@hotmail.com",
      "offset": 19
    }
  ],
  "location": "inserirContaSteps.informo_o_usuario(String)"
});
formatter.result({
  "duration": 219795100,
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
  "duration": 102899800,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 670914900,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 35140100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 63033900,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 304744200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
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
  "duration": 80511700,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 354434000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "inserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 33755500,
  "status": "passed"
});
formatter.after({
  "duration": 808099800,
  "status": "passed"
});
formatter.before({
  "duration": 68600,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"leonardo_ignacio2010@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"lsb123\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "inserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 3535137800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leonardo_ignacio2010@hotmail.com",
      "offset": 19
    }
  ],
  "location": "inserirContaSteps.informo_o_usuario(String)"
});
formatter.result({
  "duration": 170932400,
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
  "duration": 102544500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 601988300,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 48247400,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 69597000,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 289530800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "inserirContaSteps.informo_a_conta(String)"
});
formatter.result({
  "duration": 47017100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 246621400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "inserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 32175400,
  "status": "passed"
});
formatter.after({
  "duration": 835306800,
  "status": "passed"
});
formatter.before({
  "duration": 84800,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"leonardo_ignacio2010@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"lsb123\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "inserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 3236333200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leonardo_ignacio2010@hotmail.com",
      "offset": 19
    }
  ],
  "location": "inserirContaSteps.informo_o_usuario(String)"
});
formatter.result({
  "duration": 185876500,
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
  "duration": 78930800,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 1171511500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 34343300,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 64113300,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 300793400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 17
    }
  ],
  "location": "inserirContaSteps.informo_a_conta(String)"
});
formatter.result({
  "duration": 81987700,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 296183100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "inserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 33446800,
  "status": "passed"
});
formatter.after({
  "duration": 802377000,
  "status": "passed"
});
});