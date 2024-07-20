const productForm = document.querySelector("form");

productForm.onsubmit = async function (event) {
  event.preventDefault();
  const element = event.target.elements;
  const title = element["title"].value;
  const price = parseFloat(element["price"].value);
  const image = element["image"].value;
  const description = element["description"].value;
  const category = element["category"].value;

  const { data } = await axios.post("https://dummyjson.com/products/add", {
    title: title,
    price: price,
    description: description,
    image: image,
    category: category,
  });

  console.log(data);
};
