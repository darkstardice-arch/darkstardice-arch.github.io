// ===== PRODUCTS DATA =====
// UPDATE THIS WITH YOUR ACTUAL PRODUCT INFORMATION
const products = [
    {
        id: 1,
        name: "Wish Dragon, 75mm D20",
        description: "wish dragon d20",
        fullDescription: "Tbd",
        price: 400,
        etsyLink: "https://darkstardice.etsy.com/listing/4311943951",
        imageUrl: "Images/Dragon Ball/PXL_20231219_035940158.jpg", // UPDATE with your actual filename
        badge: "Bestseller",
        includes: [
            "Hand painted figurine inside d20",
            "Custom stand to hold the d20",
            "Velvet drawstring pouch",
            "Handcrafted with premium resin",
            "Perfectly balanced for fair rolls"
        ]
    },
    {
        id: 2,
        name: "Mighty Cthulhu, 55mm D20",
        description: "D20 with Cthulhu figure",
        fullDescription: "Unleash the ancient power of Cthulhu with this one-of-a-kind d20. Measuring a massive 55mm from tip to tip, this die is sure to make a statement at the gaming table. The clear plastic epoxy material allows for a clear view of the intricate Cthulhu figure inside, adding a touch of eldritch horror to every roll. Whether you're a fan of Lovecraftian lore or just want a unique dice to add to your collection, this d20 is a must-have for any Dungeons and Dragons enthusiast.  This company is officially licensed to sell physical prints of Artisan Guild models, obtained through the Artisan Guild Patreon, Tribes or MyMiniFactory store. The original digital STL files of this model can be purchased by joining the Artisan Guild Patreon (https://www.patreon.com/ArtisanGuild), Tribes (https://www.myminifactory.com/es/users/Artisan_Guild?show=tribe) or MyMiniFactory store (https://www.myminifactory.com/es/users/Artisan_Guild).  link to model: https://www.myminifactory.com/object/3d-print-avatar-of-holmuran-185808",
        price: 150,
        etsyLink: "https://darkstardice.etsy.com/listing/1232271088",
        imageUrl: "Images/Cthulhu/PXL_20240327_065355445.jpg", // UPDATE with your actual filename
        badge: "Hot",
        includes: [
            "Hand painted figurine inside d20",
            "Custom stand to hold the d20",
            "Velvet drawstring pouch",
            "Handcrafted with premium resin",
            "Perfectly balanced for fair rolls"
        ]
    },
    {
        id: 3,
        name: "Enchanted Forest",
        description: "Emerald greens with mossy inclusions and sparkling glitter.",
        fullDescription: "Step into a magical forest with this enchanting dice set. Layers of emerald and jade green resin create depth, while subtle mossy inclusions and fine green glitter mimic dappled sunlight through leaves. The silver numbers shine brightly against the deep green background. These dice are perfectly balanced and tumbled smooth for a professional finish.",
        price: 65.75,
        etsyLink: "https://www.etsy.com/listing/YOUR-ACTUAL-LINK-HERE",
        imageUrl: "images/products/enchanted-forest.jpg", // UPDATE with your actual filename
        badge: null,
        includes: [
            "Hand painted figurine inside d20",
            "Custom stand to hold the d20",
            "Velvet drawstring pouch",
            "Mossy green inclusions",
            "Perfectly balanced"
        ]
    },
    {
        id: 4,
        name: "Midnight Shadow",
        description: "Deep black with purple and blue shimmer that appears in the light.",
        fullDescription: "Mysterious and elegant, the Midnight Shadow set appears black at first glance but reveals hidden depths of purple and blue shimmer when held to the light. This effect is achieved through specialized pigment techniques. The numbers are inked in a bright metallic silver for maximum readability in dim gaming environments.",
        price: 72.25,
        etsyLink: "https://www.etsy.com/listing/YOUR-ACTUAL-LINK-HERE",
        imageUrl: "images/products/midnight-shadow.jpg", // UPDATE with your actual filename
        badge: "Limited",
        includes: [
            "Hand painted figurine inside d20",
            "Custom stand to hold the d20",
            "Velvet drawstring pouch",
            "Hidden color-shift effect",
            "Metallic silver numbers"
        ]
    },
    {
        id: 5,
        name: "Arctic Frost",
        description: "Icy clear blue with white swirls and silver glitter.",
        fullDescription: "Feel the chill of the frozen north with the Arctic Frost dice set. Crystal clear blue resin captures the essence of glacial ice, with delicate white swirls resembling snowdrifts and fine silver glitter that sparkles like frost. The numbers are inked in a cool metallic blue that complements the icy theme.",
        price: 62.99,
        etsyLink: "https://www.etsy.com/listing/YOUR-ACTUAL-LINK-HERE",
        imageUrl: "images/products/arctic-frost.jpg", // UPDATE with your actual filename
        badge: null,
        includes: [
            "Hand painted figurine inside d20",
            "Custom stand to hold the d20",
            "Velvet drawstring pouch",
            "Icy blue and white swirls",
            "Silver glitter accents"
        ]
    },
    {
        id: 6,
        name: "Cthulhu Emerges",
        description: "75mm D20 with hand painded figurine inside",
        fullDescription: "Cthulhu emerging from the ocean grasping at a small boat",
        price: 400,
        etsyLink: "https://darkstardice.etsy.com/listing/1760905289",
        imageUrl: "Images/Cthulhu Emerges/PXL_20240712_152213259.jpg", // UPDATE with your actual filename
        badge: "Popular",
        includes: [
            "Hand painted figurine inside d20",
            "Custom stand to hold the d20",
            "Velvet drawstring pouch",
            "Handcrafted with premium resin",
            "Perfectly balanced for fair rolls"
        ]
    }
];

// ===== DOM ELEMENTS =====
const productsContainer = document.getElementById('productsContainer');
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close-modal');
const modalProductContent = document.getElementById('modalProductContent');
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');
const newsletterForm = document.getElementById('newsletterForm');
const currentYear = document.getElementById('currentYear');

// ===== INITIALIZE WEBSITE =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCurrentYear();
    setupEventListeners();
    setupSmoothScrolling();
});

// ===== RENDER PRODUCTS =====
function renderProducts() {
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.imageUrl}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-buttons">
                    <button class="view-details" data-id="${product.id}">View Details</button>
                    <a href="${product.etsyLink}" class="buy-now" target="_blank" rel="noopener">
                        <i class="fab fa-etsy"></i> Buy
                    </a>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to View Details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            openProductModal(productId);
        });
    });
}

// ===== PRODUCT MODAL =====
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const includesList = product.includes.map(item => `<li>${item}</li>`).join('');
    
    modalProductContent.innerHTML = `
        <div class="modal-image">
            <img src="${product.imageUrl}" alt="${product.name}">
        </div>
        <div class="modal-details">
            <h2>${product.name}</h2>
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <p class="modal-description">${product.fullDescription}</p>
            
            <div class="modal-price">$${product.price.toFixed(2)}</div>
            
            <div class="modal-includes">
                <h3>What's Included</h3>
                <ul>${includesList}</ul>
            </div>
            
            <div class="modal-actions">
                <a href="${product.etsyLink}" class="btn btn-etsy" target="_blank" rel="noopener">
                    <i class="fab fa-etsy"></i> Purchase on Etsy
                </a>
                <a href="https://www.etsy.com/shop/Darkstardice" class="btn" target="_blank" rel="noopener">
                    View All Sets
                </a>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Close modal
    closeModal.addEventListener('click', closeProductModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });

    // Mobile menu toggle
    mobileMenu.addEventListener('click', toggleMobileMenu);
    
    // Newsletter form
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('.newsletter-input');
        
        if (validateEmail(emailInput.value)) {
            // In a real implementation, you would send this to your email service
            alert('Thank you for joining the Dark Star Guild! You\'ll receive updates on new dice releases.');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// ===== UTILITY FUNCTIONS =====
function updateCurrentYear() {
    currentYear.textContent = new Date().getFullYear();
}

function toggleMobileMenu() {
    nav.classList.toggle('active');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                nav.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ADDITIONAL STYLING FOR MODAL =====
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal-description {
        margin: 1.5rem 0;
        line-height: 1.7;
    }
    
    .modal-price {
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary);
        margin: 1.5rem 0;
    }
    
    .modal-includes {
        margin: 1.5rem 0;
    }
    
    .modal-includes h3 {
        margin-bottom: 0.8rem;
        color: var(--dark);
    }
    
    .modal-includes ul {
        list-style: none;
        padding-left: 0;
    }
    
    .modal-includes li {
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--light-gray);
        display: flex;
        align-items: center;
    }
    
    .modal-includes li:before {
        content: "✓";
        color: var(--accent);
        font-weight: bold;
        margin-right: 10px;
    }
    
    .modal-actions {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    @media (max-width: 768px) {
        .modal-actions {
            flex-direction: column;
        }
        
        .modal-actions .btn {
            width: 100%;
            text-align: center;
        }
    }
`;

document.head.appendChild(modalStyles);



