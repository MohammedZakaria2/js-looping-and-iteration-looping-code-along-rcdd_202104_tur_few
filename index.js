// Code your solutions in this file
let gifts = []

function  writeCards(gifts)  {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    gifts[i] = `[ 'Thank you, ${gift}, for the wonderful surprise gift!`
    i++; // the iteration moves INSIDE the body of the loop!
  }
  return gifts;
}