const getProduct = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const displayProduct = async () => {
  const product = await getProduct();

  data = `
  <div>
  <h2>${product.title}</h2>
  <p>${product.description}</p>
  <h3>${product.price}$</h3>
  <img src="${product.image}" alt="${product.name}">
  </div>`;
  document.querySelector(".product-details").innerHTML = data;

  document.querySelector(".overlay").classList.add("display-none");
};

displayProduct();
