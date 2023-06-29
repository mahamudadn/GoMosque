const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT "prayer_type","weekly_history"."mosque" AS mosque, "date" FROM "weekly_history"
                    JOIN "prayers_table" ON "weekly_history"."prayer_id"="prayers_table"."id"
                    WHERE "user_id"=$1`;
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
  const queryText = `INSERT INTO "weekly_history" ("user_id" , "prayer_id", "mosque", "date") VALUES ($1 , $2, $3, $4)`;
  pool.query(queryText , [req.user.id, req.body.prayer_id , req.body.mosque, req.body.date])
  .then(result => {
    res.send(result.rows)
  }).catch(err => {
    console.log('Error in POST /prayer' , err)
  })
});

module.exports = router;
