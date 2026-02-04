// i. Create two arrays
const collegeFriends = ["Rahul", "Anita", "Suresh"];
const workFriends = ["Priya", "Karthik", "Neha"];

// Merge arrays using SPREAD operator
// Add "Me" at the beginning
const partyList = ["Me", ...collegeFriends, ...workFriends];

console.log("Party List:", partyList);


// ii. Function using normal parameter + REST operator
const welcomeFriends = (host, ...guests) => {
  console.log(`Host: ${host}`);
  console.log("Welcome Guests:");
  guests.forEach(guest => console.log(`- ${guest}`));
};

// Function call
welcomeFriends("Me", ...partyList);
