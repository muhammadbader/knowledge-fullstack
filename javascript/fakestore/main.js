const getProdcuts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/aproducts");
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

displayProducts();
