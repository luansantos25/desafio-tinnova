class Votes {
  constructor() {
    this.totalVoters = 1000;
    this.validVotes = 800;
    this.whiteVotes = 150;
    this.nullVotes = 50;
  }

  validByTotalVoters() {
    const percent = this.validVotes / this.totalVoters;
    return percent*100; 
  }

  whiteByTotalVoters() {
    const percent = this.whiteVotes / this.totalVoters;
    return percent*100; 
  }

  nullByTotalVoters() {
    const percent = this.nullVotes / this.totalVoters;
    return percent*100; 
  }
}

module.exports = Votes;