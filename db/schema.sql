-- Drop Database impromptu;
CREATE DATABASE impromptu;
use impromptu;

CREATE TABLE city (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
	beach Int(11) NOT NULL,
    urban Int(11) NOT NULL,
    hiking Int(11) NOT NULL,
    food Int(11) NOT NULL,
    nightlife Int(11) NOT NULL,
    historic Int(11) NOT NULL,
    ski Int(11) NOT NULL,
    quiet Int(11) NOT NULL,
    kidfriendly Int(11) NOT NULL,
    PRIMARY KEY (id), 
    FOREIGN KEY REFERENCES 
  );
  
INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("PHL", 1, 1, 0, 1, 1, 1, 0, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("ATL", 0, 1, 1, 1, 1,1, 0, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("LAX", 1, 1, 1, 1, 1, 1, 0, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("ORD", 1, 1, 1, 1, 1, 1, 0, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("DFW", 0, 1, 0, 1, 1, 0, 0, 0, 0);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("DEN", 0, 1, 1, 1, 1, 1, 1, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("JFK", 1, 1, 1, 1, 1, 1, 0, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("SFO", 1, 1, 1, 1, 1, 1, 0, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("LAS", 0, 1, 1, 0, 1, 0 , 0, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("SEA", 1, 1, 1, 1, 1, 1, 0, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("CLT", 0, 1, 1, 1, 1, 0, 0, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("MCO", 1, 1, 1, 1, 1, 1, 0 ,1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("PHX", 0, 1, 1, 1, 1, 1, 0, 1, 1);

INSERT INTO airport (name, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("EWR", 1, 1, 1, 1, 1, 1, 1, 1, 1);

