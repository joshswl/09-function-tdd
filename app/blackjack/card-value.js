export default function (value) {
  let convertedValue = parseInt(value);
  if (convertedValue) {
    return convertedValue;
  }
  switch (value) {
    case 'jack':
    case 'queen':
    case 'king':
      return 10;
      break;
  }

  if (value === 'ace') {
    return 11;
  }
}
