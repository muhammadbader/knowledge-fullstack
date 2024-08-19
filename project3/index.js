const deal_products = {
  "imgs/slider/sl (1).png": "multi-vitamin eveday wellness",
  "imgs/slider/sl (6).png": "FULL RANGE VALUE PACK (SAVE 33%)",
  "imgs/slider/sl (7).png": "VITAMIN C: IMMUNITY SUPPORT",
  "imgs/slider/sl (8).png": "IRON: ENERGY SUPPORT",
};

// document.addEventListener("DOMContentLoaded", function () {
const start = function () {
  tabs = document.querySelectorAll(".nav-link");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((tab) => tab.classList.remove("selected-menu"));
      this.classList.add("selected-menu");
    });
  });

  const deals_slider = document.querySelector(".deals .slider");
  for (let img in deal_products) {
    deals_slider.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6">
    <div class="card">
            <img
              src="${img}"
              class="card-img-top"
              alt="sale product"
            />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              SALE
            <span class="visually-hidden">unread messages</span></span>
            <div class="card-body">
              <p>${deal_products[img]}</p>
            </div>
            </div>
    </div>`;
  }

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
};

start();

document.querySelector(".overlay").classList.add("d-none");
document.querySelector(".preview-deal").classList.add("d-none");

const previewDeal = async () => {
  const deals_slider_cards = document.querySelectorAll(".deals .slider .card");
  const preview_deal = document.querySelector(".preview-deal");

  deals_slider_cards.forEach((card) => {
    card.addEventListener("click", () => {
      preview_deal.classList.remove("d-none");
      preview_deal.innerHTML = `<div class="card mb-3 text-center" style="width: 40%;">
  <div class="card-body text-bg-warning">
    <h5 class="card-title ">Product Deal!!</h5>
    <p class="card-text">${card.getElementsByTagName("p")[0].innerText}</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
  <img src="${
    card.getElementsByTagName("img")[0].src
  }" class="card-img-top" alt="Deal Product">
  <a href="#" class="btn btn-success">Order Now!!</a>
</div>`;
    });
  });

  preview_deal.addEventListener("click", (event) => {
    if (event.target == preview_deal) {
      preview_deal.classList.add("d-none");
    }
  });
};

let light_theme = true;
const toggleTheme = () => {
  const body = document.querySelector("body");
  const nav = document.querySelector(".navbar");
  const light = document.querySelector(".themes .light");
  const dark = document.querySelector(".themes .dark");
  const real_results = document.querySelector(".real-results");

  light.addEventListener("click", (event) => {
    light.classList.add("d-none");
    dark.classList.remove("d-none");

    body.classList.remove("bg-dark");
    body.classList.remove("text-white");

    nav.classList.remove("bg-dark");
    nav.classList.remove("navbar-dark");
    nav.classList.add("bg-light");
    nav.classList.add("navbar-light");

    real_results.classList.remove("real-results-dark");
  });

  dark.addEventListener("click", (event) => {
    dark.classList.add("d-none");
    light.classList.remove("d-none");

    body.classList.add("bg-dark");
    body.classList.add("text-white");

    nav.classList.add("bg-dark");
    nav.classList.add("navbar-dark");
    nav.classList.remove("bg-light");
    nav.classList.remove("navbar-light");

    real_results.classList.add("real-results-dark");
  });

  if (light_theme) {
  } else {
  }
};

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4, // Number of items to display
    margin: 10, // Margin between items
    navigation: true,
    responsiveClass: true,
    responsive: {
      0: { items: 1 }, // Items for screen width 0px and up
      768: { items: 2 }, // Items for screen width 600px and up
    },
  });
});

previewDeal();
toggleTheme();
