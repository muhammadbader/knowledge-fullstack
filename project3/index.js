// todo: in slider section inside deals section
// todo: in products section inside deals section
// todo: in reviews section inside deals section

document.addEventListener("DOMContentLoaded", function () {
  tabs = document.querySelectorAll(".nav-link");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((tab) => tab.classList.remove("selected-menu"));
      this.classList.add("selected-menu");
    });
  });

  const carousel = document.querySelector("#carouselExampleAutoplaying");
  const carouselInner = carousel.querySelector(".carousel-inner-s");

  for (let i = 0; i < 8; i++) {
    carouselInner.innerHTML += `<div class="carousel-item-s">
            <img src="imgs/slider/sl (${i + 1}).png" alt="hashtag" />
          </div>`;
  }

  const items = carouselInner.querySelectorAll(".carousel-item-s");
  const totalItems = items.length;
  //   let currentIndex = 0;
  let x_auto = 0;
  const sliding_ratio = 15;
  const item_width = 25;
  let right = true;

  //   function updateCarousel() {
  //     const offset = -currentIndex * item_width; // Move by 25% of the width (one item)
  //     carouselInner.style.transform = `translateX(${offset}%)`;
  //   }

  //   carousel
  //     .querySelector(".carousel-control-next")
  //     .addEventListener("click", function () {
  //       currentIndex = (currentIndex + 1) % totalItems;
  //       updateCarousel();
  //     });

  carousel
    .querySelector(".carousel-control-next")
    .addEventListener("click", () => {
      if (right) {
        const offset = -x_auto * sliding_ratio;
        carouselInner.style.transform = `translateX(${offset}%)`;
        x_auto = x_auto + sliding_ratio / item_width;
        if (x_auto >= totalItems) right = !right;
      }
    });

  carousel
    .querySelector(".carousel-control-prev")
    .addEventListener("click", () => {
      if (!right) {
        const offset = -x_auto * sliding_ratio;
        carouselInner.style.transform = `translateX(${offset}%)`;
        x_auto = (x_auto - sliding_ratio / item_width) % totalItems;
        if (x_auto <= 0) right = !right;
      }
    });

  setInterval(function () {
    carousel.querySelector(".carousel-control-next").click();
  }, 500);

  setInterval(function () {
    carousel.querySelector(".carousel-control-prev").click();
  }, 500);
});
