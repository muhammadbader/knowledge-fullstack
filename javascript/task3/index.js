var ul = document.querySelector(".generator-ul");

ul.innerHTML = ["go", "dart", "python"]
  .map((lang) => `<li>${lang}</li>`)
  .join("");
