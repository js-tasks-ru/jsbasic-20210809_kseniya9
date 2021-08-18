let calculator = {
  num1: 0,
  num2: 0,
  read(a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read();
calculator.sum();
calculator.mul();
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
