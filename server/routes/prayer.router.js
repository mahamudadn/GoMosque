const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('Prayer router get', req.user.id);
  const queryText = `SELECT id, user_id, fajr, dhuhr, asr, magrib, isha, to_char(date, 'DAY Month DD, YYYY') AS date FROM  "weekly_prayers"
                      WHERE "user_id" = $1
                      ORDER BY "id" ASC;`;
                      
  pool.query(queryText, [req.user.id])
  .then(result => {
    // console.log('djflsakjf el=>>>>>',result.rows);
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
  const {id,
    fajr,
    dhuhr,
    asr,
    magrib,
    isha,} = req.body
  const queryText = `INSERT INTO weekly_prayers  ("user_id", "fajr", "dhuhr", "asr", "magrib", "isha")
  VALUES($1,$2,$3,$4,$5,$6);`;
  pool.query(queryText , [id,
    fajr,
    dhuhr,
    asr,
    magrib,
    isha])
  .then(result => {
    res.sendStatus(201);
  }).catch(err => {
    console.log('Error in POST /prayer' , err)
    res.sendStatus(500);
  })
});

router.put('/:id', (req, res) => {
  // req.body
  console.log('PRAYER ROUTER UPDATE','REQBODY:',req.body, 'REQPARAMS', req.params.id);
  const {
    fajr,
    dhuhr,
    asr,
    magrib,
    isha,} = req.body

  const idToEddit = req.params.id


  const queryText = `
    UPDATE "weekly_prayers" 
    SET "fajr" = $1, "dhuhr" = $2,  "asr" = $3, "magrib"= $4, "isha" = $5
    WHERE "id" = $6;
    `
 pool.query(queryText, [fajr, dhuhr, asr, magrib, isha, idToEddit])
  .then( result => {
    console.log(`eddited prayer ${idToEddit} `);
    res.sendStatus(200)
  })
  .catch(error => {
    console.log('Error in edditing prayer', error);
    res.sendStatus(500)
  })
  // req.body should contain a category_id to add to this favorite image
});


//Delete
router.delete('/:id', (req, res) => {

  const queryText = `DELETE  FROM "weekly_prayers" WHERE "id"=$1`
  pool.query(queryText,[req.params.id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log('error deleting prayer', error);
    res.sendStatus(200);
  })
  
});




module.exports = router;
