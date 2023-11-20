import { findKthLargest } from "./kesimoMaiorElemento";

const nums: number[] = [3, 1, 4, 10, 2, 5, 8];
const k: number = 3;

const resultado: number = findKthLargest(nums, k);

console.log(`O ${k}-ésimo maior elemento é: ${resultado}`);