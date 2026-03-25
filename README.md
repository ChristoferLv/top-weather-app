# Weather App

Aplicação de previsão do tempo desenvolvida como parte da trilha JavaScript do [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app), com foco em **integração de APIs**, **manipulação do DOM** e **bundling com Webpack**.

## Objetivo do Projeto

O objetivo principal era praticar:
- Consumo de APIs externas (requisições HTTP)
- Tratamento de respostas assíncronas com Promises e async/await
- Processamento e exibição de dados dinâmicos no DOM
- Manipulação avançada de estilos baseada em dados
- Importação dinâmica de módulos
- Bundling e configuração com Webpack
- Tratamento de erros e estados de carregamento

## O que é?

Uma aplicação de previsão do tempo totalmente funcional contendo:
- Campo de busca para cidades no mundo inteiro
- Previsão de 15 dias com tabela detalhada
- Conversão de temperatura entre Celsius e Fahrenheit
- Exibição de ícones e condições climáticas
- Imagens relacionadas ao clima de hoje via Giphy
- Temas visuais dinâmicos (neve, chuva, nuvem, sol)
- Loader e tratamento de erros de busca

## Como usar

1. Execute `npm install` para instalar as dependências
2. Execute `npx webpack serve` para iniciar o servidor de desenvolvimento (a aplicação abrirá automaticamente em `http://localhost:8080/`)
3. Digite o nome de uma cidade no campo de busca
4. Clique em "Search" para buscar a previsão do tempo
5. Veja a tabela com os próximos 15 dias de previsão
6. Use o toggle °C/°F para alternar entre Celsius e Fahrenheit
7. A imagem e tema mudam de acordo com as condições climáticas

## Funcionalidades

- **Busca de Cidades**: Campo de entrada que busca previsões para qualquer cidade do mundo
- **Previsão de 15 Dias**: Tabela completa com data, condição, temperatura mín/máx e ícones
- **Conversão de Temperatura**: Toggle para alternar entre Celsius e Fahrenheit
- **Ícones Dinâmicos**: Ícones SVG descritivos para cada tipo de condição climática
- **Temas por Condição**: Cores e estilos mudam para neve, chuva, nuvem ou sol
- **Imagens Temáticas**: Busca automaticamente imagens relacionadas às condições atuais via Giphy
- **Loader e Feedback**: Mostra loading enquanto busca e exibe erros apropriadamente

## Padrões de Código

- **Promises e .then()**: Requisições assíncronas para APIs com encadeamento de métodos `.then()` para tratamento de respostas
- **Async/Await**: Sintaxe moderna para código assíncrono legível e mais fácil de debugar
- **Manipulação de DOM Dinâmica**: Criação e atualização de elementos baseados em dados
- **Importação Dinâmica**: Carregamento de módulos/ícones conforme necessário
- **Webpack Bundling**: Conforme o projeto requer, os arquivos são compilados e otimizados

## Tecnologias Utilizadas

- HTML5
- CSS3 
- JavaScript (Promises, async/await, módulos)
- Webpack (bundling e asset management)
- APIs externas:
  - Visual Crossing Weather API
  - Giphy API

## Visualização
<img width="1920" height="919" alt="image" src="https://github.com/user-attachments/assets/812114fd-6b55-46d8-a987-e172b8831b40" />


---

Projeto desenvolvido seguindo: [The Odin Project - Weather App](https://www.theodinproject.com/lessons/node-path-javascript-weather-app)

📍 **Repositório principal com todos os projetos**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
