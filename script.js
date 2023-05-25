window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

function delay(min, max) {
  return new Promise((resolve) => {
    const delayTime = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(() => {
      resolve(delayTime);
    }, delayTime);
  });
}

const promises = [
  delay(1000, 5000),
  delay(1000, 5000),
  delay(1000, 5000),
  delay(1000, 5000),
  delay(1000, 5000)
];

const outputElement = document.getElementById("output");

Promise.any(promises).then((result) => {
  outputElement.textContent = result;
});
