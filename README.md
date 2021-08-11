<h1 align="center">
<a href="#" alt="site do ecoleta"> Eduick </a>
</h1>

<h3 align="center">
    Desafio para desenvolvedor front-end para EduSynch
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/odailsonsilva/Appetit?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/odailsonsilva/Appetit">

  <!-- <a href="https://www.twitter.com/tgmarinho/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Ftgmarinho%2FREADME-ecoleta">
  </a> -->

  <a href="https://github.com/tgmarinho/README-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/odailsonsilva/Appetit">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

</p>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-Páginas-a-serem-construídas)
   * [Layout](#-layout)
     * [Web](#web)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
   * [Tecnologias](#-tecnologias)
     * [WebSite](#user-content-website--react----typescript)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

Desenvolvido com NextJs e Typescript. Contém uma fake api, MirajeJs. Focado nas melhores práticas de programação, visando a manutenibilidade, teste e documentação.



---

## ⚙️ Páginas a serem construídas

- [x] LandingPage;
  - [x] Implementar ação visual de check dos itens: "I'm a teacher" e "I'm a student";
  - [x] Arquivo modal-menu deverá ser resultado do clique no menu hamburguer (responsive mode);
  - [x] Ao clicar em "Get Started" mostrar modal de login;
  - [x] Usabilidade de formulário e autenticação (React Hook Form, Yup e SSR)
  - [x] Login social com GitHub (NextAuth)
- [x] Dashboard (Rota privada);
  - [x] Adicionar requisição para trazer lista de cursos (MirajeJs);
  - [x] Implementar scroll infinito ou paginação;
  - [x] Na versão mobile implementar ação de dropdown (onde aparece change to teacher mode);
---

## 🎨 Layout

O layout da aplicação está disponível no Figma: https://www.figma.com/file/vxbTpBRViZn0dY5EnjlVMZ/Eduick

<a href="https://www.figma.com/file/XTbAE7DPmkrAI0b5hmzB64Vd/Appetit-Web?node-id=1%3A3">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### Print das telas desenvolvidas

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">

  ### LandingPage

  <img alt="login" title="#login" src="./src/print_pages/print-1.PNG" width="1200px">

  #

  ### MenuBurguer

  <img alt="lista de pedidos" title="#orders-list" src="./src/print_pages/print-2.PNG" width="1200px">

  #

  ### Login/Login Social

  <img alt="Detalhes de pedidos" title="#order-details" src="./src/print_pages/print-3.PNG" width="1200px">
  <img alt="Detalhes de pedidos" title="#order-details" src="./src/print_pages/print-3.1.PNG" width="1200px">

  #

  ### Dashboard

  <img alt="Novo pedido" title="#new-order" src="./src/print_pages/print-4.PNG" width="1200px">

  #


  ### Dropdown

  <img alt="Informações do pedido" title="#user-order" src="./src/print_pages/print-6.PNG" width="1200px">

  #

  ### Modal Profile

  <img alt="Feedback do Pedido" title="#feedback-order" src="./src/print_pages/print-5.PNG" width="1200px">

</p>

---

## 🚀 Como executar o projeto


#### 🧭 Rodando a aplicação

```bash

# Clone este repositório
$ git clone https://github.com/odailsonsilva/eduick-next.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd eduick-next

# Verifique se esta na branch 'dev', caso nao esteja faça o comando abaixo
$ git pull origin dev

$ git checkout dev

# Instalando dependências
$ yarn

#  ou

$ npm install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

#   ou

$ npm run dev

## OBS: CASO QUEIRA TESTAR A PARTE DE LOGIN SOCIAL, PRECISARÁ FAZER A CONFIGURAÇÃO ABAIXO
## CRIAR UM ARQUVIO COM NOVO .ENV.LOCAL E DENTRO COLOCAR CLIENT_ID E O SECRET
## EXISTE UM ARQUIVO NA RAIZ DO PROJETO CHAMADO .ENV.LOCAL.EXAMPLE, USE-O COMO BASE PARA CRIAR SEU ARQUIVO
## SECRET E CLIENT_ID É DO SEU GITHUB

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

## OUTROS COMANDOS

# STORYBOOK
$ yarn storybook

# Testes
$ yarn test

# Automatização para criação de componentes
$ yarn generate [nome]

```

---

## 🛠 Tecnologias

Principais dependências usadas no projeto:

#### **Website**  ([Next](https://nextjs.org/)  +  [Typescript](https://www.typescriptlang.org/))

-   **[StoryBook](https://storybook.js.org/)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Styled Components](https://github.com/styled-components/styled-components)**
-   **[Jest](https://jestjs.io/pt-BR/)**
-   **[Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**
-   **[Prettier](https://prettier.io/)**
-   **[Eslint](https://eslint.org/)**
-   **[Plop](https://plopjs.com/)**


> Veja o arquivo  [package.json](https://github.com/odailsonsilva/eduick-next/blob/dev/package.json)


#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/file/vxbTpBRViZn0dY5EnjlVMZ/Eduick)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**





## 🦸 Desenvolvedor

<a href="">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/66921945?s=400&u=97e9042a8c1e65eada3e83be1760c2ace6f8c76c&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Odailson Silva</b></sub>
 <br />

[![Instagram Badge](https://img.shields.io/badge/-@odailsonsilva__-993399?style=flat-square&labelColor=993399&logo=instagram&logoColor=white&link=https://www.instagram.com/odailsonsilva_/)](https://www.instagram.com/odailsonsilva_/)
[![Linkedin Badge](https://img.shields.io/badge/-Odailson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/odailson-silva-2564051a0/)](https://www.linkedin.com/in/odailson-silva-2564051a0/)
[![Gmail Badge](https://img.shields.io/badge/-odafreelancerti@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:odafreelancerti@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Odailson 👋🏽 [Entre em contato!](https://www.linkedin.com/in/tgmarinho/)
