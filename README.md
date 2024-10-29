# :bird: Tweteroo Backend

![Badge Finalizado](https://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=success&style=for-the-badge)

# Índice
- [Sobre](#Sobre)
- [Rotas](#Rotas)
    - [Cadastro](#Cadastro)
    - [Postar tweet](#Postar-tweet)
    - [Listar tweets](#Listar-tweets)
    - [Listar tweets de um usuário](#Listar-tweets-de-um-usuário)
- [Como rodar em desenvolvimento](#Como-rodar-em-desenvolvimento)
- [Créditos](#Créditos)

<br/>

# Sobre
Tweteroo Backend é a API responsável por registrar e validar os dados fornecido pelo frontend da aplicação.
<br />
**Nota:** esse projeto é uma Prática de POO.

<br/>

# Rotas

URL base: `http://localhost:5001`

<br/>

## Cadastro
- Rota: `/sign-up`
- Método: `POST`
- Exemplo de Body:

  ```json
  {
    "username": "bobesponja",
    "avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
  }
  ```

<br/>

## Postar tweet
- Rota: `/tweets`
- Método: `POST`
- Exemplo de Body:

  ```json
  {
    "username": "bobesponja",
    "tweet": "eu amo o hub"
  }
  ```

<br/>

## Listar tweets
- Rota: `/tweets/?page=`
- Método: `GET`
- Exemplo de Resposta:

  ```json
  [
    {
    	"id": 1,
          "username": "bobesponja",
    	"avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    	"tweet": "eu amo o hub"
    }
  ]
  ```

<br/>

## Listar tweets de um usuário
- Rota: `/tweets/:username`
- Método: `GET`
- Exemplo de Resposta:

  ```json
  [
    {
          "id": 1,
    	"username": "bobesponja",
    	"avatar": "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    	"tweet": "eu amo o hub"
    }
  ]
  ```

<br/>

# Como rodar em desenvolvimento
<br/>

1. Clone esse repositório:
>```bash
> git clone https://github.com/anatfernandes/tweteroo-poo-back.git
>```

2. Instale as dependências:
>```bash
> npm install
>```

3. Crie um banco de dados chamado "tweteroo_poo"

4. Configure as variáveis da conexão no arquivo [database](https://github.com/anatfernandes/tweteroo-poo-back/blob/main/src/database/database.js)

5. Rode o comando na raiz do projeto para criar as tabelas do banco de dados:
>```bash
> npm run dump
>```

6. Inicie o projeto:
>```bash
> npm run dev
>```

7. Instale o [Frontend](https://github.com/anatfernandes/tweteroo-poo-front) da aplicação ou divirta-se nas rotas :)

<br/>

# Créditos
- Código base do projeto [tweteroo-back](https://github.com/T07-Driven/tweteroo-back) de [codethi](https://github.com/codethi)
