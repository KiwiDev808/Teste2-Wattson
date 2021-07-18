## 💻 Projeto

O Projeto é parte de um desafio técnico do processo seletivo da Smarkio , onde através da API IBM Watson Text to Speech da IBM, pude converter textos em mensagens de audio.

### 💻 Deploy

O deploy de aplicação pode ser consultado nesse <a href="https://shielded-cove-50870.herokuapp.com/" target="_blank">Link</a>

## ⛏ Tecnologias

### Frontend
- [React](https://pt-br.reactjs.org/)
- [SASS](https://sass-lang.com/)

### Backend
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [IBM Watson](https://www.ibm.com/br-pt/watson)
- [MySQL](https://www.mysql.com/)

### 📚 Dependências

- [x] Knex
- [x] Express
- [x] IBM Watson
- [x] UUID
- [x] mySQL
- [x] Dotenv
- [x] CORS

## ✔ Implementações

- [x] Conversão de texto para voz
- [x] ReadME
- [x] Testes Unitários
- [x] Testes Integração


## 🚀 Instalação

### Configuração do .env
Crie na raiz do projeto um arquivo com o nome .env, nele você passara suas credenciais do serviço Text To Speech e do seu banco de dados, altere os campos, DB_USER, DB_PASS, DB_HOST, de acordo com suas credências e configurações do mysql, e os campos API_KEY e SERVICE_URL de acordo com as credenciais do Text to Speech

```env

  DB_SCHEMA='Teste'
  DB_USER=root
  DB_PASS='123456'
  DB_HOST='127.0.0.1'
  DB_PORT = 3306
  API_KEY = api_key do IBM Wattson
  SERVICE_URL = service_url do IBM Wattson

```

### Procedimentos Instalação

```bash
# Clone o repositório
$ git clone https://github.com/KiwiDev808/Teste2-Wattson

# Entre na pasta do projeto
$ cd Teste2-Wattson

# Instale as dependências
$ yarn install OR npm install

# Se ainda não criou, crie um arquivo .env e preencha com as informações do seu banco de dados e suas chaves da API
# Exemplo de preenchimento em example.env
$ touch .env

# Rode as migrations para criar as tabelas no banco de dados
$ npm run migrations
# or
$ yarn migrations

# Execute a aplicação
$ npm run dev
# or
$ yarn dev

```

<blockquote>
    Feito por Lucas Bacelar 🪐
</blockquote>
