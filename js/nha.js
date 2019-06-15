document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const options = {
    eventType: "keydown",
    keystrokeDelay: 1000
  };

  keyMapper([nhaCallback], options);
});

function keyMapper(callbackList, options) {
  const eventType = (options && options.eventType) || "keydown";
  const keystrokeDelay = (options && options.keystrokeDelay) || 1000;

  let state = {
    buffer: [],
    lastKeyTime: Date.now()
  };

  document.addEventListener(eventType, event => {
    const key = event.key;
    const currentTime = Date.now();
    let buffer = [];

    if (currentTime - state.lastKeyTime > keystrokeDelay) {
      buffer = [key];
    } else {
      buffer = [...state.buffer, key];
    }

    state = { buffer: buffer, lastKeyTime: currentTime };

    callbackList.forEach(callback => callback(buffer));
  });
}

function nhaCallback(keySequence) {
  if (keySequence.join("").toLowerCase() === "rita") {
    console.log("NHAAAAAAAA!");
    var x = document.querySelectorAll("p, a, h1, h2, h3, h4, h5, h6");
    x.forEach(node => {
      node.innerText = replaceNha(node.innerText);
    });
  }
}

function replaceNha(text) {
  return text
    .split(" ")
    .map(() => "nha")
    .join(" ");
}
