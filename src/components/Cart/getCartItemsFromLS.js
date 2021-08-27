let items = [];

try {
  let temp = localStorage.getItem("cartItems");
  if (temp) {
    items = JSON.parse(temp);
  }
} catch {
  console.log("LocalStorage error");
}

export { items };
