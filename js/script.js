// App State
const state = {
    currentUser: null,
    cart: [],
    wishlist: [],
    products: [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 99.99,
            category: "electronics",
            image: "data:image/jpeg;base64,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",
            description: "High-quality wireless headphones with noise cancellation and long battery life.",
            rating: 4.5,
            stock: 50,
            featured: true,
            bestSeller: true
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 199.99,
            category: "electronics",
            image: "https://easycart.in/wp-content/uploads/2023/05/1-8.jpg",
            description: "Advanced smartwatch with health monitoring, GPS, and smartphone notifications.",
            rating: 4.7,
            stock: 25,
            featured: true,
            bestSeller: false
        },
        {
            id: 3,
            name: "Cotton T-Shirt",
            price: 29.99,
            category: "fashion",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhIn7H9lkzoEL_VoJ0N0sLCtDTQleE-REKQjM6vYChZfk3AWacY4rxR9CdIWhzy_ZP3Wz7YS6AJ1GhTIUlj-QUMb7RT9tHIvfzTQomglw454N5jSrIjGEfnY_qc_CYiQkQO5Uqat28&usqp=CAc",
            description: "Comfortable 100% cotton t-shirt available in multiple colors and sizes.",
            rating: 4.3,
            stock: 100,
            featured: true,
            bestSeller: true
        },
        {
            id: 4,
            name: "Coffee Maker",
            price: 79.99,
            category: "home",
            image: "data:image/jpeg;base64,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",
            description: "Programmable coffee maker with thermal carafe and auto-shutoff feature.",
            rating: 4.6,
            stock: 30,
            featured: true,
            bestSeller: false
        },
        {
            id: 5,
            name: "Wireless Mouse",
            price: 39.99,
            category: "electronics",
            image: "https://placehold.co/300x300/131921/FFFFFF?text=Mouse",
            description: "Ergonomic wireless mouse with adjustable DPI and long battery life.",
            rating: 4.4,
            stock: 75,
            featured: false,
            bestSeller: true
        },
        {
            id: 6,
            name: "Yoga Mat",
            price: 49.99,
            category: "sports",
            image: "https://placehold.co/300x300/8B4513/FFFFFF?text=Yoga+Mat",
            description: "Non-slip yoga mat with carrying strap, perfect for home and studio use.",
            rating: 4.8,
            stock: 40,
            featured: false,
            bestSeller: false
        },
        {
            id: 7,
            name: "Leather Wallet",
            price: 59.99,
            category: "fashion",
            image: "https://placehold.co/300x300/8B0000/FFFFFF?text=Wallet",
            description: "Genuine leather wallet with multiple card slots and RFID protection.",
            rating: 4.5,
            stock: 60,
            featured: false,
            bestSeller: true
        },
        {
            id: 8,
            name: "Bluetooth Speaker",
            price: 89.99,
            category: "electronics",
            image: "https://placehold.co/300x300/000080/FFFFFF?text=Speaker",
            description: "Waterproof Bluetooth speaker with 20-hour battery life and deep bass.",
            rating: 4.6,
            stock: 35,
            featured: false,
            bestSeller: false
        },
        {
            id: 9,
            name: "Cookbook: Healthy Recipes",
            price: 24.99,
            category: "books",
            image: "https://placehold.co/300x300/FFFFFF/000000?text=Cookbook",
            description: "Over 100 delicious and healthy recipes for everyday cooking.",
            rating: 4.7,
            stock: 20,
            featured: false,
            bestSeller: false
        },
        {
            id: 10,
            name: "Action Figure",
            price: 34.99,
            category: "toys",
            image: "https://placehold.co/300x300/FF0000/FFFFFF?text=Action+Figure",
            description: "Collectible action figure with multiple points of articulation and accessories.",
            rating: 4.9,
            stock: 15,
            featured: false,
            bestSeller: false
        },
        {
            id: 11,
            name: "Running Shoes",
            price: 129.99,
            category: "sports",
            image: "https://placehold.co/300x300/000000/FFFFFF?text=Shoes",
            description: "Lightweight running shoes with advanced cushioning and breathable mesh.",
            rating: 4.6,
            stock: 45,
            featured: false,
            bestSeller: true
        },
        {
            id: 12,
            name: "Skincare Set",
            price: 69.99,
            category: "beauty",
            image: "https://placehold.co/300x300/FFC0CB/000000?text=Skincare",
            description: "Complete skincare set with cleanser, toner, moisturizer, and serum.",
            rating: 4.8,
            stock: 55,
            featured: false,
            bestSeller: false
        }
    ],
    currentProduct: null,
    currentPage: 'home',
    darkMode: false,
    orders: []
};

// DOM Elements
const pages = document.querySelectorAll('.page');
const userLink = document.getElementById('user-link');
const usernameText = document.getElementById('username-text');
const cartCount = document.getElementById('cart-count');
const toast = document.getElementById('toast');

// Initialize App
function init() {
    loadFromLocalStorage();
    updateUI();
    setupEventListeners();
    showPage('home');
    renderHome();
    startCarousel();
    renderMyOrders();
    renderAdminOrders();

    // Close dropdown on outside click
    document.addEventListener('click', function(e) {
        const userMenu = document.querySelector('.user-menu');
        const dropdown = document.getElementById('user-dropdown');
        if (!userMenu?.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
}

function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    const savedUser = localStorage.getItem('user');
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedOrders = localStorage.getItem('orders');

    if (savedCart) state.cart = JSON.parse(savedCart);
    if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);
    if (savedUser) state.currentUser = JSON.parse(savedUser);
    if (savedDarkMode === 'true') {
        state.darkMode = true;
        document.body.classList.add('dark-mode');
    }
    if (savedOrders) state.orders = JSON.parse(savedOrders);
}

function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('user', JSON.stringify(state.currentUser));
    localStorage.setItem('darkMode', state.darkMode);
    localStorage.setItem('orders', JSON.stringify(state.orders));
}

function setupEventListeners() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    const registerForm = document.getElementById('register-form');
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
}

function updateUI() {
    if (state.currentUser) {
        usernameText.textContent = `Hello, ${state.currentUser.name}`;
    } else {
        usernameText.textContent = 'Hello, Sign In';
        document.getElementById('user-dropdown').style.display = 'none';
    }

    const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;

    saveToLocalStorage();
}

function navigateTo(page) {
    showPage(page);
    state.currentPage = page;
}

function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function showCart() {
    navigateTo('cart');
    renderCart();
}

// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function startCarousel() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

function changeSlide(n) {
    currentSlide = n;
    showSlide(n);
}

// Authentication
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    state.currentUser = { id: 1, name: email.split('@')[0], email };
    showToast('Logged in successfully!');
    updateUI();
    navigateTo('home');
    e.target.reset();
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;

    if (password !== confirm) {
        showToast('Passwords do not match!');
        return;
    }

    state.currentUser = { id: 1, name, email };
    showToast('Account created successfully!');
    updateUI();
    navigateTo('home');
    e.target.reset();
}

function logout() {
    state.currentUser = null;
    updateUI();
    navigateTo('home');
    showToast('Logged out successfully.');
}

function handleUserClick() {
    if (state.currentUser) {
        const dropdown = document.getElementById('user-dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    } else {
        navigateTo('login');
    }
}

// Product Rendering
function renderHome() {
    renderProductSection('best-sellers', state.products.filter(p => p.bestSeller));
    renderProductSection('todays-deals', state.products.slice(0, 6));
    renderProductSection('recommended', state.products.slice(6, 12));
}

function renderProductSection(elementId, products) {
    const container = document.getElementById(elementId);
    if (!container) return;
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-img"><img src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/300x300/CCCCCC/000000?text=Image+Not+Found'"/></div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="product-price">$${p.price.toFixed(2)}</div>
                <div class="product-rating">${generateStars(p.rating)} <span>(${Math.floor(Math.random()*900)+100})</span></div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
                    <button class="add-to-wishlist" onclick="toggleWishlist(${p.id})"><i class="far fa-heart"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

function generateStars(rating) {
    let s = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) s += '<i class="fas fa-star"></i>';
        else if (i - 0.5 <= rating) s += '<i class="fas fa-star-half-alt"></i>';
        else s += '<i class="far fa-star"></i>';
    }
    return s;
}

function filterByCategory(category) {
    navigateTo('products');
    document.getElementById('category-title').textContent = category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1) + ' Products';
    const filtered = category === 'all' ? state.products : state.products.filter(p => p.category === category);
    renderProducts(filtered);
}

function renderProducts(products) {
    const container = document.getElementById('products-grid');
    if (!container) return;
    container.innerHTML = products.map(p => `
        <div class="product-card" onclick="viewProduct(${p.id})">
            <div class="product-img"><img src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/300x300/CCCCCC/000000?text=Image+Not+Found'"/></div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="product-price">$${p.price.toFixed(2)}</div>
                <div class="product-rating">${generateStars(p.rating)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
                    <button class="add-to-wishlist" onclick="event.stopPropagation(); toggleWishlist(${p.id})"><i class="far fa-heart"></i></button>
                </div>
            </div>
        </div>
    `).join('');
}

function sortProducts() {
    const sortBy = document.getElementById('sort-select').value;
    let sorted = [...state.products];
    switch (sortBy) {
        case 'price-asc': sorted.sort((a,b) => a.price - b.price); break;
        case 'price-desc': sorted.sort((a,b) => b.price - a.price); break;
        case 'newest': sorted.reverse(); break;
        case 'rating': sorted.sort((a,b) => b.rating - a.rating); break;
    }
    renderProducts(sorted);
}

function viewProduct(productId) {
    const p = state.products.find(p => p.id === productId);
    if (!p) return;
    state.currentProduct = p;
    navigateTo('product-detail');
    renderProductDetail(p);
}

function renderProductDetail(p) {
    const container = document.getElementById('product-detail-content');
    if (!container) return;
    container.innerHTML = `
        <div class="product-images">
            <div class="main-image"><img src="${p.image}" alt="${p.name}" id="main-product-image"/></div>
            <div class="thumbnail-images">
                <div class="thumbnail active" onclick="changeMainImage('${p.image}')"><img src="${p.image}" alt=""/></div>
                <div class="thumbnail" onclick="changeMainImage('https://placehold.co/300x300/CCCCCC/000000?text=Image+2')"><img src="https://placehold.co/300x300/CCCCCC/000000?text=Image+2" alt=""/></div>
                <div class="thumbnail" onclick="changeMainImage('https://placehold.co/300x300/CCCCCC/000000?text=Image+3')"><img src="https://placehold.co/300x300/CCCCCC/000000?text=Image+3" alt=""/></div>
            </div>
        </div>
        <div class="product-meta">
            <h1>${p.name}</h1>
            <p>${p.description}</p>
            <div class="product-price">$${p.price.toFixed(2)}</div>
            <div class="product-stock">In Stock</div>
            <div class="quantity-selector">
                <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                <input type="text" class="quantity-input" id="product-quantity" value="1"/>
                <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
            </div>
            <button class="buy-now" onclick="buyNow(${p.id})">Buy Now</button>
            <button class="add-to-cart-detail" onclick="addToCart(${p.id}, document.getElementById('product-quantity').value)">Add to Cart</button>
        </div>
    `;
}

let productQuantity = 1;
function changeQuantity(change) {
    productQuantity = Math.max(1, productQuantity + change);
    document.getElementById('product-quantity').value = productQuantity;
}

function addToCart(productId, quantity = 1) {
    quantity = parseInt(quantity) || 1;
    const p = state.products.find(p => p.id === productId);
    if (!p) return;
    const item = state.cart.find(i => i.product.id === productId);
    if (item) item.quantity += quantity;
    else state.cart.push({ product: p, quantity });
    updateUI();
    renderCart();
    showToast(`${p.name} added to cart!`);
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    if (state.cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
        updateCartTotals();
        return;
    }
    container.innerHTML = state.cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-img"><img src="${item.product.image}" alt="${item.product.name}"/></div>
                <div><div class="cart-item-title">${item.product.name}</div></div>
            </div>
            <div class="cart-item-price">$${item.product.price.toFixed(2)}</div>
            <div class="cart-item-quantity">
                <button class="qty-btn" onclick="updateCartItem(${item.product.id}, -1)">-</button>
                <input type="text" class="qty-input" value="${item.quantity}" onchange="updateCartItemQuantity(${item.product.id}, this.value)"/>
                <button class="qty-btn" onclick="updateCartItem(${item.product.id}, 1)">+</button>
            </div>
            <div class="cart-item-total">$${(item.product.price * item.quantity).toFixed(2)}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.product.id})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
    updateCartTotals();
}

function updateCartItem(id, change) {
    const item = state.cart.find(i => i.product.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) removeFromCart(id);
    updateUI();
    renderCart();
}

function updateCartItemQuantity(id, value) {
    const qty = Math.max(1, parseInt(value) || 1);
    const item = state.cart.find(i => i.product.id === id);
    if (item) item.quantity = qty;
    updateUI();
    renderCart();
}

function removeFromCart(id) {
    state.cart = state.cart.filter(i => i.product.id !== id);
    updateUI();
    renderCart();
}

function updateCartTotals() {
    const subtotal = state.cart.reduce((s, i) => s + i.product.price * i.quantity, 0);
    const shipping = subtotal > 0 ? 5.99 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    ['cart', 'checkout'].forEach(prefix => {
        document.getElementById(`${prefix}-subtotal`).textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById(`${prefix}-shipping`).textContent = `$${shipping.toFixed(2)}`;
        document.getElementById(`${prefix}-tax`).textContent = `$${tax.toFixed(2)}`;
        document.getElementById(`${prefix}-total`).textContent = `$${total.toFixed(2)}`;
    });
}

function renderCheckoutItems() {
    const container = document.getElementById('checkout-items');
    if (!container) return;
    container.innerHTML = state.cart.map(i => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-img"><img src="${i.product.image}" alt="${i.product.name}"/></div>
                <div><div class="cart-item-title">${i.product.name}</div></div>
            </div>
            <div class="cart-item-quantity">Qty: ${i.quantity}</div>
            <div class="cart-item-total">$${(i.product.price * i.quantity).toFixed(2)}</div>
        </div>
    `).join('');
    updateCartTotals();
}

// Wishlist
function toggleWishlist(id) {
    const i = state.wishlist.indexOf(id);
    if (i === -1) {
        state.wishlist.push(id);
        showToast('Added to wishlist!');
    } else {
        state.wishlist.splice(i, 1);
        showToast('Removed from wishlist!');
    }
    updateUI();
    renderWishlist();
}

function renderWishlist() {
    const container = document.getElementById('wishlist-items');
    if (!container) return;
    if (state.wishlist.length === 0) {
        container.innerHTML = '<p>Your wishlist is empty.</p>';
        return;
    }
    const products = state.products.filter(p => state.wishlist.includes(p.id));
    container.innerHTML = products.map(p => `
        <div class="wishlist-item">
            <div class="wishlist-item-img"><img src="${p.image}" alt="${p.name}"/></div>
            <div class="wishlist-item-info">
                <div>${p.name}</div>
                <div>$${p.price.toFixed(2)}</div>
            </div>
            <div class="wishlist-actions">
                <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
                <button class="btn btn-danger" onclick="toggleWishlist(${p.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

// Orders
function renderMyOrders() {
    const container = document.getElementById('orders-list');
    if (!container) return;
    if (!state.currentUser) {
        container.innerHTML = '<p>Please <a href="#" onclick="navigateTo(\'login\')">sign in</a> to view your orders.</p>';
        return;
    }
    if (state.orders.length === 0) {
        container.innerHTML = '<p>You haven\'t placed any orders yet.</p>';
        return;
    }
    container.innerHTML = state.orders.map(o => `
        <div class="order-item">
            <div class="order-header"><div><div>Order #${o.id}</div><div>Placed on ${o.date}</div></div><div>$${o.total.toFixed(2)}</div></div>
            <div class="order-items">${o.items.map(i => `<div><img src="${i.product.image}" alt=""/><p>${i.product.name}</p></div>`).join('')}</div>
            <div>Shipped to: ${o.shipping.name}</div>
        </div>
    `).join('');
}

// Admin
function switchAdminTab(tab, id) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-form > div, .product-management').forEach(t => t.style.display = 'none');
    tab.classList.add('active');
    document.getElementById(id).style.display = 'block';
    if (id === 'manage-products') renderProductList();
    else if (id === 'manage-orders') renderAdminOrders();
}

function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const category = document.getElementById('product-category').value;
    const image = document.getElementById('product-image').value;
    const description = document.getElementById('product-description').value;
    if (!name || !price || !category || !image || !description) {
        showToast('Please fill all fields');
        return;
    }
    const newId = Math.max(...state.products.map(p => p.id)) + 1;
    state.products.push({ id: newId, name, price, category, image, description, rating: 4.0, stock: 10, featured: false, bestSeller: false });
    showToast('Product added!');
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-image').value = '';
    document.getElementById('product-description').value = '';
    renderProductList();
}

function renderProductList() {
    const tbody = document.getElementById('product-list-body');
    if (!tbody) return;
    tbody.innerHTML = state.products.map(p => `
        <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>$${p.price.toFixed(2)}</td>
            <td>${p.category}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editProduct(${p.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteProduct(${p.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function editProduct(id) {
    const p = state.products.find(p => p.id === id);
    if (!p) return;
    const name = prompt('Name:', p.name);
    const price = prompt('Price:', p.price);
    if (name !== null) p.name = name;
    if (price !== null) p.price = parseFloat(price);
    showToast('Updated!');
    renderProductList();
}

function deleteProduct(id) {
    if (confirm('Delete this product?')) {
        state.products = state.products.filter(p => p.id !== id);
        state.cart = state.cart.filter(i => i.product.id !== id);
        showToast('Deleted!');
        updateUI();
        renderProductList();
        renderHome();
    }
}

function renderAdminOrders() {
    const container = document.getElementById('admin-orders-list');
    if (!container) return;
    if (state.orders.length === 0) {
        container.innerHTML = '<p>No orders yet.</p>';
        return;
    }
    container.innerHTML = `
        <table>
            <thead><tr><th>Order ID</th><th>Customer</th><th>Date</th><th>Total</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
                ${state.orders.map(o => `
                <tr>
                    <td>#${o.id}</td>
                    <td>${o.user.name}</td>
                    <td>${o.date}</td>
                    <td>$${o.total.toFixed(2)}</td>
                    <td><span class="status-badge">${o.status}</span></td>
                    <td><button class="action-btn edit-btn" onclick="updateOrderStatus(${o.id})">Update</button></td>
                </tr>
                `).join('')}
            </tbody>
        </table>`;
}

function updateOrderStatus(id) {
    const o = state.orders.find(o => o.id === id);
    if (!o) return;
    const statuses = ['Processing', 'Shipped', 'Delivered', 'Cancelled'];
    const i = (statuses.indexOf(o.status) + 1) % statuses.length;
    o.status = statuses[i];
    showToast(`Order #${id} → ${o.status}`);
    renderAdminOrders();
    renderMyOrders();
    saveToLocalStorage();
}

// Checkout
function selectPayment(el) {
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
}

function placeOrder() {
    if (state.cart.length === 0) {
        showToast('Cart is empty!');
        return;
    }
    const req = ['first-name','last-name','address','city','state','zip','phone'];
    if (req.some(id => !document.getElementById(id).value)) {
        showToast('Fill all shipping info');
        return;
    }
    if (!document.querySelector('.payment-option.selected')) {
        showToast('Select payment method');
        return;
    }
    const subtotal = state.cart.reduce((s, i) => s + i.product.price * i.quantity, 0);
    const shipping = 5.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    const orderNumber = Math.floor(100000000 + Math.random() * 900000000);
    document.getElementById('order-number').textContent = orderNumber;

    const newOrder = {
        id: orderNumber,
        user: state.currentUser,
        items: [...state.cart],
        total,
        date: new Date().toLocaleDateString(),
        status: 'Processing',
        shipping: {
            name: `${document.getElementById('first-name').value} ${document.getElementById('last-name').value}`,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value,
            phone: document.getElementById('phone').value
        },
        payment: document.querySelector('.payment-option.selected div').textContent
    };

    state.orders.push(newOrder);
    state.cart = [];
    updateUI();
    navigateTo('confirmation');
    showToast('Order placed!');
    renderMyOrders();
    renderAdminOrders();
    saveToLocalStorage();
}

// Search
function searchProducts() {
    const input = document.getElementById('search-input');
    const query = input.value.trim().toLowerCase();

    if (query.length < 2) {
        showToast('Please enter at least 2 characters');
        return;
    }

    const filtered = state.products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
    );

    navigateTo('products');
    document.getElementById('category-title').textContent = `Search Results for "${query}"`;
    renderProducts(filtered);
}
function handleSearchKey(event) {
    if (event.key === 'Enter') {
        searchProducts(); // Trigger search
        event.target.value = ''; // ✅ Clear input after search
    }
}
// Dark Mode
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark-mode', state.darkMode);
    saveToLocalStorage();
}

// Toast
function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Change Main Image
function changeMainImage(src) {
    document.getElementById('main-product-image').src = src;
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    event.target.parentElement.classList.add('active');
}

// DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    renderCart();
    renderWishlist();
    renderCheckoutItems();
});
function buyNow(productId) {
    const quantity = parseInt(document.getElementById('product-quantity').value) || 1;
    const product = state.products.find(p => p.id === productId);
    if (!product) {
        showToast('Product not found!');
        return;
    }

    // Add to cart (replace if exists)
    const existing = state.cart.find(item => item.product.id === productId);
    if (existing) {
        existing.quantity = quantity;
    } else {
        state.cart.push({
            product: product,
            quantity: quantity
        });
    }

    updateUI();
    renderCart();
    renderCheckoutItems();
    navigateTo('checkout');
    showToast(`${product.name} is ready for checkout!`);
}

// Make Global
window.navigateTo = navigateTo;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.filterByCategory = filterByCategory;
window.sortProducts = sortProducts;
window.viewProduct = viewProduct;
window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;
window.updateCartItem = updateCartItem;
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeFromCart = removeFromCart;
window.selectPayment = selectPayment;
window.placeOrder = placeOrder;
window.searchProducts = searchProducts;
window.toggleDarkMode = toggleDarkMode;
window.changeSlide = changeSlide;
window.changeQuantity = changeQuantity;
window.switchAdminTab = switchAdminTab;
window.addProduct = addProduct;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.changeMainImage = changeMainImage;
window.renderMyOrders = renderMyOrders;
window.renderAdminOrders = renderAdminOrders;
window.updateOrderStatus = updateOrderStatus;
window.showCart = showCart;
window.logout = logout;
window.handleUserClick = handleUserClick;