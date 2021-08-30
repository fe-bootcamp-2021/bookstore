export function createCart(title, author, quantity, price, id, count) {
  return {
    title: title,
    author: author,
    Quantity: quantity,
    price: price,
    id: id,
    availableCount: count,
  };
}
