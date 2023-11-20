import { kClosest } from "./pontoKMaisProxOrigem";

// Exemplos de uso:
const example1 = kClosest([[1, 3], [-2, 2]], 1);
console.log(example1); // Output: [[-2, 2]]

const example2 = kClosest([[3, 3], [5, -1], [-2, 4]], 2);
console.log(example2); // Output: [[3, 3], [-2, 4]]