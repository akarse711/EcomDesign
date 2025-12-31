const adidasSneakers = [
  {
    name: "Adidas Yeezy Boost 350 V2",
    description: "A sleek silhouette with Primeknit upper and Boost cushioning, designed by Kanye West.",
    price: 220,
    photo: "/images/adidasSneakers1.jpg",
    color: "Zebra"
  },
  {
    name: "Adidas Ultraboost 1.0",
    description: "A revolutionary running shoe that blends performance and street style with Boost midsoles.",
    price: 180,
    photo: "/images/adidasSneakers2.webp",
    color: "Core Black/White"
  },
  {
    name: "Adidas Samba OG",
    description: "Iconic indoor soccer shoe turned lifestyle essential, with a timeless leather upper.",
    price: 100,
    photo: "/images/adidasSneakers3.webp",
    color: "Cloud White/Core Black"
  },
  {
    name: "Adidas Superstar",
    description: "The classic shell-toe sneaker that defined an era, worn by legends across generations.",
    price: 90,
    photo: "/images/adidasSneakers4.webp",
    color: "White/Black"
  }
];

const container = document.querySelector(".products-container");

adidasSneakers.forEach(product => {
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