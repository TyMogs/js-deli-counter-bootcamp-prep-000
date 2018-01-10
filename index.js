var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return`Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli, name) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeli.shift(name)}.`
    katzDeli.shift(name)
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