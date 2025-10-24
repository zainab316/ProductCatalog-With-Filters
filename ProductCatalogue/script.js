const products = [
  {id:1,name:"Sony Headphones",category:"Electronics",price:1200,img:"https://i.postimg.cc/GtM4fkJn/headphone.jpg"},
  {id:2,name:"Samsung Smart Watch",category:"Electronics",price:1500,img:"https://i.postimg.cc/WzfMZRy2/smartwatch.jpg"},
  {id:3,name:"HP Laptop",category:"Electronics",price:2000,img:"https://i.postimg.cc/Gp1mq70S/laptop.jpg"},
  {id:4,name:"Nike Shoes",category:"Fashion",price:900,img:"https://i.postimg.cc/FsztXjgT/nike.jpg"},
  {id:5,name:"Ray Ban Glass",category:"Fashion",price:2000,img:"https://i.postimg.cc/rFmjwjHM/rayban.jpg"},
  {id:6,name:"Wooden Table",category:"Home",price:1100,img:"https://i.postimg.cc/0jg618hZ/woodtable.jpg"},
  {id:7,name:"Cushion Set",category:"Home",price:400,img:"https://i.postimg.cc/9FjgXyhd/cushion.jpg"},
  {id:8,name:"Dior Bag",category:"Fashion",price:2000,img:"https://i.postimg.cc/1tqMs37w/dior.jpg"},
  {id:9,name:"Apple iPhone",category:"Electronics",price:1900,img:"https://i.postimg.cc/vZ403h70/phone.jpg"},
  {id:10,name:"Wall Clock",category:"Home",price:300,img:"https://i.postimg.cc/XNyFHPtr/wallclock.jpg"},
  {id:11,name:"Bluetooth Speaker",category:"Electronics",price:800,img:"https://i.postimg.cc/KzTXwFPF/mic.jpg"},
  {id:12,name:"Yoga Mat",category:"Sports",price:350,img:"https://i.postimg.cc/brjvFm2V/yogamat.jpg"},
  {id:13,name:"Cricket Bat",category:"Sports",price:750,img:"https://i.postimg.cc/JzLfF908/cricbat.jpg"},
  {id:14,name:"Lipstick Set",category:"Beauty",price:250,img:"https://i.postimg.cc/yYM18QNP/lipstickset.jpg"},
  {id:15,name:"Perfume",category:"Beauty",price:600,img:"https://i.postimg.cc/jS1Fbmqm/perfume.jpg"},
  {id:16,name:"Face Cream",category:"Beauty",price:300,img:"https://i.postimg.cc/L8KCXLFs/cream.jpg"},
  {id:17,name:"Tennis Racket",category:"Sports",price:950,img:"https://i.postimg.cc/FRzzLfXj/tennis.jpg"},
  {id:18,name:"Table Lamp",category:"Home",price:500,img:"https://i.postimg.cc/SNMXdz2C/tablelamp.jpg"},
  {id:19,name:"Gaming Keyboard",category:"Electronics",price:1000,img:"https://i.postimg.cc/tTkJ1hcq/keyboard.jpg"},
  {id:20,name:"Smart TV",category:"Electronics",price:2000,img:"https://i.postimg.cc/yYcmdGPd/tv.jpg"},
  {id:21,name:"Earring",category:"Fashion",price:800,img:"https://i.postimg.cc/dtB6qX6S/earrings.jpg"},
  {id:22,name:"Hair Dryer",category:"Beauty",price:450,img:"https://i.postimg.cc/t4sxLmMZ/hairpro.jpg"},
  {id:23,name:"Table Fan",category:"Home",price:600,img:"https://i.postimg.cc/595q3GhV/fan.jpg"},
  {id:24,name:"Sneakers",category:"Fashion",price:650,img:"https://i.postimg.cc/y80Z1S7q/sneaker.jpg"},
  {id:25,name:"Football",category:"Sports",price:400,img:"https://i.postimg.cc/FRycTdn2/football.jpg"},
  {id:26,name:"Makeup Kit",category:"Beauty",price:800,img:"https://i.postimg.cc/SQXjQzGr/makeup.jpg"},
  {id:27,name:"Curtains",category:"Home",price:700,img:"https://i.postimg.cc/4xPSSyjY/curtains.jpg"},
  {id:28,name:"Digital Camera",category:"Electronics",price:1700,img:"https://i.postimg.cc/vZCQDPHz/cam.jpg"},
  {id:29,name:"Maxi",category:"Fashion",price:700,img:"https://i.postimg.cc/WzMvFjzN/maxi.jpg"},
  {id:30,name:"Cap",category:"Fashion",price:600,img:"https://i.postimg.cc/Jn4d88V2/cap.jpg"}
];

let cart = [];
let wishlist = [];

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <p><small>${p.category}</small></p>
      <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
      <button class="btn" onclick="addToWishlist(${p.id})">❤</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  document.getElementById("cartCount").textContent = cart.length;
}

function addToWishlist(id) {
  const item = products.find(p => p.id === id);
  if (!wishlist.includes(item)) wishlist.push(item);
  document.getElementById("wishCount").textContent = wishlist.length;
}

function viewCart() {
  alert("Items in Cart: " + cart.map(i => i.name).join(", "));
}

function viewWishlist() {
  alert("Wishlist: " + wishlist.map(i => i.name).join(", "));
}

function viewAccount() {
  alert("Welcome to your account 💙");
}

document.getElementById("searchInput").addEventListener("input", e => {
  const search = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(search));
  displayProducts(filtered.length ? filtered : products);
});

document.getElementById("priceRange").addEventListener("input", e => {
  const value = e.target.value;
  document.getElementById("priceValue").textContent = "₹" + value;
  const filtered = products.filter(p => p.price <= value);
  displayProducts(filtered);
});

document.getElementById("categoryFilter").addEventListener("change", e => {
  const cat = e.target.value;
  displayProducts(cat ? products.filter(p => p.category === cat) : products);
});

displayProducts(products);