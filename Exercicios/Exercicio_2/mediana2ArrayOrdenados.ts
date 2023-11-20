// Função principal para encontrar a mediana de dois arrays ordenados
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Função para mesclar dois arrays ordenados e encontrar a mediana
    const mesclarEMediana = (arr1: number[], arr2: number[]): number => {
        const arrayMesclado = mesclarArrays(arr1, arr2);
        const comprimentoMesclado = arrayMesclado.length;

        if (comprimentoMesclado % 2 === 0) {
            const meioDireita = comprimentoMesclado / 2;
            const meioEsquerda = meioDireita - 1;
            return (arrayMesclado[meioEsquerda] + arrayMesclado[meioDireita]) / 2;
        } else {
            const meio = Math.floor(comprimentoMesclado / 2);
            return arrayMesclado[meio];
        }
    };

    // Função para mesclar dois arrays ordenados
    const mesclarArrays = (arr1: number[], arr2: number[]): number[] => {
        const mesclado:number[] = [];
        let i = 0;
        let j = 0;

        // Comparação de elementos dos dois arrays
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                mesclado.push(arr1[i]);
                i++;
            } else {
                mesclado.push(arr2[j]);
                j++;
            }
        }

        // Adiciona elementos restantes de arr1
        while (i < arr1.length) {
            mesclado.push(arr1[i]);
            i++;
        }

        // Adiciona elementos restantes de arr2
        while (j < arr2.length) {
            mesclado.push(arr2[j]);
            j++;
        }

        return mesclado;
    };

    // Função recursiva para encontrar a mediana
    const encontrarMedianaRecursivamente = (
        arr1: number[],
        inicio1: number,
        fim1: number,
        arr2: number[],
        inicio2: number,
        fim2: number
    ): number => {
        // Caso base para arrays pequenos
        if (fim1 - inicio1 <= 1 || fim2 - inicio2 <= 1) {
            const mesclado = mesclarArrays(
                arr1.slice(inicio1, fim1 + 1),
                arr2.slice(inicio2, fim2 + 1)
            );
            return mesclarEMediana(arr1.slice(inicio1, fim1 + 1), arr2.slice(inicio2, fim2 + 1));
        }

        // Encontra as medianas dos arrays
        const mediana1 = encontrarMediana(arr1, inicio1, fim1);
        const mediana2 = encontrarMediana(arr2, inicio2, fim2);

        // Compara as medianas
        if (mediana1 === mediana2) {
            return mediana1;
        } else if (mediana1 < mediana2) {
            const meio1 = inicio1 + Math.floor((fim1 - inicio1) / 2);
            const meio2 = inicio2 + Math.floor((fim2 - inicio2) / 2);
            return encontrarMedianaRecursivamente(arr1, meio1, fim1, arr2, inicio2, meio2);
        } else {
            const meio1 = inicio1 + Math.floor((fim1 - inicio1) / 2);
            const meio2 = inicio2 + Math.floor((fim2 - inicio2) / 2);
            return encontrarMedianaRecursivamente(arr1, inicio1, meio1, arr2, meio2, fim2);
        }
    };

    // Função para encontrar a mediana de um array
    const encontrarMediana = (arr: number[], inicio: number, fim: number): number => {
        const n = fim - inicio + 1;
        const meio = inicio + Math.floor(n / 2);

        if (n % 2 === 0) {
            const meioEsquerda = meio - 1;
            return (arr[meioEsquerda] + arr[meio]) / 2;
        } else {
            return arr[meio];
        }
    };

    // Verifica se o comprimento total é par ou ímpar
    const comprimentoTotal = nums1.length + nums2.length;
    const éPar = comprimentoTotal % 2 === 0;

    // Chama a função recursiva para encontrar a mediana
    if (éPar) {
        return encontrarMedianaRecursivamente(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1);
    } else {
        const meio = Math.floor(comprimentoTotal / 2);
        return encontrarMedianaRecursivamente(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1);
    }
}
