from calculator import add, sub, multiply, divide, squareroot, modulus


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
