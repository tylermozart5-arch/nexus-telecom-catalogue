const androidPhones = [
    // Téléphones Android utilisant les chemins locaux du dossier 'images'
    { name: "Samsung Galaxy S24", price: "620 000 FCFA", image: "images/android_samsung.png", os: 'android' },
    { name: "Google Pixel 8", price: "450 000 FCFA", image: "images/android_pixel.png", os: 'android' },
    { name: "Xiaomi 13T", price: "290 000 FCFA", image: "images/android_xiaomi.png", os: 'android' },
    { name: "Tecno Spark 10", price: "95 000 FCFA", image: "images/android_tecno.png", os: 'android' },
    { name: "Oppo Find X6", price: "380 000 FCFA", image: "images/android_oppo.png", os: 'android' },
    { name: "Motorola Edge 40", price: "250 000 FCFA", image: "images/android_moto.png", os: 'android' },
];

const iphonePhones = [
    // Téléphones iPhone utilisant les chemins locaux du dossier 'images'
    { name: "iPhone 15 Pro", price: "850 000 FCFA", image: "images/iphone_15_pro.png", os: 'iphone' },
    { name: "iPhone 14", price: "480 000 FCFA", image: "images/iphone_14.png", os: 'iphone' },
    { name: "iPhone 13", price: "350 000 FCFA", image: "images/iphone_13.png", os: 'iphone' },
    { name: "iPhone SE (2022)", price: "220 000 FCFA", image: "images/iphone_se.png", os: 'iphone' },
];

// Combine tous les téléphones pour la vue 'all'
const allPhonesData = [...androidPhones, ...iphonePhones];


// ===================================================================
// 2. ÉTAT GLOBAL (La modale n'est plus utilisée, les fonctions showPrice/closePrice sont retirées)
// ===================================================================

// Variable pour suivre la vue active ('all', 'iphone' ou 'android')
let currentView = 'all'; 


// ===================================================================
// 3. FONCTION DE CONSTRUCTION DU CATALOGUE (RENDER)
// ===================================================================

// Rend les cartes HTML pour un ensemble de données donné dans le conteneur principal.
function renderPhones(data) {
    // Le conteneur est #catalogue-main
    const catalogue = document.getElementById('catalogue-main');
    
    if (!catalogue) {
        console.error("Erreur: Le conteneur #catalogue-main est introuvable.");
        return;
    }

    catalogue.innerHTML = ''; 

    data.forEach(phone => {
        const card = document.createElement('div');
        // IMPORTANT: L'attribut 'onclick' pour afficher la modale est retiré.
        card.className = 'phone-card';
        
        // DÉTERMINER LE TEXTE ET LA CLASSE DU BADGE selon l'OS
        const badgeText = phone.os === 'iphone' ? 'iPhone' : 'Android';
        const badgeClass = phone.os; // 'iphone' ou 'android'
        
        card.innerHTML = `
            <span class="os-badge ${badgeClass}">${badgeText}</span>
            <!-- Utilise le chemin de fichier local (ex: images/iphone_15_pro.png) -->
            <img src="${phone.image}" alt="${phone.name}" class="phone-image" onerror="this.onerror=null; this.src='https://placehold.co/130x180/222222/FFFFFF?text=Image%20Manquante'">
            <p class="phone-name">${phone.name}</p>
            <!-- NOUVEAU : Affichage du prix directement sur la carte -->
            <p class="phone-price">Prix: <strong>${phone.price}</strong></p>
        `;
        
        catalogue.appendChild(card);
    });
    
    // Si la recherche ne donne aucun résultat
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
    
    // Mettre à jour la classe 'active' de la navigation
    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`.nav-button[data-view="${view}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // Réinitialiser la barre de recherche et relancer le rendu pour la nouvelle vue
    document.getElementById('searchBar').value = '';
    filterPhones();
}

// Gère la logique de recherche et de filtre sur la vue ACTIVE
function filterPhones() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    let sourceData = allPhonesData;

    // 1. Filtrer par la vue actuelle (all, iphone, ou android)
    if (currentView === 'iphone') {
        sourceData = iphonePhones;
    } else if (currentView === 'android') {
        sourceData = androidPhones;
    }
    // Si 'all', sourceData reste allPhonesData

    // 2. Filtrer par le terme de recherche (sur le résultat de l'étape 1)
    const filteredData = sourceData.filter(phone => {
        return phone.name.toLowerCase().includes(searchTerm);
    });

    // 3. Dessine le catalogue
    renderPhones(filteredData);
}


// ===================================================================
// 5. INITIALISATION
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
    // L'initialisation doit appeler la fonction de rendu
    // On commence en mode 'all'
    changeView('all');
    
    // Mettre en place l'écouteur d'événement pour la barre de recherche
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        // La recherche filtre uniquement le catalogue visible
        searchBar.addEventListener('keyup', filterPhones);
    }

    // Mettre en place les écouteurs de clic sur les boutons de navigation
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const view = button.getAttribute('data-view');
            changeView(view);
        });
    });
});