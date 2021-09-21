// Create separate objects for each shop and have it output the following to the sales.html file.
'use strict'

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let seattle = {
  "name": "Seattle",
  "min": 23,
  "max": 66,
  "avgSales": 6.3,
  customers: function(){
    seattlecust = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    console.log(seattlecust);
  }
};


let Tokyo = {
  "name": "Tokyo",
  "min": 3,
  "max": 24,
  "avgSales": 1.2,
};

let Dubai = {
  "name": "Dubai",
  "min": 11,
  "max": 38,
  "avgSales": 3.7,
};

let Paris = {
  "name": "Paris",
  "min": 20,
  "max": 38,
  "avgSales": 2.3,
};

let Lima = {
  "name": "Lima",
  "min": 2,
  "max": 16,
  "avgSales": 4.6,
};