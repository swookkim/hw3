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
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last

  // Create a varible for a passenger phone number
  let phoneNumber = ride.passengerDetails.phoneNumber
 
  // Create variables for a pick up location
  let pickUpAddress = ride.pickupLocation.address 
  let pickUpCity = ride.pickupLocation.city 
  let pickUpState = ride.pickupLocation.state 
  let pickUpZip = ride.pickupLocation.zip

  // Create variables for a drop off location
  let dropOffAddress = ride.dropoffLocation.address 
  let dropOffCity = ride.dropoffLocation.city
  let dropOffState = ride.dropoffLocation.state 
  let dropOffZip = ride.dropoffLocation.zip

  // Create conditional logic to confirm the service level
  let serviceLevel =``
  if (ride.purpleRequested == true){
    serviceLevel = `Noover Purple`
  } else if (ride.numberOfPassenger > 3){
    serviceLevel = 'Noover XL'
  } else if (ride.numberOfPassenger <=3 {
    serviceLevel = `Noover X`
  }

  // Create a human readable format representing a customer request

  let format = `${serviceLevel}: ${passengerFirstName} ${passengerLastName} - ${phoneNumber}. Pickup at ${pickUpAddress}, ${pickUpCity}, ${pickUpState} ${pickUpZip}. Drop off at ${dropOffAddress}, ${dropOffCity}, ${dropOffState} ${dropOffZip}.` 
  console.log(format)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
