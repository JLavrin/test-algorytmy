// 4
const errorMismatchedBracket = 'Błąd: niepasujący znak zamykający';
const succesMessage = 'Wszystkie zanki są poprawnie zamknięte';
const errorUnclosedBracket = 'Błąd: niezamknięty/e znaki: ';

function checkBracketClosure(str) {
  let stack = [];
  let brackets = {
    '"': '"',
    '»': '«',
    '(': ')'
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char in brackets) {
      stack.push(char);
    } else {
      let last = stack[stack.length - 1];
      if (brackets[last] === char) {
        stack.pop();
      } else {
        return errorMismatchedBracket;
      }
    }
  }

  if (stack.length === 0) {
    return succesMessage;
  } else {
    return `${errorUnclosedBracket} ${stack.join(', ')}`;
  }
}

// lepsza implementacja w przypadku malej ilosci znakow w slowniku - z racji na operacji na typach prostych
function checkBracketClosure(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    switch (char) {
      case '"':
        stack.push(char);
        break;
      case '»':
        stack.push(char);
        break;
      case '(':
        stack.push(char);
        break;
      case '"':
        if (stack[stack.length - 1] !== '"') {
          return errorMismatchedBracket;
        }
        stack.pop();
        break;
      case '«':
        if (stack[stack.length - 1] !== '»') {
          return errorMismatchedBracket;
        }
        stack.pop();
        break;
      case ')':
        if (stack[stack.length - 1] !== '(') {
          return errorMismatchedBracket;
        }
        stack.pop();
        break;
    }
  }

  if (stack.length === 0) {
    return succesMessage;
  } else {
    return `${errorUnclosedBracket} ${stack.join(', ')}`;
  }
}

