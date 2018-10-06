USE wineexam_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS users;

-- Create the users table
CREATE TABLE users (
    uid INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    emailaddress VARCHAR(255),
       
    PRIMARY KEY (uid)
);