import express from 'express';
import data from '../src/testData';

const router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (req, res) => {
  res.send({ contests });
});

router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description =
    'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
  res.send(contest);
});

export default router;
