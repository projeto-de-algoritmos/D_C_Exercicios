# Contagem de Inversões

O problema de contagem de inversões refere-se ao número de pares (i, j) em uma sequência onde i < j, mas a[i] > a[j]. Em outras palavras, quantas inversões são necessárias para transformar a sequência ordenada em uma sequência não ordenada.

O algoritmo de contagem de inversões usando a abordagem de dividir e conquistar pode ser implementado de forma eficiente. A ideia básica é dividir o problema em subproblemas menores, resolver esses subproblemas de forma recursiva e, em seguida, combinar as soluções para obter a contagem total de inversões.

## Passos do Algoritmo:

1. **Divisão:**
   - Divida a sequência de entrada ao meio, criando duas sub-sequências menores.

2. **Conquista:**
   - Recursivamente, conte as inversões em cada sub-sequência.

3. **Combinação:**
   - Combine as sub-sequências ordenando-as e, ao mesmo tempo, conte as inversões entre os elementos das sub-sequências.

4. **Contagem Total:**
   - Some as contagens de inversões obtidas nas etapas anteriores para obter o total de inversões na sequência original.
