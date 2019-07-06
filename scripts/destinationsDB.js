const sequalize = require("sequalize");
const db = require("../models");



const destinationseed = [

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Philadelphia, PA", 0, 1, 0, 1, 1, 1, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Lancaster, PA", 0, 0, 0, 0, 0, 1 ,0, 1, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("New Hope, PA", 0, 0, 0, 1, 0, 0, 0, 1, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Atlantic City, NJ", 1, 0, 0, 1, 1, 0, 0, 0, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Cape May, NJ", 1, 0, 0, 0, 0, 1, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Atlanta, GA", 0, 1, 0, 1, 1, 1, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Chatanooga, TN", 0, 0, 1, 1, 0, 1, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Geenville, SC", 0, 1, 1, 1, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Athens, GA", 0, 0, 0, 1, 1, 1, 0, 0, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Los Angeles, CA", 1, 1, 1, 1, 1, 0, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Santa Barbera, CA", 0, 1, 1, 1, 0, 1, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Laguna Beach, CA", 1, 0, 1, 1, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("DisneyLand Anahemeim, CA", 0, 0, 0, 0, 0, 0, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Palm Springs, CA", 0, 0, 1, 1, 1, 1, 0, 1, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Channel Islands, CA", 1, 0, 1, 0, 0, 0, 0, 1, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Chicago, IL", 0, 1, 1, 1, 1, 1, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Harbour Country, MI", 1, 0, 1, 1, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Indiana Dunes, IN", 1, 0, 1, 0, 0, 0, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Dallas/Fort worth, TX", 0, 1, 0, 1, 1, 0, 0, 0, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Denver, CO", 0, 1, 1, 1, 1, 0, 1, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Boulder, CO", 0, 0, 1, 1, 1, 0, 1, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Vail, CO", 0, 0, 1, 0, 1, 0, 1, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Rocky Mountain National Park, CO", 0, 0, 1, 0, 0, 0, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Brekenridge, CO", 0, 0, 1, 0, 0, 1, 1, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Fort Collins, CO", 0, 1, 1, 1, 0, 0, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("New York, NY", 0, 1, 0, 1, 1, 1, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Long Island, NY", 1, 0, 1, 1, 0, 1, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("San Francisco, CA", 0, 1, 1, 1, 1, 1, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Big Sur, CA", 0, 0, 1, 0, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Napa Valley, CA", 0, 0, 1, 1, 0, 0, 0, 1, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Monterrey, CA", 1, 1, 1, 0, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Silicon Valley, CA", 0, 1, 0, 1, 1, 0, 0, 0, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Las Vegas, NV", 0, 1, 0, 1, 1, 0, 0, 0, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Death Valley, CA", 0, 0, 1, 0, 0, 0, 0, 1, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Grand Canyon, AZ", 0, 0, 1, 0, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Seattle, WA", 0, 1, 1, 1, 1, 1, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("San Juan Islands, WA", 0, 0, 1, 0, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Washington Coast", 1, 0, 1, 0, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Charlotte, NC", 0, 1, 0, 1, 1, 0, 0, 0, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Asheville, NC", 0, 1, 1, 1, 1, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Greenville, SC", 0, 1, 1, 1, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Orlando, FL", 0, 1, 0, 1, 1, 0, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Orlando Theme Parks, FL", 0, 0, 0, 0, 0, 0, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Cape Canaveral, FL", 1, 0, 0, 0, 0, 1, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("St. Augustine, FL", 1, 0, 0, 0, 0, 1, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Ocala National Forest, FL", 0, 0, 1, 0, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Phoenix, AZ", 0, 1, 0, 1, 1, 0, 0, 0, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Sedona, AZ", 0, 0, 1, 0, 0, 1, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("New York, NY", 0, 1, 0, 1, 1, 1, 0, 0, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Poconos, PA", 0, 0, 1, 0, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Sandy Hook, NJ", 1, 0, 0, 0, 0, 0, 0, 1, 1);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("New Hope, PA / Lambertville, NJ", 0, 0, 0, 1, 0,0, 0, 1, 0);

INSERT INTO destinations (code, beach, urban, hiking, food, nightlife, historic, ski, quiet, kidfriendly)
VALUES ("Hudson Valley and Catskills, NY", 0, 0, 1, 0, 0, 0, 1, 1, 1);

];