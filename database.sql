
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "prayers_table" (
    "id" SERIAL PRIMARY KEY,
    "prayer_type" VARCHAR (80)
    
);

CREATE TABLE "weekly_history" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER ,
    "prayer_id" INTEGER,
    "mosque" BOOLEAN,
    "date" DATE
    
);