// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Passenger First Name
  let passengerFirstName = ride.passengerDetails.first
  
  // Passenger Last Name
  let passengerLastName = ride.passengerDetails.last
 
  // Passenger Phone Number
  let PhoneNumber = ride.passengerDetails.PhoneNumber
 
  // Pick Up Location
  let pickUp = ride.pickupLocation.address + ride.pickupLocation.city 
  console.log(pickUp)


  // 🔥 YOUR CODE ENDS HERE 🔥
})
