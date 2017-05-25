import aliveNeighbors from './alive-neighbors';

export default function (array) {
  if (2 <= aliveNeighbors(array) && aliveNeighbors(array) <= 3) {
    return true;
  }
  return false;
}
