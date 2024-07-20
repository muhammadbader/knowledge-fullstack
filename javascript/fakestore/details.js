const getProduct = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  return data;
};

const displayProduct = async () => {
  const product = await getProduct();
  const images = product.images
    .map((img) => `<img src=${img} alt="${product.title}" />`)
    .join("");
  data = `
  <div>
  <h2>${product.title}</h2>
  <p>${product.description}</p>
  <h3>${product.price}$</h3>
  <div class="product-images">${images}</div>
  </div>`;
  document.querySelector(".product-details").innerHTML = data;

  document.querySelector(".overlay").classList.add("display-none");
};

displayProduct();
