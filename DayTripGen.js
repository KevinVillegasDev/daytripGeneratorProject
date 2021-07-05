"use strict";

//Feature 2. Destination to be randomly selected for day trip.
let destinations = ["Paris", "London", "Bali", "Tokyo", "New York"];
//Feature 3. Restaurant to be randomly selected for day trip.
let restaurants = ["Nobu", "Maestro's", "Katana", "Mcdonalds"];
//Feature 4. Mode of transportation to be randomly selected for day trip.
let transportations = ["Bus", "Scooter", "Jet", "Boat", "Horse"];
//Feature 5. Form of entertainment to be randomly selected for day trip.
let entertainments = [
  "Whale watching",
  "Theme Parks",
  "Guided tour of location",
  "Bar hopping",
  "Concert",
];

let myTrip = [];

function randomEvent(events) {
  let event = events[Math.floor(Math.random() * events.length)];
  myTrip.push(event);
  return event;
}

console.log(randomEvent(destinations));
console.log(randomEvent(restaurants));
console.log(randomEvent(transportations));
console.log(randomEvent(entertainments));

// Feature 6. Want to be able to randomly reselect a destination, restaurant, mode of transportation and/or form of
// entertainment if i dont like one or more of those things.
function newUserChoices() {
  let userChangeRequest = "";
  while (userChangeRequest !== "5") {
    userChangeRequest = prompt(
      "What would you like to change? 1=destination, 2=restaurants, 3=transportation, 4=entertainment, 5= happy with choices"
    );
    if (userChangeRequest === "1") {
      let destination = randomEvent(destinations);
      console.log(destination);
      myTrip[0] = destination;
    } else if (userChangeRequest === "2") {
      let restaurant = randomEvent(restaurants);
      console.log(restaurant);
      myTrip[1] = restaurant;
    } else if (userChangeRequest === "3") {
      let transportation = randomEvent(transportations);
      console.log(transportation);
      myTrip[2] = transportation;
    } else if (userChangeRequest === "4") {
      let entertainment = randomEvent(entertainments);
      console.log(entertainment);
      myTrip[3] = entertainment;
    }
  }
}
newUserChoices();

//Feature 7. I want to be able to confirm that my day trip is "complete" once i like all of the random selections.
//Feature 8. Display completed trip in console.
function confirmTrip() {
  console.log(
    "Destination: " +
      myTrip[0] +
      " Restaurant: " +
      myTrip[1] +
      " Transportation: " +
      myTrip[2] +
      " Entertainment " +
      myTrip[3]
  );
  let userHappinessRequest = prompt(
    "Are you satisfied with all your random selections?"
  );

  if (userHappinessRequest === "yes") {
    console.log("Day Trip confirmed! Have fun!");
  } else {
    newUserChoices();
  }
}
confirmTrip();
