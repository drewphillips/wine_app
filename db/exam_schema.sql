CREATE DATABASE IF NOT EXISTS wineexam_db;
USE wineexam_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS exams;

-- Create the exams table
CREATE TABLE exams (
    eid INT NOT NULL AUTO_INCREMENT,
    uid INT NOT NULL,
    -- What is the most popular white grape in the world?
    q1 VARCHAR(225),
    -- Where is the Moscato D’Asti DOCG located?
    q2 VARCHAR(225),
    -- Where is Mâconnais located?
    q3 VARCHAR(225),
    -- What type of wine is produced using the charmat method?
    q4 VARCHAR(225),
    -- What is the French name for the method of gradually tilting a Champagne bottle from its horizontal position to a vertical one, neck-down, so as to bring the sediment in the neck of the bottle?
    q5 VARCHAR(225),
    -- What is the least sweet category of Riesling?
    q6 VARCHAR(225),
    -- What does “blanc de noir” refer to?
    q7 VARCHAR(225),
    -- Which grapes are the Graves region of Bordeaux most famous for?
    q8 VARCHAR(225),
    -- What causes the phenomenon known as “noble rot”?
    q9 VARCHAR(225),
    -- What white grape is blended into some Northern Rhône Syrah-based wines to soften them?
    q10 VARCHAR(225),
    PRIMARY KEY (eid)
);