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

  // Passenger Name
  let passengertName = `${ride.passengerDetails.first} ${ride.passengerDetails.last}`

  // Passenger Phone Number
  let PhoneNumber = ride.passengerDetails.PhoneNumber
 
  // Pick Up Location
  let pickUp = `${ride.pickupLocation.address}, ${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}`

  // Drop Off Location
  let dropOff = `${ride.dropoffLocation.address}, ${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}`

  // Service Level
  let serviceLevel =``
  if (purpleRequested == true){
    serviceLevel = `Noover Purple`
  } else if (numberOfPassenger > 3){
    serviceLevel = 'Noover XL'
  } else {
    serviceLevel = `Noover X`
  }

  // Human readable format

  let format = `${serviceLevel}: ${}`





  // 🔥 YOUR CODE ENDS HERE 🔥
})
