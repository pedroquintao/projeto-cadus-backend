# Projeto Genus Backend

Este é o backend do projeto Genus, desenvolvido para gerenciar as requisições entre o projeto frontend do Genus e o banco de dados MongoDB Atlas. O sistema é responsável pelo cadastro de usuários no banco de dados e pela apresentação da lista de usuários cadastrados. O servidor do projeto é executado por padrão na porta localhost:8080.

## Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript do lado do servidor.
  - Versão: 20.11.0
- Cors: Middleware Node.js para habilitar o acesso de recursos de origens diferentes.
  - Versão: 2.8.5
- Dotenv: Carrega variáveis de ambiente de um arquivo .env para process.env.
  - Versão: 16.4.5
- Express.js: Framework Node.js para construção de aplicativos web e APIs.
  - Versão: 4.19.2
- Nodemon: Utilitário que monitora alterações no código fonte e reinicia automaticamente o servidor.
  - Versão: 3.1.0
- Mongoose: Biblioteca MongoDB ODM (Object-Document Mapping) para modelagem de dados.
  - Versão: 6.6.1

## Como Executar o Projeto

1. Clone este repositório:

```
git clone https://github.com/pedroquintao/projeto-genus-backend.git
```

2. Instale as dependências utilizando npm ou yarn:

```
npm install
```
  ou
```
yarn install
```

3. Execute o projeto:

```
npm start
```
  ou
```
yarn start
```

3. Crie um arquivo `.env` na raiz do projeto e adicione a seguinte linha, substituindo `<sua-url-de-conexao-com-o-banco-de-dados>` pela URL de conexão do seu banco de dados MongoDB:
```
DB_CONNECTION_STRING=<sua-url-de-conexao-com-o-banco-de-dados>
```

> Observação: Por motivos de segurança, a URL de conexão com o banco de dados está oculta no arquivo `.env`, que foi adicionado ao `.gitignore` para não ser versionado no repositório público. No fim do README existe maiores informações a respeito disso.

4. Execute o projeto:
```
npm run dev
```
  ou
```
yarn dev
```
O servidor será iniciado na porta localhost:8080.

## Acesso ao Projeto Frontend

O código fonte do projeto frontend Genus está disponível em [https://github.com/pedroquintao/projeto-genus-frontend.git](https://github.com/pedroquintao/projeto-genus-frontend.git).

## Contato

Para obter a URL de conexão com o banco de dados MongoDB Atlas que utilizei ou para qualquer dúvida relacionada ao projeto, entre em contato pelo e-mail: pedro.h.quintao@hotmail.com.
