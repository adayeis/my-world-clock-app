function displayTime() {
  // New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format("hh:mm:ss");

  // Istanbul
  let istanbulElement = document.querySelector("#istanbul");
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  let istanbulTime = moment().tz("Asia/Istanbul");
  istanbulDateElement.innerHTML = istanbulTime.format("MMMM Do YYYY");
  istanbulTimeElement.innerHTML = istanbulTime.format("hh:mm:ss");

  // Zurcih
  let zurichElement = document.querySelector("#zurich");
  let zurichDateElement = zurichElement.querySelector(".date");
  let zurichTimeElement = zurichElement.querySelector(".time");
  let zurichTime = moment().tz("Europe/Zurich");
  zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
  zurichTimeElement.innerHTML = zurichTime.format("hh:mm:ss");

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format("hh:mm:ss");

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("hh:mm:ss");
}

displayTime();
setInterval(displayTime, 1000);
