def add(a, b):
    return a + b


def sub(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    return a / b


def squareroot(a):
    return a**0.5


def modulus(a, b):
    return a % b


def floor_divide(a, b):
    return a // b


def factorial(a):
    if a < 0:
        raise ValueError("El factorial només està definit per a enters no negatius")
    return math.factorial(a)
