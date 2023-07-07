const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
	console.log("inside the GET for weekly");
	// GET route code here
	const queryText = `SELECT to_char(date, 'DAY') AS date, sum( 
        CAST (fajr AS INT) + CAST (dhuhr AS INT) + CAST (dhuhr AS INT) + CAST (asr AS INT) + CAST (asr AS INT) ) AS mosque_prayer FROM "weekly_prayers"
       WHERE "user_id" = $1
       GROUP BY id
       ORDER BY "date"
       LIMIT 7;
   `;

	pool
		.query(queryText, [req.user.id])
		.then((result) => {
			console.log(result.rows);
			res.send(result.rows);
		})
		.catch((err) => {
			console.log("error getting prayers", err);
			res.sendStatus(200);
		});
});

module.exports = router;
