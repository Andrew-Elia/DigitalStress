var togle = document.querySelector("#infoToggle");
var box = document.querySelector(".info-popup");

function togleInfo() {
  if (box.getAttribute("active") == "1") {
    box.setAttribute("active", "0");
  } else {
    box.setAttribute("active", "1");
  }
}

togle.addEventListener("click", togleInfo);
