const getProdcuts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

const displayProducts = async () => {
  const products = await getProdcuts();
  const result = products
    .map(
      (prod) => `
    <div class="product">
    <a href='./details.html?id=${prod.id}'>
    <h2>${prod.title}</h2>
    <img src="${prod.image}" alt="${prod.title}" />
    </a>
    </div>`
    )
    .join("");

  document.querySelector(".products").innerHTML = result;
};

displayProducts();
