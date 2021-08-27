let items = [];

try {
  items = JSON.parse(localStorage.getItem("cartItems"))
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  console.log(items);
} catch {
  console.log("LocalStorage error");
}

export { items };
