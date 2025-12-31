const nikeSneakers = [
  {
    name: "Air Jordan 1 Retro High OG",
    description: "The classic high-top silhouette that started it all, with premium leather and iconic colorways.",
    price: 170,
    photo: "/images/nikeSneaker1.jpg",
    color: "Black/Red/White"
  },
  {
    name: "Nike Dunk Low 'Panda'",
    description: "Simple yet striking black and white color blocking, a streetwear staple.",
    price: 100,
    photo: "/images/nikeSneaker2.webp",
    color: "Black/White"
  },
  {
    name: "Air Jordan 4 Retro",
    description: "A timeless design with visible Air cushioning and mesh panels for breathability.",
    price: 190,
    photo: "/images/nikeSneaker3.webp",
    color: "White/Black/Fire Red"
  },
  {
    name: "Nike Dunk High 'Syracuse'",
    description: "Bold orange and white coloring inspired by Syracuse University, a Dunk High classic.",
    price: 120,
    photo: "/images/nikeSneaker4.webp",
    color: "Orange/White"
  }
];


const container = document.querySelector(".products-container");

nikeSneakers.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product-card");

  productDiv.innerHTML = `
    <img src="${product.photo}" alt="${product.name}" class="product-photo" />
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <p class="product-color">Color: ${product.color}</p>
      <p class="product-price">$${product.price}</p>
    </div>
  `;

  container.appendChild(productDiv);
});