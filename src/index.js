function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userDirectionsInput = document.querySelector("#user-directions");
  let apiKey = "a17bt048aac153ed9acb6efaf1a6aobf";
  let prompt = `User directions : Generate a poem about ${userDirectionsInput.value}`;
  let context =
    "You are a funny poem expert and love to write short poems. Please generate a 4 line poem and separate each line with a <br />. Make sure to ollow the user directions. Do not include a title. Sign the poem with 'SheCodes AI' using a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
