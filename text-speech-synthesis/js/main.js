//Init speech synth APi
const synth = window.speechSynthesis;

//Select DOM Elements
const textForm = document.querySelector("form");
const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector("#voice-select");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector("#rate-value");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector("#pitch-value");

//Init Voices Array
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();

  //loop through voices and create an option for each voice
  voices.forEach((voice) => {
    //Create an option DOM
    const option = document.createElement("option");

    //Fill the option with voice and language
    option.textContent = voice.name + "(" + voice.lang + ")";

    // Set needed option attributes
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

//Speak
const speak = () => {
  //check if speaking
  if (synth.speaking) {
    console.error("Aleardy speaking...");
    return;
  }

  if (textInput.value !== "") {
    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput.value);

    //Speak end
    speakText.onend = (e) => {
      console.log("Done speaking...");
    };

    //Speak error
    speakText.onerror = (e) => {
      console.error("Somethong went wrong");
    };

    // Selected Voice
    const selectedVoice =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    //Loop through voices
    voices.forEach((voice) => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    //Set pitch and rate
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;

    //Speak
    synth.speak(speakText);
  }
};

// EVENT LISTENERS

//Text form submit

textForm.addEventListener("submit", (e) => {
  e.preventDefault();

  speak();
  textInput.blur();
});

//Rate Value Change
rate.addEventListener("change", (e) => (rateValue.textContent = rate.value));

//Rate Value Change
pitch.addEventListener("change", (e) => (pitchValue.textContent = pitch.value));

//voice select change
voiceSelect.addEventListener("change", (e) => speak());
