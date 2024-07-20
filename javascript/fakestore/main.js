const getProdcuts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

const displayProducts = async () => {
  try {
    const products = await getProdcuts();
    const result = products
      .map(
        (prod) => `
    <div class="product">
    <a href='./details.html?id=${prod.id}'>
    <h2>${prod.title}</h2>
    <img src="${prod.image}" alt="${prod.title}" />
    </a>
    <button onclick="deleteProduct(${prod.id})"><h2>Delete</h2></button>
    </div>`
      )
      .join("");

    document.querySelector(".products").innerHTML = result;
    document.querySelector(".overlay").classList.add("display-none");
  } catch (error) {
    const result = `<h2>Error request<br />
    ${error["message"]}</h2>`;
    document.querySelector(".products").innerHTML = result;
    document.querySelector(".overlay").style.display = "none";
  }
};

const deleteProduct = async (id) => {
  try {
    const { data } = await axios.delete(
      `https://fakestoreapi.com/products/${id}`
    );
    console.log(data);
  } catch (error) {
    alert(error);
  }
};

const addProduct = async () => {};

displayProducts();

window.onscroll = () => {
  const navbar = document.querySelector("nav");
  const products = document.querySelector(".products-section");
  if (window.scrollY > products.offsetTop) {
    navbar.classList.add("productsNavBar");
  } else {
    navbar.classList.remove("productsNavBar");
  }
};
