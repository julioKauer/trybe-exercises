var personName = "";

function complainMessage() {
  alert("I told you not to do that " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  } else {
    body.className = "";
  }
}
function finishTheStory() {
  document.getElementById("story").innerHTML =
    "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

window.onload = function () {
  let buttonMood = document.querySelector("#mood");
  buttonMood.addEventListener("click", goDark);
  
  let buttonComplain = document.querySelector("#dontClick");
  buttonComplain.addEventListener("click",function () {
    personName = document.querySelector("#name").value;
    complainMessage();
  });

  let buttonWhat = document.querySelector("#whatHappining");
  buttonWhat.addEventListener("click",finishTheStory)

  let textName = document.querySelector("#name");
  textName.addEventListener("input",typeAndScream);
};
