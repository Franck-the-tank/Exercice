var number = 3,
  operator = 'addition',
  i = 1,
  msg = ' ',
  el = document.getElementById('parag')

if (operator === 'addition') {
  while (i < 11) {
    final = i + number;
    msg += i + ' + ' + number + ' = ' + final.toFixed() + "<br /> ";
    i += 1;
  }
} else {
  while (i < 11) {
    final = i * number;
    msg += i + ' x ' + number + ' = ' + final.toFixed() + "<br /> ";
    i += 1;
  }
}

// display message
el.innerHTML = msg
