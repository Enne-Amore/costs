
![Logo Da Costs](https://github.com/matheusbattisti/curso_react_yt/blob/d36606ba5a99d655cc901698337f1ad432da60c6/src/img/costs_logo.png)


# 💲 Costs - Front End

Projeto desenvolvido com o youtuber [Matheus Battisti](https://www.youtube.com/@MatheusBattisti) em seu curso de [React JS](https://youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&si=mP84Itow-4nrXjpK) gratuito no youtube. Utiliza-se a criação e o gerenciamento de projetos como conteúdo principal do site.


## 🪄 Funcionalidades

 - Criar e gerenciar projetos
 - Validação de campos de preenchimento
 - Menu horizontal de navegação por páginas


## 🖱️ Plataformas Usadas

- [GitHub](https://about.github.com/)
- [Visual Studio Code](https://code.visualstudio.com/)


## 🚀 Tecnologias Utilizadas

- React JS
- React Icons
- React Router Dom
- Json Server
- UUID


## 💾 Instalação Dos Recursos Necessários

Dependências básicas do React Next

```bash
  npm i
``` 

React Icons

```bash
  npm i react-icons
```

React Router Dom

```bash
  npm i react-router-dom
```

Json Server

```bash
  npm i json-server
```

UUID

```bash
  npm i uuid
```

## 💻 Rodando Localmente

Clone o projeto

```bash
  git clone https://github.com/Enne-Amore/costs.git
```

Entre no diretório do projeto

```bash
  cd costs
```

Instale as dependências básicas

```bash
  npm i
```

Rode os códigos do site utilizando o seguinte comando

```bash
  npm start
```

Rode a API do site utilizando o seguinte comando

```bash
  npm run backend
```

Entre em um navegador e digite a seguinte URL no campo de pesquisa

```bash
  http://localhost:5000
```
Ou [clique aqui](http://localhost:5000) por mais praticidade para entrar na primeira página do site


## 📁 Documentação Da API

#### Base da URL

```http
  http://localhost:5000
```

#### Posta todos os dados dos projetos

```http
  POST ${baseUrl}/projects/
```

#### Retorna todos os dados das categorias

```http
  GET ${baseUrl}/categories/
```

#### Retorna todos os dados dos projetos

```http
  GET ${baseUrl}/projects/
```

#### Deleta um projeto específico

```http
  DELETE ${baseUrl}/projects/${id}
```

| Parâmetro   | Tipo       | Descrição                                      |
| :---------- | :--------- | :--------------------------------------------- |
| `id`        | `any`      | **Obrigatório**. O ID do projeto que você quer |

#### Atualiza alterações de um projeto específico

```http
  PATCH ${baseUrl}/projects/${project.id}/
```

| Parâmetro     | Tipo       | Descrição                                      |
| :------------ | :--------- | :--------------------------------------------- |
| `project.id`  | `any`      | **Obrigatório**. O ID do projeto que você quer |

#### Atualiza a remoção de um serviço em um projeto

```http
  PATCH ${baseUrl}/projects/${projectUpdated.id}
```

| Parâmetro           | Tipo       | Descrição                                                 |
| :------------------ | :--------- | :-------------------------------------------------------- |
| `projectUpdated.id` | `any`      | **Obrigatório**. O ID do projeto atualizado que você quer |


## 🌈 Documentação de cores

| Cor                | Código Hexadecimal                                               |
| ------------------ | ---------------------------------------------------------------- |
| Cinza Clara        | ![#EFEFEF](https://via.placeholder.com/10/EFEFEF?text=+) #EFEFEF |
| Cinza Escura       | ![#7B7B7B](https://via.placeholder.com/10/7B7B7B?text=+) #7B7B7B |
| Cinza Escura 2     | ![#222222](https://via.placeholder.com/10/222222?text=+) #222222 |
| Amarela            | ![#FFBB33](https://via.placeholder.com/10/FFBB33?text=+) #FFBB33 |


## 🌟 Referências De Uso

 - [React Icons](https://react-icons.github.io/react-icons/)
 - [React Router Dom](https://reactrouter.com/en/main)
 - [Json Server](https://www.npmjs.com/package/json-server)
 - [UUID](https://www.npmjs.com/package/uuid)
 - [Create React App](https://github.com/facebook/create-react-app)
 - [Running Tests](https://facebook.github.io/create-react-app/docs/running-tests)
 - [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
 - [Documentação Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
 - [Documentação React](https://reactjs.org/)
 - [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
 - [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
 - [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
 -[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
 - [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
 - [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
