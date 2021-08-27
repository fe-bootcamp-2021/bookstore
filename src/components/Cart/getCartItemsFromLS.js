let items = [];

try {
  items = JSON.parse(localStorage.getItem("cartItems"));
} catch {
  console.log("LocalStorage error");
}

export { items };
