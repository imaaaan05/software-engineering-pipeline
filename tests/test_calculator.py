from calculator import add, sub, multiply, divide, squareroot, modulus, factorial


def test_add():
    assert add(2, 3) == 5


def test_sub():
    assert sub(10, 4) == 6


def test_multiply():
    assert multiply(3, 4) == 12
    assert multiply(0, 5) == 0


def test_divide():
    assert divide(10, 2) == 5


def test_squareroot():
    assert squareroot(64) == 8


def test_modulus():
    assert modulus(10, 3) == 1
    assert modulus(20, 5) == 0


def test_factorial():
    assert factorial(0) == 1
    assert factorial(1) == 1
    assert factorial(2) == 2
    assert factorial(3) == 6
    assert factorial(4) == 24
    assert factorial(5) == 120
    assert factorial(6) == 720
    assert factorial(7) == 5040
    assert factorial(10) == 3628800
