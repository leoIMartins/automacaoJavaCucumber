$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuario \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 24,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 27,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 373500,
  "status": "passed"
});
formatter.before({
  "duration": 462000,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuario \"leonardo_ignacio2010@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"lsb123\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "inserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 6613717600,
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
  "duration": 366657200,
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
  "duration": 83702100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 632470300,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 56479300,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 66365000,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 337631900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
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
  "duration": 137385100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 525694900,
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
  "duration": 34575100,
  "status": "passed"
});
formatter.after({
  "duration": 302815700,
  "status": "passed"
});
formatter.after({
  "duration": 847980600,
  "status": "passed"
});
formatter.before({
  "duration": 54200,
  "status": "passed"
});
formatter.before({
  "duration": 29100,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuario \"leonardo_ignacio2010@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"lsb123\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "inserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 6366886400,
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
  "duration": 190537200,
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
  "duration": 86931200,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 705701100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 51132500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 86199900,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 353391100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
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
  "duration": 69561000,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 292596300,
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
  "duration": 40062800,
  "status": "passed"
});
formatter.after({
  "duration": 324138800,
  "status": "passed"
});
formatter.after({
  "duration": 855521500,
  "status": "passed"
});
formatter.before({
  "duration": 438000,
  "status": "passed"
});
formatter.before({
  "duration": 53400,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "informo o usuario \"leonardo_ignacio2010@hotmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a senha \"lsb123\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 15,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "inserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 6512116400,
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
  "duration": 211274900,
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
  "duration": 118443000,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 647817200,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 35626400,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 69617500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 349299300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "informo a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 20,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 21,
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
  "duration": 114745400,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 319730600,
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
  "duration": 35649400,
  "status": "passed"
});
formatter.after({
  "duration": 293332200,
  "status": "passed"
});
formatter.after({
  "duration": 891154700,
  "status": "passed"
});
});