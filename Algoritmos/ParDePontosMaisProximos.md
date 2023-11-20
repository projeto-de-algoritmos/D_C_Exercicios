# Algoritmo de Dividir e Conquistar: Par de Pontos Mais Próximos

O problema do "par de pontos mais próximos" envolve encontrar a distância mínima entre dois pontos em um conjunto de pontos bidimensionais. O algoritmo de dividir e conquistar é uma abordagem eficiente para resolver esse problema.

## Passos do Algoritmo

1. **Ordenação por Coordenada x:**
   - Inicialmente, ordenamos os pontos de entrada com base em suas coordenadas x. Isso facilita a divisão subsequente do conjunto de pontos.

2. **Divisão:**
   - Dividimos o conjunto ordenado ao meio, criando duas partes: a esquerda e a direita.

3. **Recursão:**
   - Chamamos recursivamente o algoritmo nas duas metades criadas, encontrando assim os pares de pontos mais próximos em cada subconjunto.

4. **Encontrar o Par Mais Próximo na Faixa Central:**
   - Após encontrar os pares mais próximos nas duas metades, determinamos uma faixa central onde os pares de pontos podem estar localizados. A largura dessa faixa é definida pela menor distância encontrada nas duas metades.

5. **Verificação na Faixa Central:**
   - Examinamos apenas os pontos na faixa central para encontrar um par de pontos mais próximos que poderia ter sido perdido nas duas metades anteriores.

6. **Resultado Final:**
   - O par de pontos mais próximos é o mínimo entre o par mais próximo da metade esquerda, o par mais próximo da metade direita e o par mais próximo da faixa central.
