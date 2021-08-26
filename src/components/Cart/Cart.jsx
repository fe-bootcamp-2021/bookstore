export default function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  return (
    <>
      {cartItems.length ? (
        cartItems.map((item, idx) => <div key={idx}>I am an item</div>)
      ) : (
        <div>You have no items in cart yet</div>
      )}
    </>
  );
}
