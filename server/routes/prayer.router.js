const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
 const queryText = `SELECT * FROM  "weekly_history"`;
  pool.query(queryText)
  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    console.log('error getting prayers', err);
    res.sendStatus(200);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const queryText = `INSERT INTO "prayer_table" ("prayer_type" , "mosque") VALUES ($1 , $2)`
  pool.query(queryText , [req.body.prayer_type , req.body.mosque])
  .then(result => {
    res.send(result.rows)
  }).catch(err => {
    console.log('Error in POST /prayer' , err)
  })
});

module.exports = router;
