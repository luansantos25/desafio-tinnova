const Votes = require('./Votes');

class App {
  constructor() {
    this.Votes = new Votes();
    this.init();
  }

  init() {
    const validVotes = this.Votes.validByTotalVoters();
    const whiteVotes = this.Votes.whiteByTotalVoters();
    const nullVotes = this.Votes.nullByTotalVoters();

    console.log(`Valid votes: ${validVotes}%`);
    console.log(`White votes: ${whiteVotes}%`);
    console.log(`Null votes: ${nullVotes}%`);
  }
}

new App();