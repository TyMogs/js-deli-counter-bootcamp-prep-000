var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return`Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli, name) {
  if (katzDeli.length > 0) {
    return `Currently serving ${katzDeli[0]}.`
    katzDeli.shift(0)
  } else {
  return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    katzDeli.join(", ")
      return `The line is currently: ${katzDeli.join(", ")}`
  } else {
      return "The line is currently empty."
  }
}