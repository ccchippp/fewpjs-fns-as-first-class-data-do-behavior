/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hour = time.split(":",1)
  let parsed = parseInt(hour)
  if (parsed < 12) { return "Good Morning"}
  else if (parsed > 17) { return "Good Evening"}
  else return "Good Afternoon"
}


/* Write your implementation of displayMessage() */
function displayMessage(str) {
  document.getElementById("greeting").innerText = str
}
