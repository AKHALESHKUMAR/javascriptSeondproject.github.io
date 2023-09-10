const displayData = document.querySelector("#display_data");
const btn = document.querySelectorAll(".btn");
let count = 0;

// Set the initial value in the display_data element
displayData.textContent = count;

btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("decrement")) {
      count--;
    } else if (style.contains("increment")) {
      count++;
    } else {
      count = 0;
    }

    // Update the display_data element with the current count
    displayData.textContent = count;

    // Apply color based on the count
    if (count > 0) {
      displayData.style.color = "green";
    } else if (count < 0) {
      displayData.style.color = "red";
    } else {
      displayData.style.color = "yellow";
    }
  });
});
