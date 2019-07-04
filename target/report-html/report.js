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
  "duration": 566600,
  "status": "passed"
});
formatter.before({
  "duration": 90500,
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
  "duration": 6999499900,
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
  "duration": 225836000,
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
  "duration": 94837100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 1010081800,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 49337500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 109432500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 420857400,
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
  "duration": 128021700,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 445284600,
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
  "duration": 41365700,
  "status": "passed"
});
formatter.after({
  "duration": 378302100,
  "status": "passed"
});
formatter.after({
  "duration": 687209000,
  "status": "passed"
});
formatter.before({
  "duration": 115600,
  "status": "passed"
});
formatter.before({
  "duration": 111900,
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
  "duration": 6810692300,
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
  "duration": 180696400,
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
  "duration": 83411100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 876816900,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 45633700,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 99675900,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 397285400,
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
  "duration": 58449800,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 344569300,
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
  "duration": 39252200,
  "status": "passed"
});
formatter.after({
  "duration": 322879500,
  "status": "passed"
});
formatter.after({
  "duration": 759024600,
  "status": "passed"
});
formatter.before({
  "duration": 218400,
  "status": "passed"
});
formatter.before({
  "duration": 153500,
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
  "duration": 7144103500,
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
  "duration": 213041600,
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
  "duration": 104619300,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 967019700,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 46483800,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 97715700,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 380657300,
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
  "duration": 121861100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 300371400,
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
  "duration": 35874600,
  "status": "passed"
});
formatter.after({
  "duration": 328281900,
  "status": "passed"
});
formatter.after({
  "duration": 781706700,
  "status": "passed"
});
});