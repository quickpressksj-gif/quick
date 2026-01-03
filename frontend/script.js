let cart = {};

function toggleCart() {
  document.getElementById("cartDrawer").classList.toggle("open");
}

function addToCart(name, price) {
  if (cart[name]) {
    cart[name].qty++;
  } else {
    cart[name] = { price, qty: 1 };
  }
  renderCart();
  document.getElementById("cartDrawer").classList.add("open");
}

function changeQty(name, delta) {
  cart[name].qty += delta;
  if (cart[name].qty <= 0) {
    delete cart[name];
  }
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");
  cartItems.innerHTML = "";
  let total = 0;

  for (let item in cart) {
    total += cart[item].price * cart[item].qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        <div>
          <b>${item}</b><br>₹${cart[item].price}
        </div>
        <div class="qty">
          <button onclick="changeQty('${item}',-1)">-</button>
          ${cart[item].qty}
          <button onclick="changeQty('${item}',1)">+</button>
        </div>
      </div>
    `;
  }
  totalEl.innerText = total;
}
