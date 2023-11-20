# Mediana das Medianas

O algoritmo da Mediana das Medianas é uma técnica eficaz para calcular a mediana de um conjunto de dados, especialmente quando existem outliers que podem impactar adversamente a estimativa. Essa abordagem utiliza a estratégia de "dividir e conquistar" para lidar com o problema de forma mais robusta.

## Visão Geral do Algoritmo

1. **Divisão Inicial:**
   - Divide o conjunto de dados em grupos menores de tamanho fixo (por exemplo, grupos de 5 elementos).

2. **Cálculo da Mediana Local:**
   - Calcula a mediana de cada grupo.

3. **Repetição:**
   - Repete os passos de divisão e cálculo até que reste apenas um grupo ou um número pequeno de grupos.

4. **Mediana das Medianas:**
   - Calcula a mediana das medianas obtidas no passo anterior.

## Vantagem

- **Robustez a Valores atípicos:**
  - A estratégia de dividir o conjunto de dados em grupos menores proporciona uma resistência a valores atípicos, evitando que influenciem desproporcionalmente a estimativa da mediana.
