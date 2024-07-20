const getProdcuts = async (limit, skip) => {
  // const { data } = await axios.get("https://dummyjson.com/products");
  const { data } = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail`
  );
  return data;
};

const paginate = (numOfPages, page) => {
  const paginate = document.querySelector(".pagination");

  const pages = [];

  if (page - 3 > 0) {
    pages.push(
      `<li class="page-item"><button class="page-link" >...</button></li>`
    );
  }

  for (let i = Math.max(0, page - 3); i < Math.min(numOfPages, page + 3); i++) {
    pages.push(
      `<li class="page-item"><button class="page-link" onclick=displayProducts(${i})>${
        i + 1
      }</button></li>`
    );
  }
  if (page + 3 < numOfPages) {
    pages.push(
      `<li class="page-item"><button class="page-link" >...</button></li>`
    );
  }

  const back =
    page == 1
      ? `<li class="page-item disabled"><button class="page-link" >&laquo;</button></li>`
      : `<li class="page-item"><button class="page-link" onclick=displayProducts(${
          page - 1
        })>&laquo;</button></li>`;

  const next =
    page == numOfPages
      ? `<li class="page-item disabled"><button class="page-link">&raquo;</button></li>`
      : `<li class="page-item"><button class="page-link" onclick=displayProducts(${
          page + 1
        })>&raquo;</button></li>`;

  paginate.innerHTML = `
    ${back}
    ${pages.join("")}  
    ${next}  
    `;
};

const displayProducts = async (page = 0) => {
  try {
    const limit = 20;
    const skip = page * limit;

    const { products, total } = await getProdcuts(limit, skip);

    const numberOfPages = Math.ceil(total / limit);
    paginate(numberOfPages, page + 1);

    const result = products
      .map(
        (prod) => `
    <div class="product">
      <a href='./details.html?id=${prod.id}'>
      <h2>${prod.title}</h2>
      <img src="${prod.thumbnail}" alt="${prod.title}" />
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
    const { data } = await axios.delete(`https://dummyjson.com/products/${id}`);
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
