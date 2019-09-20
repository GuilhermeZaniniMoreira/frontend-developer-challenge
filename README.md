## `cd app`

Instalação das dependências:
## `yarn start`
ou
## `npm start`

Iniciar:
## `yarn start`
ou
## `npm start`

[http://localhost:3000](http://localhost:3000)

O projeto foi desenvolvido com ReactJS, utlizando Hooks.
Para a atualização da lista de produtos foi utilizado o axios para a requisição
O axios foi importado em app/services/api.js
No App.js foi importado o axios com a baseURL da API, assim, precisando apenas do número da página para a requisição na função useEffect.

A atualização da lista de produtos é realizada no botão 'Ainda mais produtos aqui!', este chama a função handlePage, a qual irá alterar o estado currentPage, incrementando o valor em 1.
Toda vez que esté valor é alterado a função useEffect será acionada, assim, alterando a lista de produtos.

A validação de e-mail do newsletter é realziada através da dependência validator.

HEROKU:
https://cryptic-atoll-49324.herokuapp.com/
