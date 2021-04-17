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

  // Create variables for a passenger name 
  let passengerFirstName = ride.passengerDetails.first} 
  let passengerLastName = ride.passengerDetails.last

  // Create a varible for a passenger phone number
  let phoneNumber = ride.passengerDetails.PhoneNumber
 
  // Create a variable for a pick up location
  let pickUp = `${ride.pickupLocation.address}, ${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}`

  // Create a variable for a drop off location
  let dropOff = `${ride.dropoffLocation.address}, ${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}`

  // Create conditional logic to confirm the service level
  let serviceLevel =``
  if (purpleRequested == true){
    serviceLevel = `Noover Purple`
  } else if (numberOfPassenger > 3){
    serviceLevel = 'Noover XL'
  } else {
    serviceLevel = `Noover X`
  }

  // Create a human readable sentence using the data above

  let sentence = `${serviceLevel}: ${passengerFirstName} ${passengerLastName} - ${phoneNumber}. Pickup at ${pickUp}. Drop off at ${dropOff}` 
  console.log(sentence)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
