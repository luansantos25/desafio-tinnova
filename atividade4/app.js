class App {
  constructor() {
    this.number = 10;
    this.sumOfMultiplesOfTreeAndFive(this.number);
  }

  sumOfMultiplesOfTreeAndFive(x) {
    let sum = 0;
    for(let i=0; i<x; i++) {
      if(i%3 === 0 || i%5 === 0)
        sum += i; 
    }
    console.log(sum);
  }
}

new App();