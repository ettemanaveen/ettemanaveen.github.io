// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

const characters = ["John Joe Jameson", "William Willard Wormworth", "Margaret Mary McMathers"];

const locations = ["the beach", "the lake", "the pool"];

const actions = ["slipped and fell", "fell into the water and drowned", "fainted right on the spot"];

// Partial return random string function

function returnRandomStoryString() {
  // It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.
  const randomCharacter = randomValueFromArray(characters);
  const randomCharacter2 = randomValueFromArray(characters);
  const randomLocation = randomValueFromArray(locations);
  const randomAction = randomValueFromArray(actions);
  const storyText = `It was a perfect 83 Fahrenheit outside, so ${randomCharacter} and ${randomCharacter2} went to go swim. When they got to ${randomLocation}, they both ran to the water. Suddenly, ${randomCharacter2} ${randomAction}. Bob and ${randomCharacter} saw the whole thing, but was not surprised — ${randomCharacter2} weighs 300 pounds, and it was friday the 13th.`;

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature = Math.round((94-32) * 5/9) + " Celsius";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}