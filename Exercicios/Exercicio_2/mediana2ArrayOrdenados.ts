export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const tamanhoTotal = nums1.length + nums2.length;

    if (tamanhoTotal % 2 === 1) {
        // Se o tamanho total for ímpar, retorna o valor do meio
        return encontrarElementoK(nums1, nums2, Math.floor(tamanhoTotal / 2) + 1);
    } else {
        // Se o tamanho total for par, retorna a média dos dois valores do meio
        const esquerda = encontrarElementoK(nums1, nums2, tamanhoTotal / 2);
        const direita = encontrarElementoK(nums1, nums2, tamanhoTotal / 2 + 1);
        return (esquerda + direita) / 2;
    }
}

function encontrarElementoK(nums1: number[], nums2: number[], k: number): number {
    const len1 = nums1.length;
    const len2 = nums2.length;

    if (len1 > len2) {
        // Garantimos que nums1 seja sempre o array menor
        return encontrarElementoK(nums2, nums1, k);
    }

    if (len1 === 0) {
        // Se o primeiro array estiver vazio, retorna o k-ésimo elemento do segundo array
        return nums2[k - 1];
    }

    if (k === 1) {
        // Retorna o menor elemento entre os dois arrays
        return Math.min(nums1[0], nums2[0]);
    }

    const indice1 = Math.min(Math.floor(k / 2), len1);
    const indice2 = k - indice1;

    if (nums1[indice1 - 1] < nums2[indice2 - 1]) {
        // Descarta a parte inferior de nums1 e continua procurando em nums2
        return encontrarElementoK(nums1.slice(indice1), nums2, k - indice1);
    } else {
        // Descarta a parte inferior de nums2 e continua procurando em nums1
        return encontrarElementoK(nums1, nums2.slice(indice2), k - indice2);
    }
}


