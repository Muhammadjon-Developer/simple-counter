let counter = 0;

document.getElementById("increment").addEventListener("click", function () {
  counter++;
  updateCounter();
});

document.getElementById("decrement").addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    updateCounter();
  }
});

document.getElementById("reset").addEventListener("click", function () {
  counter = 0;
  updateCounter();
});

function updateCounter() {
  document.getElementById("counter").innerText = counter;
  document.getElementById("decrement").disabled = counter === 0;
}

// Initial update to set the correct state of the decrement button
updateCounter();
