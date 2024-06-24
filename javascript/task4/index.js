result = document.querySelector(".result");
currencies = {
  NIS: 1,
  Dollar: 3.5,
  Dinar: 5,
};

document.querySelector(".exchangeForm").onsubmit = (event) => {
  event.preventDefault(); // prevent reload

  form = event.target;
  var amount = parseInt(form.elements["amount"].value);
  // 'elements' in form is for the name in HTML
  amount = isNaN(amount) ? 0 : amount;

  const currency = form.elements["exchange"].value;
  const final_value = currencies[currency] * amount;
  result.innerHTML = final_value;
};
