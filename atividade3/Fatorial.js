class Fatorial {
  constructor() {
    this.fatorial();
  }

  fatorial(number) {
    let fatorial = 1;
    for(let i=1; i < number; i++) {
      fatorial *= i+1;
    }
    return (`${number}! = ${fatorial}`);
  }
}

module.exports = Fatorial;