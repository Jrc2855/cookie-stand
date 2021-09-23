'use strict'

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
 '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


function StoreLocation (location, minCust, maxCust,avgSales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.dailyTotal = 0;
  StoreLocation.all.push(this);
}

StoreLocation.all = [];

StoreLocation.prototype.calcAvgCookiesBought = function() {
  for (let i = 0; i < hoursOpen.length; i++) {
    let cookiesSold = Math.floor(this.calcRandomCustomers());
    this.hourlySales.push(cookiesSold);
    this.dailyTotal = this.dailyTotal + cookiesSold;
  }
};

// The function below does the same thing as our customersPerHour function from below. Only this time it's specific
// to the objects StoreLocation.
StoreLocation.prototype.calcRandomCustomers = function() {
  return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSales;
};
function renderHeader() {
  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');
  let headerEl = document.createElement('th');
  rowEl.appendChild(headerEl);
  for (let x = 0; x < hoursOpen.length; x++) {
    headerEl = document.createElement('th');
    headerEl.textContent = hoursOpen[x];
    rowEl.appendChild(headerEl);
  }
  headerEl = document.createElement('th');
  headerEl.innerText = 'Daily Location Total';
  rowEl.appendChild(headerEl);
  parentEl.appendChild(rowEl);
};

renderHeader();

StoreLocation.prototype.renderTableRow = function() {
  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');
  let dataEl = document.createElement('td');
  dataEl.innerText = this.location;
  rowEl.appendChild(dataEl);
  for(let sale = 0; sale< this.hourlySales.length; sale++) {
    let dataEl = document.createElement('td');
    dataEl.innerText = this.hourlySales[sale];
    rowEl.appendChild(dataEl);
  }
  dataEl = document.createElement('td');
  dataEl.innerText = this.dailyTotal;
  rowEl.appendChild(dataEl);
  parentEl.appendChild(rowEl);
};

let Seattle = new StoreLocation('Seattle', 23, 65, 6.3);
let Lima = new StoreLocation('Lima', 2, 16, 4.6);
let Paris = new StoreLocation('Paris', 20, 38, 2.3);
let Dubai = new StoreLocation('Dubai', 11, 38, 3.7);
let Tokyo = new StoreLocation('Tokyo', 3, 24, 1.2);

Seattle.calcAvgCookiesBought();
Seattle.renderTableRow();

Lima.calcAvgCookiesBought();
Lima.renderTableRow();

Paris.calcAvgCookiesBought();
Paris.renderTableRow();

Dubai.calcAvgCookiesBought();
Dubai.renderTableRow();

Tokyo.calcAvgCookiesBought();
Tokyo.renderTableRow();

console.log(StoreLocation.all);





function renderFooter() {
  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');
  let dataEl = document.createElement('td');
  dataEl.innerText = 'Totals';
  rowEl.appendChild(dataEl);

  let grandTotal = 0;
  for(let hour = 0; hour < hoursOpen.length; hour ++) {
    let dataEl = document.createElement('td');
    let sum = 0;
    for (let store = 0; store<StoreLocation.all.length; store++) {
    
      sum = sum + StoreLocation.all[store].hourlySales[hour];
      grandTotal = grandTotal + StoreLocation.all[store].hourlySales[hour]; 
    }
    dataEl.innerText = sum;
    rowEl.appendChild(dataEl);
  }
  dataEl = document.createElement('td');
  dataEl.innerText = grandTotal;
  rowEl.appendChild(dataEl);
  parentEl.appendChild(rowEl);
}

renderFooter();













































































// function customersPerHour(min, max){
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function generateLineItems(store) { //organizes everything into a line item for table display
  // let parentEl = document.querySelector(`#${store.name}`); //establishes the parent element as the stores name
  // for (let total = 0; total < store.totalSales.length; total++) { //for loop runs variable 'total' for as long as the number of stores.
  //   let newItem = document.createElement('li'); // variable 'newItem' creates a new list item element
  //   newItem.innerText = store.totalSales[total];
  //   parentEl.appendChild(newItem); // appends (adds to the bottom) the 'newItem' element as a child element.
  // }
  // let lastItem = document.createElement('li');
  // lastItem.innerText = store.grandTotal;
  // parentEl.appendChild(lastItem);// appends last item to the bottom of the parent element (which is store)
// };

// let hourlySales = function(){
//   for (let i = 0; i < hoursOpen.length; i++){
//     let avgCustomers = customersPerHour(this.min, this.max);
//     let cookieSoldPerHour = Math.round(avgCustomers * this.avgSales);
//     this.totalSales.push(`${hoursOpen[i]}: Cookies Sold ${cookieSoldPerHour}`);
//     this.grandTotal = this.grandTotal + cookieSoldPerHour;
//   }
// }
// let Seattle = {
//   name: "Seattle",
//   min: 23,
//   max: 66,
//   avgSales: 6.3,
//   totalSales: [],
//   grandTotal: 0,
//   hourlyCustomers: function() {
//     for (let i = 0; i < hoursOpen.length; i++){
//       let custGenerated = customersPerHour(this.min, this.max);
// // ^ line above generates a random number between the minimum and maximum ranges
//       let sales = Math.round(custGenerated * this.avgSales);
//       this.totalSales.push(`${hoursOpen[i]}: Current Sales ${sales}`);
//       this.grandTotal = this.grandTotal + sales 
//     }
//   },
// };
// console.log(Seattle);
// Seattle.hourlyCustomers();
// generateLineItems(Seattle);


// let Tokyo = {
//   name: "Tokyo",
//   min: 3,
//   max: 24,
//   avgSales: 1.2,
//   totalSales: [],
//   grandTotal: 0,
//   hourlyCustomers: function() {
//     for (let i = 0; i < hoursOpen.length; i++){
//       let custGenerated = customersPerHour(this.min, this.max);
// // ^ line above generates a random number between the minimum and maximum ranges
//       let sales = Math.round(custGenerated * this.avgSales);
//       this.totalSales.push(`${hoursOpen[i]}: Current Sales ${sales}`);
//       this.grandTotal = this.grandTotal + sales 
//     }
//   },
// };

// console.log(Tokyo);
// Tokyo.hourlyCustomers();
// generateLineItems(Tokyo);



// let Dubai = {
//   name: "Dubai",
//   min: 11,
//   max: 38,
//   avgSales: 3.7,
//   totalSales: [],
//   grandTotal: 0,
//   hourlyCustomers: function() {
//     for (let i = 0; i < hoursOpen.length; i++){
//       let custGenerated = customersPerHour(this.min, this.max);
// // ^ line above generates a random number between the minimum and maximum ranges
//       let sales = Math.round(custGenerated * this.avgSales);
//       this.totalSales.push(`${hoursOpen[i]}: Current Sales ${sales}`);
//       this.grandTotal = this.grandTotal + sales 
//     }
//   },
// };

// console.log(Dubai);
// Dubai.hourlyCustomers();
// generateLineItems(Dubai);


// let Paris = {
//   name: "Paris",
//   min: 20,
//   max: 38,
//   avgSales: 2.3,
//   totalSales: [],
//   grandTotal: 0,
//   hourlyCustomers: function() {
//     for (let i = 0; i < hoursOpen.length; i++){
//       let custGenerated = customersPerHour(this.min, this.max);
// // ^ line above generates a random number between the minimum and maximum ranges
//       let sales = Math.round(custGenerated * this.avgSales);
//       this.totalSales.push(`${hoursOpen[i]}: Current Sales ${sales}`);
//       this.grandTotal = this.grandTotal + sales 
//     }
//   },
// };

// console.log(Paris);
// Paris.hourlyCustomers();
// generateLineItems(Paris);

// let Lima = {
//   name: "Lima",
//   min: 2,
//   max: 16,
//   avgSales: 4.6,
//   totalSales: [],
//   grandTotal: 0,
//   hourlyCustomers: function() {
//     for (let i = 0; i < hoursOpen.length; i++){
//       let custGenerated = customersPerHour(this.min, this.max);
// // ^ line above generates a random number between the minimum and maximum ranges
//       let sales = Math.round(custGenerated * this.avgSales);
//       this.totalSales.push(`${hoursOpen[i]}: Current Sales ${sales}`);
//       this.grandTotal = this.grandTotal + sales 
//     }
//   },
// };

// console.log(Lima);
// Lima.hourlyCustomers();
// generateLineItems(Lima);

