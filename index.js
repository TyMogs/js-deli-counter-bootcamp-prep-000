var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var number = katzDeli
  katzDeli = katzDeliLine.push(name);
  for (var i = 0; i < katzDeli; i++) {
  return`welcome, ${name}. You are number ${katzDeli[i]} in line`;
  }
}

function nowServing(name) {
  if (katzDeli.length > 0) {
    return katzDeli[0]
    katzDeli.shift(name)
  } else {
  return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeli.length > 0) {
    katzDeli.join(", ")
      return `The line is currently: ${katzDeli}`
  } else {
      return "The line is currently empty."
  }
}