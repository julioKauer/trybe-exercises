window.onload = function () {
  let backgroundColorSelector = document.querySelector("#background-color");
  let fontColorSelector = document.querySelector("#color");
  let fontSizeSelector = document.querySelector("#font-size");
  let lineHeightSelector = document.querySelector("#font-spacing");
  let fontFamilySelector = document.querySelector("#font-family");
  let body = document.querySelector("body");
  let article = document.querySelector("article");

  if (localStorage.backgroundColor !== undefined) {
    body.style.backgroundColor = `${localStorage.backgroundColor}`;
    body.style.color = `${localStorage.color}`;
    article.style.fontSize = `${localStorage.fontSize}`;
    article.style.lineHeight = `${localStorage.lineHeight}`;
    article.style.fontFamily = `${localStorage.fontFamily}`;

    backgroundColorSelector.value = `${localStorage.backgroundColor}`;
    fontColorSelector.value = `${localStorage.color}`;
    fontSizeSelector.value = parseInt(localStorage.fontSize);
    lineHeightSelector.value = parseFloat(localStorage.lineHeight);
    fontFamilySelector.value = `${localStorage.fontFamily}`;
  } else {
    localStorage.setItem("backgroundColor", "#ffffff");
    localStorage.setItem("color", "#000000");
    localStorage.setItem("fontSize", "16px");
    localStorage.setItem("lineHeight", "1.5em");
    localStorage.setItem("fontFamily", "serif");

    backgroundColorSelector.value = `${localStorage.backgroundColor}`;
    fontColorSelector.value = `${localStorage.color}`;
    fontSizeSelector.value = parseInt(localStorage.fontSize);
    lineHeightSelector.value = parseFloat(localStorage.lineHeight);
    fontFamilySelector.value = `${localStorage.fontFamily}`;
  }

  backgroundColorSelector.addEventListener("change", function () {
    body.style.backgroundColor = `${backgroundColorSelector.value}`;
    localStorage.backgroundColor = `${backgroundColorSelector.value}`;
  });
  fontColorSelector.addEventListener("change", function () {
    body.style.color = `${fontColorSelector.value}`;
    localStorage.color = `${fontColorSelector.value}`;
  });
  fontSizeSelector.addEventListener("change", function () {
    article.style.fontSize = `${fontSizeSelector.value}px`;
    localStorage.fontSize = `${fontSizeSelector.value}px`;
  });
  lineHeightSelector.addEventListener("change", function () {
    article.style.lineHeight = `${lineHeightSelector.value}em`;
    localStorage.lineHeight = `${lineHeightSelector.value}em`;
  });
  fontFamilySelector.addEventListener("change", function () {
    article.style.fontFamily = `${fontFamilySelector.value}`;
    localStorage.fontFamily = `${fontFamilySelector.value}`;
  });
};
