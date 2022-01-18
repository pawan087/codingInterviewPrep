SELECT
    name
FROM
    boardgames
    JOIN reviews ON (boardgames.id = reviews.boardgame_id);

SELECT
    boardgames.name
FROM
    boardgames
WHERE
    boardgames.id IN (
        SELECT
            reviews.boardgame_id
        FROM
            reviews
    );

SELECT
    reviews.boardgame_id
FROM
    reviews;

/* Player Alec wants to play the following boardgames.
Access Alecs id from players table and then using that access which board games
he's open to play, we get the boardgame ids of the games he wants to play
using that access ALL (*) information about that game */
SELECT
    *
FROM
    boardgames
WHERE
    boardgames.id IN (
        SELECT
            lfg.boardgame_id
        FROM
            lfg
        WHERE
            lfg.player_id IN (
                SELECT
                    players.id
                FROM
                    players
                WHERE
                    players.name = 'Alec'
            )
    );

/* Shows what people are open to play Terraforming Mars
Selects the id of the boardgame Tera Mars
Then uses that id to access all players in lfg table open to play that game
Then from that displays all of the players information using the player ids */
SELECT
    *
FROM
    players
WHERE
    players.id IN (
        SELECT
            lfg.player_id
        FROM
            lfg
        WHERE
            lfg.boardgame_id IN (
                SELECT
                    boardgames.id
                FROM
                    boardgames
                WHERE
                    boardgames.name = 'Terraforming Mars'
            )
    );

/* Games in table that are categorized as strategy which is Alec's fav category
Shows Alec's fav games */
SELECT
    boardgames.name, boardgames.category
FROM
    boardgames
WHERE
    category IN (
        SELECT
            fave_category
        FROM
            players
        WHERE
            players.name = 'Alec'
    );

-- Next

SELECT
    users.full_name,
    merchant_types.type,
    countries.name,
    merchants.merchant_name
FROM users
-- Very important to include 'FROM' since first column is users.full_name
-- FROM should indicate where this is from
INNER JOIN merchants ON (users.id = merchants.admin_id) -- 'JOIN' only works as well
-- Join merchants first, merchant type and country both have to come afterward
-- Since we use merchants to access countries and merchant_types
-- The order of merchant_type and country doesn't matter, they can be swapped
JOIN countries ON (merchants.country_id = countries.id)
JOIN merchant_types ON (merchants.merchant_type_id = merchant_types.id) -- NO COMMAS!
ORDER BY merchant_name

-- Next

-- BASIC QUERIES

--Getting all players and all information on the players table
SELECT * FROM players;

--Getting only the name of all boardgames in the Cooperative category
SELECT name FROM boardgames
WHERE category = 'Cooperative';

/* Demonstrating doing mathematical operations on columns with a query to get the
name and average rating as a percent (using aliasing for the column name) of
boardgames with a rating > 8.5.  This query should be written and discussed in
steps, not all in one go. */
SELECT name, (avg_rating * 10) as percent_rating FROM boardgames
WHERE avg_rating > 8.5;

--Demonstrating the BETWEEN keyword
SELECT name FROM boardgames
WHERE avg_rating BETWEEN 8.3 AND 8.65;

--Demonstrating a query using a foreign key
SELECT content FROM reviews
WHERE boardgame_id = 5;

--Demonstrating a query using WHERE NOT and a second WHERE condition
SELECT name, category FROM boardgames
WHERE NOT category = 'Adventure'
AND avg_rating > 8.5;

/* Demonstrating a more complex query using a NOT IN list and demonstrating the
LIMIT operator */
SELECT name, category FROM boardgames
WHERE category NOT IN ('Adventure', 'Economic')
AND avg_rating > 8.5
LIMIT 2;

--Demonstrating queries using the LIKE operator and the % match operator
SELECT name FROM boardgames
WHERE name LIKE 'T%';

SELECT content FROM reviews
WHERE content LIKE '%love%'
OR content LIKE '%like%';

--Demonstrating using the ORDER BY operator
SELECT name FROM players
ORDER BY name DESC;

SELECT name FROM boardgames
WHERE category = 'Strategic'
ORDER BY avg_rating DESC;

--Demonstrating an inner join, also showing the need to use tableName.columnName
SELECT name, boardgames.id, reviews.boardgame_id, reviews.content
FROM boardgames
JOIN reviews ON (boardgames.id = reviews.boardgame_id);

/* Demonstrating a join and adding more complexity. At this point mention the
order of SQL operations (ie, it's not top to bottom!  Note with order at bottom) */
SELECT boardgames.name, boardgames.id, reviews.boardgame_id, reviews.content
FROM boardgames
JOIN reviews ON (boardgames.id = reviews.boardgame_id)
WHERE avg_rating > 8.5
ORDER BY name DESC;

--Demonstrating a more complex join using the lfg join table
SELECT players.name, players.id, lfg.player_id, lfg.game_id, boardgames.id, boardgames.name
FROM players
JOIN lfg ON (players.id = lfg.player_id)
JOIN boardgames ON (lfg.game_id = boardgames.id)
WHERE boardgames.name = 'Terraforming Mars'
ORDER BY players.name ASC;

--SQL QUERY ORDER OF OPERATIONS
-- 1 FROM
-- 2 WHERE
-- 3 GROUP BY
-- 4 HAVING
-- 5 SELECT
-- 6 ORDER BY
-- 7 LIMIT
-- Note students do not use GROUP BY or HAVING for any projects, so they are not covered

-- Next

SELECT
    customers.name,
    invoices.invoice_number,
    fees.description,
    fees.amount
FROM customers
JOIN invoices ON (customers.id = invoices.customer_id)
JOIN fees ON (invoices.id = fees.invoice_id)
ORDER BY name;

SELECT
    customers.name,
    invoices.invoice_number,
    expenses.description,
    expenses.number_of_units,
    expenses.rate
FROM customers
JOIN invoices ON (customers.id = invoices.customer_id)
JOIN expenses ON (invoices.id = expenses.invoice_id)
ORDER BY name;
