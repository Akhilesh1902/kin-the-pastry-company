const { forStatement } = require("babel-types");
const { template } = require("lodash");
const form = document.querySelector("#contact-form");
const ctaBtn = document.querySelector(".hero .cta");
console.log(ctaBtn);
var modelTimer;
const modelTemplate = document.querySelector(`#model-template`);

document.addEventListener("click", (entry) => {
  if (entry.target.matches(".cta")) {
    console.log("button");
    createModel();
  }
  modelTimer = setInterval(clearModel, 2000);
});

// clearInterval(modelTimer);
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

function createModel() {
  const model = modelTemplate.content.cloneNode(true);
  console.log(model);

  ctaBtn.closest(".container").append(model);
}

function clearModel() {
  clearInterval(modelTimer);
  document.querySelector(".modelBg").remove();
}
