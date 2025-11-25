const androidPhones = [
    // Téléphones Android utilisant des URLs directes
    { name: "Samsung Galaxy S24", price: "620 000 FCFA", image: "https://m.media-amazon.com/images/I/61+g6KrDXdL.jpg", os: 'android' },
    { name: "Google Pixel 8", price: "450 000 FCFA", image: "https://placehold.co/130x180/FF3300/FFFFFF?text=Pixel+8", os: 'android' },
    { name: "Xiaomi 13T", price: "290 000 FCFA", image: "https://placehold.co/130x180/8B0000/FFFFFF?text=Xiaomi+13T", os: 'android' },
    { name: "Tecno Spark 10", price: "95 000 FCFA", image: "https://placehold.co/130x180/008080/FFFFFF?text=Tecno+10", os: 'android' },
    { name: "Oppo Find X6", price: "380 000 FCFA", image: "https://placehold.co/130x180/4682B4/FFFFFF?text=Oppo+X6", os: 'android' },
    { name: "Motorola Edge 40", price: "250 000 FCFA", image: "https://placehold.co/130x180/DAA520/FFFFFF?text=Moto+40", os: 'android' },
    { name: "OnePlus 12", price: "420 000 FCFA", image: "https://placehold.co/130x180/3CB371/FFFFFF?text=OnePlus+12", os: 'android' },
];

const iphonePhones = [
    // Téléphones iPhone utilisant des URLs directes
    { name: "iPhone 15 Pro", price: "850 000 FCFA", image: "https://placehold.co/130x180/1a1a1a/FFFFFF?text=15+Pro", os: 'iphone' },
    { name: "iPhone 14", price: "480 000 FCFA", image: "https://placehold.co/130x180/4F4F4F/FFFFFF?text=iPhone+14", os: 'iphone' },
    { name: "iPhone 13 Pro", price: "350 000 FCFA", image: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-13-pro/iphone-13-pro-silver.jpg", os: 'iphone' },
    { name: "iPhone SE (2022)", price: "220 000 FCFA", image: "https://placehold.co/130x180/808080/FFFFFF?text=iPhone+SE", os: 'iphone' },
    { name: "iPhone 15", price: "650 000 FCFA", image: "https://placehold.co/130x180/2F4F4F/FFFFFF?text=iPhone+15", os: 'iphone' },
];

// Combine tous les téléphones pour la vue 'all'
const allPhonesData = [...androidPhones, ...iphonePhones];


// ===================================================================
// 2. ÉTAT GLOBAL
// ===================================================================

let currentView = 'all'; 


// ===================================================================
// 3. FONCTION DE CONSTRUCTION DU CATALOGUE (RENDER)
// ===================================================

// Rend les cartes HTML pour un ensemble de données donné dans le conteneur principal.
function renderPhones(data) {
    const catalogue = document.getElementById('catalogue-main');
    
    if (!catalogue) {
        console.error("Erreur: Le conteneur #catalogue-main est introuvable.");
        return;
    }

    catalogue.innerHTML = ''; 

    data.forEach(phone => {
        const card = document.createElement('div');
        card.className = 'phone-card';
        
        const badgeText = phone.os === 'iphone' ? 'iPhone' : 'Android';
        const badgeClass = phone.os;
        
        card.innerHTML = `
            <span class="os-badge ${badgeClass}">${badgeText}</span>
            <!-- L'image charge MAINTENANT à partir d'une URL Internet -->
            <img src="${phone.image}" alt="${phone.name}" class="phone-image" onerror="this.onerror=null; this.src='https://placehold.co/130x180/222222/FFFFFF?text=Erreur%20Image'">
            <p class="phone-name">${phone.name}</p>
            <p class="phone-price">Prix: <strong>${phone.price}</strong></p>
        `;
        
        catalogue.appendChild(card);
    });
    
    if (data.length === 0) {
        catalogue.innerHTML = '<p class="no-results">Aucun téléphone trouvé correspondant à votre recherche dans cette catégorie.</p>';
    }
}


// ===================================================================
// 4. LOGIQUE DE GESTION DES VUES ET DE RECHERCHE
// ===================================================================

// Fonction pour basculer entre les vues (All / iPhone / Android)
function changeView(view) {
    currentView = view;
    
    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`.nav-button[data-view="${view}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    document.getElementById('searchBar').value = '';
    filterPhones();
}

// Gère la logique de recherche et de filtre sur la vue ACTIVE
function filterPhones() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    let sourceData = allPhonesData;

    if (currentView === 'iphone') {
        sourceData = iphonePhones;
    } else if (currentView === 'android') {
        sourceData = androidPhones;
    }

    const filteredData = sourceData.filter(phone => {
        return phone.name.toLowerCase().includes(searchTerm);
    });

    renderPhones(filteredData);
}


// ===================================================================
// 5. INITIALISATION
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
    changeView('all');
    
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('keyup', filterPhones);
    }

    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const view = button.getAttribute('data-view');
            changeView(view);
        });
    });
});
