export function createCart(
  title,
  author,
  quantity,
  price,
  id,
  count,
  img,
  genre,
  yearPublished,
  isbn
) {
  return {
    title: title,
    author: author,
    Quantity: quantity,
    count: quantity,
    price: price,
    id: id,
    availableCount: count,
    img,
    genre,
    yearPublished,
    isbn,
  };
}
