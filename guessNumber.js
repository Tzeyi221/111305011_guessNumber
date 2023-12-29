// Global variables
let secretNumber = generateRandomNumber();

// Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to check the user's guess
function checkGuess() {
  // Local variable
  let userGuess = document.getElementById("userGuess").value;
  let resultElement = document.getElementById("result");

  // Convert user's guess to an integer
  userGuess = parseInt(userGuess);

  if (isNaN(userGuess)) {
    alert("Please enter a valid number.");
    return;
  }

  // If the answer is correct, then output "Congratulations! You guessed the correct number!" with picture2 and music2.
  if (userGuess === secretNumber) {
    showImageAndPlaySound("picture2.jpeg", "music2.mp3");
    alert("Congratulations! You guessed the correct number!");
    // Generate a new random number for the next round
    secretNumber = generateRandomNumber();
  } else {
    // If the answer is wrong, then output "Sorry, try again!" with picture1 and music1.
    showImageAndPlaySound("picture1.jpeg", "music1.mp3");
    alert("Sorry, try again!");
  }

  // Clear the input field for the next guess
  document.getElementById("userGuess").value = "";
}

// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  

  // Create image element
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  // Create audio element
  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  // Append elements to the result container
  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
