# Live search usando JSON

<img src="https://github.com/rafaelscariot/live-search/blob/master/screenshot.png" />

## Requisitos

É necessário ter apenas o Docker instalado e executando na sua máquina.

## Executando a aplicação

No diretório raiz, onde encontra-se o arquivo **docker-compose.yml**, execute:

```bash
$ docker-compose up -d --build
```

Agora abra o arquivo **client/index.html** em seu navegador de preferência.

## Testes

Para executar os testes é necessário ter a plataforma Node.js instalada em sua máquina.
Com isso, execute

```bash
$ npm i && npm test
```

no diretório raiz **server**.
