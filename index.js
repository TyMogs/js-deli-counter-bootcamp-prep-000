var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  for (var i = 0; i < katzDeliLine.length; i++)
  katzDeli = katzDeliLine.push(name);
  return katzDeli[i+1];
}

function nowServing(name) {
  return katzDeli[0]
  katzDeli.shift(name)
}

function currentLine(katzDeliLine) {
  katzDeli.join(", ")
  return `The line is currently: ${katzDeli}`
}