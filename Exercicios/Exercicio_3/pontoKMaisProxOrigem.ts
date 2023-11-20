type Point = [number, number];

function euclideanDistance(point1: Point, point2: Point): number {
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function partition(points: Point[], start: number, end: number): number {
  const pivot = euclideanDistance(points[end], [0, 0]);
  let i = start;

  for (let j = start; j < end; j++) {
    if (euclideanDistance(points[j], [0, 0]) <= pivot) {
      [points[i], points[j]] = [points[j], points[i]];
      i++;
    }
  }

  [points[i], points[end]] = [points[end], points[i]];
  return i;
}

export function kClosest(points: Point[], k: number): Point[] {
  function kClosestRec(start: number, end: number): void {
    if (start >= end) {
      return;
    }

    const pivotIndex = partition(points, start, end);

    if (pivotIndex === k) {
      return;
    } else if (pivotIndex < k) {
      kClosestRec(pivotIndex + 1, end);
    } else {
      kClosestRec(start, pivotIndex - 1);
    }
  }

  kClosestRec(0, points.length - 1);
  return points.slice(0, k);
}
