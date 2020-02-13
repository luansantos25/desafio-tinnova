class App {
  constructor() {
    this.numbers = [5, 3, 2, 4, 7, 1, 0, 6];
    this.order();
  }

  order() {
      const len = this.numbers.length;
      for (let i = 0; i < len; i++) {
          for (let j = 0; j < len; j++) {
              if (this.numbers[j] > this.numbers[j + 1]) {
                  let tmp = this.numbers[j];
                  this.numbers[j] = this.numbers[j + 1];
                  this.numbers[j + 1] = tmp;
              }
          }
      }
      console.log(this.numbers);
  }
}

new App();