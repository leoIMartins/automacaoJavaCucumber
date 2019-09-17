$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("alugar_filme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Alugar Filme",
  "description": "Como um usuário\r\nEu quero cadastrar aluguéis de filmes\r\nPara controlar preços e datas de entrega",
  "id": "alugar-filme",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "duration": 293300,
  "status": "passed"
});
formatter.before({
  "duration": 93500,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 10
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 11
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 12
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "o preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.um_filme(DataTable)"
});
formatter.result({
  "duration": 219956000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 2187200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 3387800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.a_data_de_entrega_será_em_dias(int)"
});
formatter.result({
  "duration": 832100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 95600,
  "status": "passed"
});
formatter.before({
  "duration": 276200,
  "status": "passed"
});
formatter.before({
  "duration": 50700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 20,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 23,
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 374500,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 130100,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.não_será_possível_por_falta_de_estoque()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 390700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "comments": [
    {
      "line": 33,
      "value": "#Testes Data-Driven (orientado por dados)"
    }
  ],
  "line": 34,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 35,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 36,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 37,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ],
      "line": 38,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;4"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 39,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 469600,
  "status": "passed"
});
formatter.before({
  "duration": 387600,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 168300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 113900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.que_o_tipo_do_aluguel_seja_extendido(String)"
});
formatter.result({
  "duration": 142600,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 95100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 117100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.a_data_de_entrega_será_em_dias(int)"
});
formatter.result({
  "duration": 363800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.a_pontuação_será_de_pontos(int)"
});
formatter.result({
  "duration": 108300,
  "status": "passed"
});
formatter.before({
  "duration": 207600,
  "status": "passed"
});
formatter.before({
  "duration": 56100,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação será de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 109200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 93900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.que_o_tipo_do_aluguel_seja_extendido(String)"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 92700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 124400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.a_data_de_entrega_será_em_dias(int)"
});
formatter.result({
  "duration": 342600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.a_pontuação_será_de_pontos(int)"
});
formatter.result({
  "duration": 95200,
  "status": "passed"
});
formatter.before({
  "duration": 269800,
  "status": "passed"
});
formatter.before({
  "duration": 219000,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 10",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será R$ 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 105300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 110600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.que_o_tipo_do_aluguel_seja_extendido(String)"
});
formatter.result({
  "duration": 68900,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 108300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 165900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.a_data_de_entrega_será_em_dias(int)"
});
formatter.result({
  "duration": 556700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.a_pontuação_será_de_pontos(int)"
});
formatter.result({
  "duration": 91100,
  "status": "passed"
});
formatter.before({
  "duration": 278100,
  "status": "passed"
});
formatter.before({
  "duration": 140100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação será de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 843100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 188400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.que_o_tipo_do_aluguel_seja_extendido(String)"
});
formatter.result({
  "duration": 117600,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 105500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 85900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.a_data_de_entrega_será_em_dias(int)"
});
formatter.result({
  "duration": 860400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.a_pontuação_será_de_pontos(int)"
});
formatter.result({
  "duration": 129700,
  "status": "passed"
});
formatter.uri("aprender_cucumber.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 4,
  "name": "Aprender Cucumber",
  "description": "Como um aluno\r\nEu quero aprender a utilizar Cucumber\r\nPara que eu possa automatizar criterios de aceitacao",
  "id": "aprender-cucumber",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    },
    {
      "line": 3,
      "name": "@esse"
    }
  ]
});
formatter.before({
  "duration": 281700,
  "status": "passed"
});
formatter.before({
  "duration": 305900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Deve executar especificacao",
  "description": "",
  "id": "aprender-cucumber;deve-executar-especificacao",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 10,
  "name": "que criei o arquivo corretamente",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "executa-lo",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "a especificacao deve finalizar com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.queCrieiOArquivoCorretamente()"
});
formatter.result({
  "duration": 759500,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.executaLo()"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.aEspecificacaoDeveFinalizarComSucesso()"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.before({
  "duration": 251400,
  "status": "passed"
});
formatter.before({
  "duration": 63500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Deve incrementar contador",
  "description": "",
  "id": "aprender-cucumber;deve-incrementar-contador",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 15,
  "name": "que o valor do contador é 15",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "eu incrementar em 3",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "o valor do contador sera 18",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(int)"
});
formatter.result({
  "duration": 267400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "AprenderCucumberSteps.euIncrementarEm(int)"
});
formatter.result({
  "duration": 87700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 25
    }
  ],
  "location": "AprenderCucumberSteps.oValorDoContadorSera(int)"
});
formatter.result({
  "duration": 257200,
  "status": "passed"
});
formatter.before({
  "duration": 4154200,
  "status": "passed"
});
formatter.before({
  "duration": 7139900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Deve incrementar contador",
  "description": "",
  "id": "aprender-cucumber;deve-incrementar-contador",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 19,
      "name": "@tipo1"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "que o valor do contador é 123",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "eu incrementar em 35",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "o valor do contador sera 158",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 26
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(int)"
});
formatter.result({
  "duration": 119400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 18
    }
  ],
  "location": "AprenderCucumberSteps.euIncrementarEm(int)"
});
formatter.result({
  "duration": 94500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "158",
      "offset": 25
    }
  ],
  "location": "AprenderCucumberSteps.oValorDoContadorSera(int)"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.before({
  "duration": 408300,
  "status": "passed"
});
formatter.before({
  "duration": 139100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve calcular atraso na entrega",
  "description": "",
  "id": "aprender-cucumber;deve-calcular-atraso-na-entrega",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 25,
      "name": "@tipo2"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "que a entrega é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "a entrega atrasar em 2 dias",
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "a entrega será efetuada em 07/04/2018",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "05/04/2018",
      "offset": 20
    }
  ],
  "location": "AprenderCucumberSteps.queAEntregaÉDia(Date)"
});
formatter.result({
  "duration": 2103800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "dias",
      "offset": 23
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "duration": 441700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/04/2018",
      "offset": 27
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "duration": 754000,
  "status": "passed"
});
formatter.before({
  "duration": 893000,
  "status": "passed"
});
formatter.before({
  "duration": 161300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Deve calcular atraso na entrega da China",
  "description": "",
  "id": "aprender-cucumber;deve-calcular-atraso-na-entrega-da-china",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 31,
      "name": "@tipo1"
    },
    {
      "line": 31,
      "name": "@tipo2"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "que a entrega é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "a entrega atrasar em 2 meses",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "a entrega será efetuada em 05/06/2018",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "05/04/2018",
      "offset": 20
    }
  ],
  "location": "AprenderCucumberSteps.queAEntregaÉDia(Date)"
});
formatter.result({
  "duration": 536400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "meses",
      "offset": 23
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "duration": 336800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/06/2018",
      "offset": 27
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "duration": 402100,
  "status": "passed"
});
formatter.before({
  "duration": 226300,
  "status": "passed"
});
formatter.before({
  "duration": 37000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Deve criar steps genéricos para estes passos",
  "description": "",
  "id": "aprender-cucumber;deve-criar-steps-genéricos-para-estes-passos",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 38,
  "name": "que o ticket é AF345",
  "keyword": "Dado "
});
formatter.step({
  "line": 39,
  "name": "que o valor da passagem é R$ 230,45",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "que o nome do passageiro é \"Fulano da Silva\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "que o telefone do passageiro é 9999-9999",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "criar os steps",
  "keyword": "Quando "
});
formatter.step({
  "line": 43,
  "name": "o teste vai funcionar",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "AF345",
      "offset": 15
    }
  ],
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "duration": 93800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "230,45",
      "offset": 29
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "duration": 380200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulano da Silva",
      "offset": 28
    }
  ],
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 57400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999-9999",
      "offset": 31
    }
  ],
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 78000,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.criarOsSteps()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.oTesteVaiFuncionar()"
});
formatter.result({
  "duration": 347900,
  "status": "passed"
});
formatter.before({
  "duration": 52400,
  "status": "passed"
});
formatter.before({
  "duration": 25500,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Deve reaproveitar os steps \"Dado\" do cenário anterior",
  "description": "",
  "id": "aprender-cucumber;deve-reaproveitar-os-steps-\"dado\"-do-cenário-anterior",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 46,
  "name": "que o ticket é AB167",
  "keyword": "Dado "
});
formatter.step({
  "line": 47,
  "name": "que o ticket especial é AB167",
  "keyword": "Dado "
});
formatter.step({
  "line": 48,
  "name": "que o valor da passagem é R$ 1120,23",
  "keyword": "Dado "
});
formatter.step({
  "line": 49,
  "name": "que o nome do passageiro é \"Cicrano de Oliveira\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 50,
  "name": "que o telefone do passageiro é 9888-8888",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "AB167",
      "offset": 15
    }
  ],
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " especial",
      "offset": 12
    },
    {
      "val": "AB167",
      "offset": 24
    }
  ],
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "duration": 33145600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1120,23",
      "offset": 29
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "duration": 375400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cicrano de Oliveira",
      "offset": 28
    }
  ],
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9888-8888",
      "offset": 31
    }
  ],
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 55200,
  "status": "passed"
});
formatter.before({
  "duration": 397800,
  "status": "passed"
});
formatter.before({
  "duration": 42100,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Deve negar todos os steps \"Dado\" dos cenários anteriores",
  "description": "",
  "id": "aprender-cucumber;deve-negar-todos-os-steps-\"dado\"-dos-cenários-anteriores",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 51,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "que o ticket é CD123",
  "keyword": "Dado "
});
formatter.step({
  "line": 54,
  "name": "que o ticket é AG1234",
  "keyword": "Dado "
});
formatter.step({
  "line": 55,
  "name": "que o valor da passagem é R$ 1.1345,56",
  "keyword": "Dado "
});
formatter.step({
  "line": 56,
  "name": "que o nome do passageiro é \"Beltrano Souza Matos de Alcântara Azevedo\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 57,
  "name": "que o telefone do passageiro é 1234-5678",
  "keyword": "Dado "
});
formatter.step({
  "line": 58,
  "name": "que o telefone do passageiro é 999-2223",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "1.1345,56",
      "offset": 29
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});