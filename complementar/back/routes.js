const router = require('express').Router();

const Votes = require('../../atividade1/Votes');
const Fatorial = require('../../atividade3/Fatorial');

router.get('/result', (req, res) => {
  const votes = new Votes();

  const totalVoters = votes.totalVoters;
  const whiteVotes = votes.whiteVotes;
  const nullVotes = votes.nullVotes;

  const validPercent = votes.validByTotalVoters();
  const whitePercent = votes.whiteByTotalVoters();
  const nullPercent = votes.nullByTotalVoters();

  const result = {
    totalVoters,
    whiteVotes,
    nullVotes,
    validPercent,
    whitePercent,
    nullPercent
  }

  return res.json(result);
});

router.get('/fatorial', (req, res) => {
  const number = req.query.number;
  const fatorial = new Fatorial().fatorial(number);

  return res.json({fatorial: fatorial});
});

module.exports = router;