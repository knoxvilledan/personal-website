function typeWriter(
  element,
  textArray,
  currentIndex = 0,
  charIndex = 0,
  isDeleting = false
) {
  const currentText = textArray[currentIndex];
  const currentChar = isDeleting
    ? currentText.slice(0, charIndex--)
    : currentText.slice(0, charIndex++);

  element.innerHTML = currentChar;

  // Typing and deleting speed
  let speed = isDeleting ? 100 : 200;

  if (!isDeleting && charIndex === currentText.length) {
    // Begin deleting
    isDeleting = true;
    speed = 500; // Pause before start deleting
  } else if (isDeleting && charIndex === 0) {
    // Move to the next text after deleting
    isDeleting = false;
    currentIndex = (currentIndex + 1) % textArray.length; // Loop through the array
  }

  setTimeout(
    () => typeWriter(element, textArray, currentIndex, charIndex, isDeleting),
    speed
  );
}

// Initialize the typewriter effect for each .typing element
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".typing");
  elements.forEach((element) => {
    const textArray = element.getAttribute("data-text").split(";"); // Split the text content on ';'
    typeWriter(element, textArray);
  });
});

function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff);
  return `#${hex.toString(16).padStart(6, "0")}`;
}
const longestLineDuration = 2000;

function changeTextColor() {
  const textElements = document.querySelectorAll("p");
  const randomColor = getRandomHexColor();

  textElements.forEach((element) => {
    element.style.color = randomColor;
  });
}
setInterval(changeTextColor, longestLineDuration);

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#contact .contact-form");
  var submitButton = document.querySelector('#contact input[type="submit"]');

  function resetButtonText() {
    submitButton.value = "Send";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submit action

    // Retrieve values from the form inputs
    var name = document.querySelector(
      '#contact .contact-form input[name="name"]'
    ).value;
    var email = document.querySelector(
      '#contact .contact-form input[name="email"]'
    ).value;
    var message = document.querySelector(
      '#contact .contact-form textarea[name="message"]'
    ).value;

    if (name === "" || email === "" || message === "") {
      submitButton.value = "Filling Missing Information";
    } else {
      // Log form data
      console.log("Form data:", { name, email, message });

      submitButton.value = "Thank you for your message";

      // Clear form fields
      form.reset();

      // Set a timeout to reset the button text after 5 seconds
      setTimeout(function () {
        submitButton.value = "Send";
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  });
  document
    .querySelector('#contact .contact-form input[name="name"]')
    .addEventListener("input", resetButtonText);
  document
    .querySelector('#contact .contact-form input[name="email"]')
    .addEventListener("input", resetButtonText);
  document
    .querySelector('#contact .contact-form textarea[name="message"]')
    .addEventListener("input", resetButtonText);
});
