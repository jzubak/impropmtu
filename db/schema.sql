-- Drop Database impromptu;
CREATE DATABASE impromptu;

CREATE TABLE airports (
	airportID INT NOT NULL AUTO_INCREMENT,
    code VARCHAR (255) NOT NULL,
	beach Int(11) NOT NULL,
    urban Int(11) NOT NULL,
    hiking Int(11) NOT NULL,
    food Int(11) NOT NULL,
    nightlife Int(11) NOT NULL,
    historic Int(11) NOT NULL,
    ski Int(11) NOT NULL,
    quiet Int(11) NOT NULL,
    kidfriendly Int(11) NOT NULL, 
    PRIMARY KEY (airportID)
  );

CREATE TABLE destinations (
	destinationsID INT NOT NULL AUTO_INCREMENT,
    code VARCHAR (255) NOT NULL,
	beach Int(11) NOT NULL,
    urban Int(11) NOT NULL,
    hiking Int(11) NOT NULL,
    food Int(11) NOT NULL,
    nightlife Int(11) NOT NULL,
    historic Int(11) NOT NULL,
    ski Int(11) NOT NULL,
    quiet Int(11) NOT NULL,
    kidfriendly Int(11) NOT NULL,
    PRIMARY KEY (destinationsID),
    airportID INT NOT NULL,
	FOREIGN KEY fk_airport(airportID)
    REFERENCES airport(airportID)
  );