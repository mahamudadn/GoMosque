const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM  "weekly_prayers"
                      WHERE "user_id" = $1
                      ORDER BY date DESC;`;
  pool.query(queryText, [req.user.id])
  .then(result => {
    console.log('djflsakjf el=>>>>>',result.rows);
    res.send(result.rows);
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
  const queryText = `INSERT INTO weekly_prayers  ("user_id", "fajr", "dhuhr", "asr", "magrib", "isha")
  VALUES($1,$2,$3,$4,$5,$6);`;
  pool.query(queryText , [req.user.id, req.body.fajr , req.body.dhuhr, req.body.asr, req.body.magrib, req.body.isha])
  .then(result => {
    res.send(result.rows)
  }).catch(err => {
    console.log('Error in POST /prayer' , err)
  })
});


//Delete
router.delete('/:id', (req, res) => {
  const queryText = `DELETE FROM "weekly_prayer" WHERE "id"=$1`
  pool.query(queryText,[req.params.id/1])
  .then(() => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error deleting picture', error);
    res.sendStatus(200);
  })
  
});




module.exports = router;
