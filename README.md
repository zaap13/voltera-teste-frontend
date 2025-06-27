# SvelteKit Test App

Bem vindo! Esta é uma entediante aplicação de teste.

O que deverá ser feito: uma aplicação web que consulta a API gratuita em [agify.io](https://api.agify.io) e retorna o resultado. Esta API toma um nome próprio e devolve uma estimativa altamente precisa da idade de uma pessoa com o dado nome. Veja a [documentação da API](https://agify.io/documentation) para maiores detalhes. Você deverá construir basicamente um _front end_ diferente para esta simples API.

## Requisitos

- Deve haver um input de texto onde o usuário digita um nome.
- Ao digitar o nome, a pesquisa deve ser feita e o resultado exibido na tela.
- O usuário não precisa apertar Enter ou pressionar nenhum botão: basta esperar depois que digitou para receber o resultado. (Dica: _debounce_ de 500-1000ms.)
- Você **deve** usar SvelteKit e Svelte 4 ou 5.
- Você **deve** usar a função `load()` do SvelteKit para requisitar a API. Pode ser um `load()` no servidor ou universal, tanto faz, contanto que a requisição aconteça num `load()`.
- Você **deve** garantir que a URL seja modificada com o nome digitado: por exemplo, usando uma _querystring_. Essa URL deve poder ser copiada e colada e refletir o mesmo resultado da chamada à API. Um exemplo de URL poderia ser `http://localhost:5173/?name=Jebediah`.
- Use sua criatividade no CSS (eu sei, eu sei... é só um input de texto e umas linhas de texto com o resultado, difícil ser criativo aqui, mas tente). Use **apenas CSS puro** feito por você: nada de LESS/SASS/Stylus/Tailwind/Bootstrap/Normalize.css e afins.

Há um _rate limit_ de 100 requisições por dia nesta API. Cuidado para não esgotar enquanto testa!

## FAQ

- posso usar Typescript? pode (faça as modificações necessárias).
- posso usar JS Doc: pode (faça as modificações necessárias).
- posso usar fontes (typefaces) do Google Fonts? pode.
- tab ou espaços? os arquivos default do SvelteKit são indentandos com tab, mas nos arquivos feitos por você tanto faz, basta ser consistente.
- precisa se preocupar com tratamento de erros (404 e afins)? não.
- precisa lintar os arquivos ou aderir a algum padrão? não, basta ser consistente.
- precisa ter algum teste automatizado? não.
- precisa se preocupar com desempenho de carregamento da página? não.
- precisa se preocupar com localização ([https://agify.io/documentation#localization](https://agify.io/documentation#localization))? não.
