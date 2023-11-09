import ClickCounter from "./clickCounter.js";
import CountStorage from "./countStorage.js";

let image = document.querySelector("img")
image.onclick = function () {
  let src = image.getAttribute("src")
  if (src !== "images/avatar.png") {
    image.setAttribute("src", "images/avatar.png")
  } else {
    image.setAttribute("src", "images/avatar2.png")
  }
}

new ClickCounter(".likes", "span.likesCount", new CountStorage("likesCount"))
new ClickCounter(".class", "span.classCount", new CountStorage("classCount"))
