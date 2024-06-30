async function getPizzaInfo() {
  const data = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=pizza"
  ).then((res) => res.json());

  console.log(data.count);

  const resulst = data.recipes
    .map(
      (pizza) =>
        `<div class="pizza-item">
        <div class=pizza-title><h4>${pizza.title}</h4></div>
        <img src=${pizza.image_url} /> 
    </div>`
    )
    .join("");

  document.querySelector(".pizza-types").innerHTML = resulst;
}

getPizzaInfo();
