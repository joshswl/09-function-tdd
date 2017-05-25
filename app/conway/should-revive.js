import aliveNeighbors from './alive-neighbors';

export default function (a) {
  if(aliveNeighbors(a) === 3) {
    return true;
  }
  return false;
}
