-- Drop Database impromptu;
CREATE DATABASE impromptu;

CREATE TABLE airports (
	airportID INT NOT NULL AUTO_INCREMENT,
    code VARCHAR (255) NOT NULL,
	beach VARCHAR(11) NOT NULL,
    urban VARCHAR(11) NOT NULL,
    hiking VARCHAR(11) NOT NULL,
    food VARCHAR(11) NOT NULL,
    nightlife VARCHAR(11) NOT NULL,
    historic VARCHAR(11) NOT NULL,
    ski VARCHAR(11) NOT NULL,
    quiet VARCHAR(11) NOT NULL,
    kidfriendly VARCHAR(11) NOT NULL, 
    PRIMARY KEY (airportID)
  );

CREATE TABLE destinations (
	destinationsID INT NOT NULL AUTO_INCREMENT,
    cityName VARCHAR (255) NOT NULL,
	beach VARCHAR(11) NOT NULL,
    urban VARCHAR(11) NOT NULL,
    hiking VARCHAR(11) NOT NULL,
    food VARCHAR(11) NOT NULL,
    nightlife VARCHAR(11) NOT NULL,
    historic VARCHAR(11) NOT NULL,
    ski VARCHAR(11) NOT NULL,
    quiet VARCHAR(11) NOT NULL,
    kidfriendly VARCHAR(11) NOT NULL,
    PRIMARY KEY (destinationsID),
    airportID INT NOT NULL,
	FOREIGN KEY fk_airport(airportID)
    REFERENCES airports(airportID)
  );