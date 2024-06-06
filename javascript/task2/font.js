var title = document.querySelector(".title");
var paragraph = document.querySelector(".front-para");

var enlargeBtn = document.querySelector(".enlarge");
var shrinkBtn = document.querySelector(".shrink");

const enlargeText = () => {
  var fontSize = parseFloat(window.getComputedStyle(title).fontSize);

  title.style.fontSize = `${fontSize * 2}px`;
};

const shrinkText = () => {
  var fontSize = parseFloat(window.getComputedStyle(paragraph).fontSize);

  paragraph.style.fontSize = `${fontSize / 2}px`;
};

enlargeBtn.onclick = enlargeText;
shrinkBtn.onclick = shrinkText;
