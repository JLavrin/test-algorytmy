#4
errorMismatchedBracket = "Błąd: niepasujący znak zamykający"
succesMessage = "Wszystkie zanki są poprawnie zamknięte"
errorUnclosedBracket = "Błąd: niezamknięty/e znaki: "

def check_bracket_closure(string):
    stack = []
    brackets = {
        '"': '"',
        '»': '«',
        '(': ')'
    }

    for char in string:
        if char in brackets:
            stack.append(char)
        else:
            if not stack:
                return errorMismatchedBracket
            last = stack[-1]
            if brackets[last] == char:
                stack.pop()
            else:
                return errorMismatchedBracket

    if not stack:
        return successMessage
    else:
        return f"{errorUnclosedBracket} {', '.join(stack)}"