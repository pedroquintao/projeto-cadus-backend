# Projeto Genus Backend

Este é o backend do projeto Genus, desenvolvido para gerenciar as requisições entre o projeto frontend do Genus e o banco de dados MongoDB Atlas. O sistema é responsável pelo cadastro de usuários no banco de dados e pela apresentação da lista de usuários cadastrados. O servidor do projeto é executado por padrão na porta localhost:8080.

## Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript do lado do servidor.
[![Node.js](https://img.shields.io/badge/Node.js-20.11.0-green)](https://nodejs.org/)
- Cors: Middleware Node.js para habilitar o acesso de recursos de origens diferentes.
[![Cors](https://img.shields.io/badge/Cors-2.8.5-blue)](https://www.npmjs.com/package/cors)
- Dotenv: Carrega variáveis de ambiente de um arquivo .env para process.env.
[![Dotenv](https://img.shields.io/badge/Dotenv-16.4.5-yellow)](https://www.npmjs.com/package/dotenv)
- Express.js: Framework Node.js para construção de aplicativos web e APIs.
[![Express.js](https://img.shields.io/badge/Express.js-4.19.2-lightgrey)](https://expressjs.com/)
- Nodemon: Utilitário que monitora alterações no código fonte e reinicia automaticamente o servidor.
- Mongoose: Biblioteca MongoDB ODM (Object-Document Mapping) para modelagem de dados.

## Como Executar o Projeto

1. Clone este repositório:
```
git clone https://github.com/pedroquintao/projeto-genus-backend.git
```

2. Instale o NVM (Node Version Manager) (caso não tenha instalado):
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

3. Instale a versão do Node.JS especificada no arquivo .nvmrc:
```
nvm install
```
> Observação: Se você já possuir instalada a versão do Node.JS igual a versão do projeto, quando executar o nvm install a versão atual do seu Node.JS apenas será alterada para a versão que está incluída no arquivo .nvmrc.

4. Instale as dependências utilizando npm ou yarn:
```
npm install
```
  ou
```
yarn install
```

5. Crie um arquivo `.env` na raiz do projeto e adicione a seguinte linha, substituindo `<sua-url-de-conexao-com-o-banco-de-dados>` pela URL de conexão do seu banco de dados MongoDB:
```
DB_CONNECTION_STRING=<sua-url-de-conexao-com-o-banco-de-dados>
```
> Observação: Por motivos de segurança, a URL de conexão com o banco de dados está oculta no arquivo `.env`, que foi adicionado ao `.gitignore` para não ser versionado no repositório público. No fim do README existe maiores informações a respeito disso.

6. Execute o projeto:
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


## Uso do arquivo .nvmrc

Este projeto utiliza o arquivo `.nvmrc` para especificar a versão do Node.js que deve ser utilizada. Certifique-se de ter o NVM (Node Version Manager) instalado no seu sistema.

Para ativar automaticamente a versão do Node.js especificada no arquivo `.nvmrc`, basta navegar até o diretório do projeto e executar o comando `nvm use`. Por exemplo:

