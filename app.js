'use strict'

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
 '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


function customersPerHour(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}



let seattle = {
  name: "seattle",
  min: 23,
  max: 66,
  avgSales: 6.3,
  totalSales: [],
  grandTotal: 0,
  hourlyCustomers: function() {
    for (let i = 0; i < hoursOpen.length; i++){
      let custGenerated = customersPerHour(this.min, this.max);
// ^ line above generates a random number between the minimum and maximum ranges
      let sales = Math.round(custGenerated * this.avgSales);
      this.totalSales.push(`${hoursOpen[i]}: Current Sales ${sales}`);
      this.grandTotal = this.grandTotal + sales
    }
  },
};

function generateLineItems(store) { //organizes everything into a line item for table display
  let parentEl = document.querySelector(`#${store.name}`); //establishes the parent element as the stores name
  for (let total = 0; total < store.totalSales.length; total++) { //for loop runs variable 'total' for as long as the number of stores.
    let newItem = document.createElement('li'); // variable 'newItem' creates a new list item element
    newItem.innerText = store.totalSales[total];
    parentEl.appendChild(newItem); // appends (adds to the bottom) the 'newItem' element as a child element.
  }
  let lastItem = document.createElement('li');
  lastItem.innerText = store.grandTotal;
  parentEl.appendChild(lastItem);// appends last item to the bottom of the parent element (which is store)
}

console.log(seattle);
seattle.hourlyCustomers();
generateLineItems(seattle);

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
}