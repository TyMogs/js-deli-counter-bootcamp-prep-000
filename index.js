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

function currentLine(katzDeli) {
  for (var i = 0; i < katzDeli.length; i++) {
    katzDeli.push(` ${i+1}. ${katzDeli[i]}, `)
    if (katzDeli.length > 0) {
      return `The line is currently: ${katzDeli}`
  } else {
      return "The line is currently empty."
  }
 }
}