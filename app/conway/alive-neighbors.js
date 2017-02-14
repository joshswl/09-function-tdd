export default function (arr) {

  let aliveNeighbors= 0;

for(let i = 0; i <= arr.length; i++) {
    if (arr[i]) {
      aliveNeighbors += 1;
    }
  }

  return aliveNeighbors;
}
