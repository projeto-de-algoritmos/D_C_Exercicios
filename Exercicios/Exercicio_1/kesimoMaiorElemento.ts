const mediana = (arr: number[]): number => {
    const arrOrdenado = arr.slice().sort((a, b) => a - b);
    const meio = Math.floor(arrOrdenado.length / 2);
    return arrOrdenado.length % 2 === 0
        ? (arrOrdenado[meio - 1] + arrOrdenado[meio]) / 2
        : arrOrdenado[meio];
};

const dividirArray = (arr: number[], tamanho: number): number[][] => {
    return Array.from({ length: Math.ceil(arr.length / tamanho) }, (_, i) =>
        arr.slice(i * tamanho, i * tamanho + tamanho)
    );
};

// Função para encontrar a mediana das medianas
const medianaDasMedianas = (arr: number[]): number => {
    const partes = dividirArray(arr, 5);
    const medianas = partes.map(mediana);
    return mediana(medianas);
};

// Função principal para encontrar o k-ésimo maior elemento
export const findKthLargest = (nums: number[], k: number): number => {
    if (nums.length <= 5) {
        // Se o array for pequeno o suficiente, basta ordená-lo
        return nums.sort((a, b) => b - a)[k - 1];
    }

    const pivô = medianaDasMedianas(nums);
    const menores = nums.filter((num) => num < pivô);
    const iguais = nums.filter((num) => num === pivô);
    const maiores = nums.filter((num) => num > pivô);

    if (k <= maiores.length) {
        return findKthLargest(maiores, k);
    } else if (k <= maiores.length + iguais.length) {
        return iguais[0];
    } else {
        return findKthLargest(menores, k - maiores.length - iguais.length);
    }
};
