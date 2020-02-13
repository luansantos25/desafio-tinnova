const Fatorial = require('./Fatorial');

class App {
  constructor() {
    this.showFatorial(6);
  }

  showFatorial(number) {
   const fatorial = new Fatorial().fatorial(number);
   console.log(fatorial);
  }
}

new App();