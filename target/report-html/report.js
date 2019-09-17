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
  "duration": 530400,
  "status": "passed"
});
formatter.before({
  "duration": 725700,
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
  "duration": 7862027100,
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
  "duration": 225109600,
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
  "duration": 77577000,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 801919700,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 45241300,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 82661100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 411297600,
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
  "duration": 173038500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 763736100,
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
  "duration": 40619900,
  "status": "passed"
});
formatter.after({
  "duration": 378600700,
  "status": "passed"
});
formatter.after({
  "duration": 754274800,
  "status": "passed"
});
formatter.before({
  "duration": 257300,
  "status": "passed"
});
formatter.before({
  "duration": 182900,
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
  "duration": 7779401100,
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
  "duration": 166304900,
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
  "duration": 73344100,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 795480400,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 32241000,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 97183200,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 420672100,
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
  "duration": 52028600,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 354458500,
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
  "duration": 32870600,
  "status": "passed"
});
formatter.after({
  "duration": 346851400,
  "status": "passed"
});
formatter.after({
  "duration": 719649900,
  "status": "passed"
});
formatter.before({
  "duration": 216300,
  "status": "passed"
});
formatter.before({
  "duration": 134900,
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
  "duration": 7709043900,
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
  "duration": 172194000,
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
  "duration": 72351300,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_entrar()"
});
formatter.result({
  "duration": 789723300,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.visualizo_a_pagina_inicial()"
});
formatter.result({
  "duration": 37423400,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Contas()"
});
formatter.result({
  "duration": 79893800,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Adicionar()"
});
formatter.result({
  "duration": 411139800,
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
  "duration": 114118500,
  "status": "passed"
});
formatter.match({
  "location": "inserirContaSteps.seleciono_Salvar()"
});
formatter.result({
  "duration": 346931100,
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
  "duration": 33939700,
  "status": "passed"
});
formatter.after({
  "duration": 354355500,
  "status": "passed"
});
formatter.after({
  "duration": 746832900,
  "status": "passed"
});
});