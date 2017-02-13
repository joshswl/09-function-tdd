import cardSum from './card-sum';

export default function (value1, value2) {
  if(value1 === value2) {
    return false;
  }

  return cardSum(value1, value2) <= 17;
}
