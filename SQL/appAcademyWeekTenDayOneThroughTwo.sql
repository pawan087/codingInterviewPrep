SELECT *
FROM   puppies;

SELECT name
FROM   puppies;

SELECT name
     , age_yrs
     , weight_lbs
FROM   puppies;

SELECT name, breed FROM puppies
  WHERE breed = 'Corgi';

SELECT name, breed FROM puppies
  WHERE breed IN ('Corgi', 'Beagle', 'Yorkshire Terrier');

SELECT name, breed, age_yrs FROM puppies
  WHERE age_yrs BETWEEN 0 AND 0.6;

SELECT name, breed
FROM puppies
ORDER BY name;

SELECT name, breed
FROM puppies
ORDER BY age_yrs DESC;

SELECT name, breed
FROM puppies
ORDER BY age_yrs
LIMIT 100;

SELECT name, breed
FROM puppies
ORDER BY age_yrs
LIMIT 2;

SELECT name, breed
FROM puppies
ORDER BY age_yrs
LIMIT 100 OFFSET 100;

SELECT name, breed
FROM puppies
ORDER BY age_yrs
LIMIT 2 OFFSET 2;

SELECT name, breed FROM puppies
  WHERE breed NOT IN ('Miniature Schnauzer', 'Basset Hound', 'Labradoodle')
    AND breed NOT LIKE '%Shepherd';
    -- anything Shepherd will be filtered, ie German Shepherd

SELECT name, breed, age_yrs FROM puppies
  WHERE age_yrs * 10 = 6;

SELECT name, breed, weight_lbs FROM puppies
  WHERE weight_lbs > 50;

SELECT * FROM puppies
INNER JOIN breeds ON (puppies.breed_id = breeds.id);

-- Next

UPDATE boardgames
SET category = 'Party Game'
WHERE max_players > 5;

UPDATE players
SET prefers_video_games = true
WHERE name IN ('Alec', 'Cub');

UPDATE players
SET prefers_video_games = true
WHERE id = 1;

DELETE FROM reviews
WHERE boardgame_id > 2;

DELETE FROM boardgames
WHERE id = 4;

SELECT *
FROM boardgames;

SELECT name
FROM boardgames;

SELECT name, avg_rating
FROM boardgames
WHERE avg_rating > 8.00;

SELECT name, avg_rating
FROM boardgames
WHERE avg_rating > 7.00;

SELECT name, avg_rating
FROM boardgames
WHERE max_players = 5;

SELECT name
FROM boardgames
WHERE NOT category = 'Adventure';

SELECT name
FROM boardgames
WHERE NOT category = 'Adventure'
AND avg_rating > 8.5;

SELECT name
FROM players
WHERE id IN (1, 2, 3);

SELECT name
FROM players
WHERE id NOT IN (1, 2, 3);

SELECT name
FROM boardgames
WHERE max_players BETWEEN 4 and 5;

SELECT content, boardgame_id
FROM reviews
WHERE content LIKE '%love%';
-- case sensitive when using '%'

SELECT name
FROM boardgames
ORDER BY name ASC;
-- ASC is default if not provided

SELECT name
FROM boardgames
ORDER BY name DESC;

SELECT name
FROM boardgames
ORDER BY name
LIMIT 2;

-- JOIN DEFAULTS TO INNER JOIN

SELECT *
FROM boardgames
JOIN reviews ON (boardgames.id = reviews.boardgame_id);
SELECT *
FROM boardgames
INNER JOIN reviews ON (boardgames.id = reviews.boardgame_id);

SELECT *
FROM boardgames
LEFT OUTER JOIN reviews ON (boardgames.id = reviews.boardgame_id);

SELECT *
FROM reviews
JOIN boardgames ON (boardgames.id = reviews.boardgame_id)
ORDER BY boardgames.name
LIMIT 1;

SELECT *
FROM reviews
JOIN boardgames ON (boardgames.id = reviews.boardgame_id)
ORDER BY boardgames.name
LIMIT 1;

SELECT *
FROM reviews
JOIN boardgames ON (boardgames.id = reviews.boardgame_id)
WHERE reviews.content LIKE '%love%';

SELECT *
FROM boardgames
JOIN lfg ON (boardgames.id = lfg.boardgame_id)
JOIN players ON (lfg.player_id = players.id);

SELECT *
FROM boardgames
JOIN lfg ON (boardgames.id = lfg.boardgame_id)
JOIN players ON (lfg.player_id = players.id);
JOIN reviews on (boardgames.id = reviews.boardgame_id)
WHERE boardgames.name = 'Terraforming Mars';

-- Next

/*
 Write a SQL query that returns the city, state, and estimated population in
 2018 from the "cities" table.
 */
SELECT
     city,
     state,
     population_estimate_2018 AS population
FROM
     cities;

/*
 2.2) Write a SQL query that returns all of the airport names contained in the
 "airports" table.
 */
SELECT
     name
FROM
     airports;

/*
 3.1) Write a SQL query that uses a WHERE clause to get the estimated population
 in 2018 of the city of San Diego.
 */
SELECT
     population_estimate_2018
FROM
     cities
WHERE
     city = 'San Diego';

/*
 3.2) Write a SQL query that uses a WHERE clause to get the city, state, and
 estimated population in 2018 of cities in this list:
 Phoenix, Jacksonville, Charlotte, Nashville.
 */
SELECT
     population_estimate_2018
FROM
     cities
WHERE
     city IN (
          'Phoenix',
          'Jacksonville',
          'Charlotte',
          'Nashville'
     );

/*
 3.3) Write a SQL query that uses a WHERE clause to get the cities with an
 estimated 2018 population between 800,000 and 900,000 people. Show the
 city, state, and estimated population in 2018 columns.
 */
SELECT
     city,
     state,
     population_estimate_2018 AS population
FROM
     cities
WHERE
     population_estimate_2018 BETWEEN 800000
     AND 900000;

/*
 3.4) Write a SQL query that uses a WHERE clause to get the names of the cities
 that had an estimated population in 2018 of at least 1 million people (or
 1,000,000 people).
 */
SELECT
     city
FROM
     cities
WHERE
     population_estimate_2018 >= 1000000;

/*
 3.5) Write a SQL query to get the city and estimated population in 2018 in
 number of millions (i.e. without zeroes at the end: 1 million), and that
 uses a WHERE clause to return only the cities in Texas.
 */
SELECT
     city,
     population_estimate_2018 / 1000000 AS population
FROM
     cities
WHERE
     state = 'Texas';

/*
 3.6) Write a SQL query that uses a WHERE clause to get the city, state,
 and estimated population in 2018 of cities that are NOT in the
 following states: New York, California, Texas.
 */
SELECT
     city,
     population_estimate_2018
FROM
     cities
WHERE
     state NOT IN ('New York', 'California', 'Texas');

/*
 3.7) Write a SQL query that uses a WHERE clause with the LIKE operator to get
 the city, state, and estimated population in 2018 of cities that start with
 the letter "S".
 */
SELECT
     city,
     population_estimate_2018
FROM
     cities
WHERE
     city LIKE 'S%';

/*
 3.8) Write a SQL query that uses a WHERE clause to find the cities with either a
 land area of over 400 square miles OR a population over 2 million people
 (or 2,000,000 people). Show the city name, the land area, and the estimated
 population in 2018.
 */
SELECT
     city,
     land_area_sq_mi_2016 AS landArea,
     population_estimate_2018 AS populationEstimate2018
FROM
     cities
WHERE
     land_area_sq_mi_2016 > 400
     OR population_estimate_2018 > 2000000;

/*
 3.9) Write a SQL query that uses a WHERE clause to find the cities with either a
 land area of over 400 square miles OR a population over 2 million people
 (or 2,000,000 people) -- but not the cities that have both. Show the city
 name, the land area, and the estimated population in 2018.
 */
SELECT
     city,
     land_area_sq_mi_2016,
     population_estimate_2018
FROM
     cities
WHERE
     (
          (
               land_area_sq_mi_2016 > 400
               OR population_estimate_2018 > 2000000
          )
          AND NOT (
               land_area_sq_mi_2016 > 400
               AND population_estimate_2018 > 2000000
          )
     );

/*
 3.10) Write a SQL query that uses a WHERE clause to find the cities where the
 population has increased by over 200,000 people from 2010 to 2018. Show
 the city name, the estimated population in 2018, and the census population
 in 2010.
 */
SELECT
     city,
     population_estimate_2018,
     population_census_2010
FROM
     cities
WHERE
     population_estimate_2018 - population_census_2010 > 200000;

/*
 4.1) Write a SQL query using an INNER JOIN to join data from the "cities" table
 with data from the "airports" table using the city_id foreign key. Show the
 airport names and city names only.
 */
SELECT
     name,
     city
FROM
     airports
     INNER JOIN cities ON airports.city_id = cities.id;
-- SELECT
--      name,
--      city
-- FROM
--      airports
--      JOIN cities ON airports.city_id = cities.id;

/*
 4.2) Write a SQL query using an INNER JOIN to join data from the "cities" table
 with data from the "airports" table to find out how many airports are in
 New York City using the city name.
 (Note: Use the aggregate function COUNT() to count the number of matching
 rows.)
 */
SELECT
     COUNT(*)
FROM
     airports
     JOIN cities ON airports.city_id = cities.id
WHERE
     city = 'New York';
-- SELECT
--      COUNT(*)
-- FROM
--      airports
--      INNER JOIN cities ON airports.city_id = cities.id
-- WHERE
--      city = 'New York';

/*
 B.1) Apostrophe: Write a SQL query to get all three ID codes (the Federal
 Aviation Administration (FAA) ID, the International Air Transport
 Association (IATA) ID, and the International Civil Aviation Organization
 (ICAO) ID) from the "airports" table for Chicago O'Hare International
 Airport.
 (Note: You'll need to escape the quotation mark in O'Hare. See How to
 include a single quote in a SQL query.)
 */
SELECT
     FAA_id,
     IATA_id,
     ICAO_id
FROM
     airports
WHERE
     name = 'Chicago O''Hare International Airport';

/*
 B.2) Formatting Commas: Refactor Phase 2, Query #1 to turn the INT for estimated
 population in 2018 into a character string with commas. (Note: See Data
 Type Formatting Functions)

 * Phase 2, Query #1: Write a SQL query that returns the city, state, and
 estimated population in 2018 from the "cities" table.
 */
SELECT
     city,
     state,
     to_char(population_estimate_2018, '9,999,999') AS population
FROM
     cities;

/*
 B.3) Decimals and Rounding: Refactor Phase 3, Query #5 to turn number of
 millions from an integer into a decimal rounded to a precision of two
 decimal places.
 (Note: See Numeric Types and the ROUND function.)

 * Phase 3, Query #5: Write a SQL query to get the city and estimated
 population in 2018 in number of millions (i.e. without zeroes at the
 end: 1 million), and that uses a WHERE clause to return only the cities
 in Texas.
 */
SELECT
     city,
     round(population_estimate_2018 / 1000000 :: decimal, 2)
FROM
     cities
WHERE
     state = 'Texas';

/*
 B.4) ORDER BY and LIMIT Clauses: Refactor Phase 3, Query #10 to return only one
 city with the biggest population increase from 2010 to 2018. Show the city
 name, the estimated population in 2018, and the census population in 2010
 for that city.
 (Note: You'll do the same calculation as before, but instead of comparing
 it to 200,000, use the ORDER BY Clause with the LIMIT Clause to sort the
 results and grab only the top result.

 * Phase 3, Query #10: Write a SQL query that uses a WHERE clause to find
 the cities where the population has increased by over 200,000 people from
 2010 to 2018. Show the city name, the estimated population in 2018, and
 the census population in 2010.
 */
SELECT
     city,
     population_estimate_2018 - population_census_2010 AS population_increase
FROM
     cities
ORDER BY
     population_increase DESC
LIMIT
     1;

-- SELECT
--      city,
--      (
--           population_estimate_2018 - population_census_2010
--      ) AS population_increase
-- FROM
--      cities
-- ORDER BY
--      population_increase DESC
-- LIMIT
--      10;
