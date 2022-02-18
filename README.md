# Live search usando JSON

<img src="https://github.com/rafaelscariot/live-search/blob/master/screenshot.png" />

## Tecnologias utilizadas

- Docker: plataforma de virtualização para executar a aplicação em uma máquina qualquer de forma com que seja desnecessária a preocupação com dependências e requisitos.
- Node.js: plataforma JavaScript para executar um servidor http utilizando o framework Express para servir o client side da aplicação com os dados do JSON.
- TypeScript: linguagem de programação que possui uma ótima integração com a IDE Visual Studio Code, proporcionando um ótimo ambiente de desenvolvimento.
- Jest: dependência utilizada para escrever e executar os testes unitários.
- Husky e eslint: dependências para promover a estilização do código, fazendo com que todo o projeto possua um padrão de código legível e limpo. 

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
