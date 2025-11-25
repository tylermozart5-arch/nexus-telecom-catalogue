// ===================================================================
// 1. TABLEAUX DE DONNÉES CATÉGORISÉS PAR OS
// ===================================================================

const androidPhones = [
    // Téléphones Android utilisant des URLs directes
    { id: 'S24', name: "Samsung Galaxy S24 Ultra", price: "620 000 FCFA", image: "https://placehold.co/130x180/003366/FFFFFF?text=S24+Ultra", os: 'android', description: "Le fleuron d'Android. Écran Dynamic AMOLED, Stylet S Pen intégré, et un système de caméra professionnel pour des clichés parfaits en toutes conditions. Performance brute et autonomie impressionnante." },
    { id: 'PXL8', name: "Google Pixel 8 Pro", price: "450 000 FCFA", image: "https://placehold.co/130x180/FF3300/FFFFFF?text=Pixel+8+Pro", os: 'android', description: "L'intelligence artificielle au service de la photo et de la performance. Puce Tensor G3, expérience Android pure, et les mises à jour en avant-première. Le smartphone des puristes." },
    { id: 'X13T', name: "Xiaomi 13T Pro", price: "290 000 FCFA", image: "https://placehold.co/130x180/8B0000/FFFFFF?text=Xiaomi+13T", os: 'android', description: "Un champion de la vitesse. Écran 144Hz AMOLED, charge rapide ultra-puissante. Conçu pour le jeu et le multitâche intensif, sans compromis sur l'autonomie." },
    { id: 'TSP10', name: "Tecno Spark 10", price: "95 000 FCFA", image: "https://placehold.co/130x180/008080/FFFFFF?text=Tecno+10", os: 'android', description: "Le meilleur rapport qualité-prix. Idéal pour un usage quotidien, les réseaux sociaux, et une bonne autonomie. Un choix fiable pour le marché d'entrée de gamme." },
    { id: 'OPOX6', name: "Oppo Find X6", price: "380 00FA", image: "https://placehold.co/130x180/4682B4/FFFFFF?text=Oppo+X6", os: 'android', description: "L'élégance et l'innovation. Un design raffiné, des performances de haut vol, et des fonctionnalités de photographie uniques, notamment son mode portrait avancé." },
    { id: 'MT40', name: "Motorola Edge 40", price: "250 000 FCFA", image: "https://placehold.co/130x180/DAA520/FFFFFF?text=Moto+40", os: 'android', description: "Style minimaliste et robustesse. Un écran P-OLED incurvé fluide, une résistance à l'eau IP68, et une interface logicielle quasi-stock. La simplicité alliée à la performance." },
    { id: 'OP12', name: "OnePlus 12", price: "420 000 FCFA", image: "https://placehold.co/130x180/3CB371/FFFFFF?text=OnePlus+12", os: 'android', description: "Le retour du 'Flagship Killer'. Performances exceptionnelles grâce au dernier processeur Snapdragon, charge filaire et sans fil très rapide, et un écran d'une clarté inégalée." },
];

const iphonePhones = [
    // Téléphones iPhone utilisant des URLs directes
    { id: 'I15P', name: "iPhone 15 Pro Max", price: "850 000 FCFA", image: "https://placehold.co/130x180/1a1a1a/FFFFFF?text=15+Pro+Max", os: 'iphone', description: "Le summum de la technologie mobile. Châssis en titane, puce A17 Bionic pour des performances dignes d'une console, et un appareil photo qui redéfinit la prise de vue professionnelle sur smartphone." },
    { id: 'I14', name: "iPhone 14", price: "480 000 FCFA", image: "https://placehold.co/130x180/4F4F4F/FFFFFF?text=iPhone+14", os: 'iphone', description: "Fiabilité et polyvalence. Idéal pour l'écosystème Apple, avec une excellente qualité vidéo et photo, et une durabilité éprouvée. Un classique intemporel." },
    { id: 'I13', name: "iPhone 13", price: "350 000 FCFA", image: "https://placehold.co/130x180/696969/FFFFFF?text=iPhone+13", os: 'iphone', description: "Puissance abordable. Puce rapide, excellent écran OLED, et une mise à niveau significative par rapport aux générations précédentes. Le meilleur point d'entrée vers l'iPhone." },
    { id: 'ISE22', name: "iPhone SE (2022)", price: "220 000 FCFA", image: "https://placehold.co/130x180/808080/FFFFFF?text=iPhone+SE", os: 'iphone', description: "La puissance dans un format compact. Équipé de la puce A15, il offre des performances de haut niveau dans un design historique avec le bouton Home." },
    { id: 'I15', name: "iPhone 15", price: "650 000 FCFA", image: "https://placehold.co/130x180/2F4F4F/FFFFFF?text=iPhone+15", os: 'iphone', description: "Design rafraîchi et Dynamic Island. Une excellente caméra principale, et l'introduction de l'USB-C, le rendant le plus polyvalent des modèles standard à ce jour." },
];

// Combine tous les téléphones pour la vue 'all'
const allPhonesData = [...androidPhones, ...iphonePhones];


// ===================================================================
// 2. ÉTAT GLOBAL
// ===================================================================

let currentView = 'all'; 

const bannerMessages = [
    "[INFO_SECURE] Les meilleures offres du Cyber-Marché sont ici.",
    "// PROTOCOLE ACTIF // Jusqu'à 40% de réduction sur les modèles 5G.",
    "// FLASH NEWS // Le nouveau S25 arrive. Préparez vos crédits.",
    "| N E X U S | La connexion ultime, garantie sans *GLITCH* majeur.",
    "|| PRIX CHOC || Découvrez l'iPhone 15 Pro à prix imbattable.",
];
let currentBannerIndex = 0;

// --- DÉTAIL CLÉ WHATSAPP ---
// Numéro WhatsApp configuré : +241 62 63 66 00 (Formaté sans signes)
const WHATSAPP_NUMBER = '24162636600'; 


// ===================================================================
// 3. LOGIQUE DE TRI ET DE FILTRAGE
// ===================================================================

// Fonction utilitaire pour convertir le prix (chaîne de caractères) en nombre
function getPriceValue(priceString) {
    const numericPart = priceString.replace(/\s+/g, '').replace('FCFA', '');
    return parseFloat(numericPart) || 0; 
}

// Fonction principale pour trier les données
function sortPhones(data, sortType) {
    // Si 'default' est sélectionné, revient à l'ordre initial du tableau source
    if (sortType === 'default') {
        let originalSource = allPhonesData;
        if (currentView === 'iphone') {
            originalSource = iphonePhones;
        } else if (currentView === 'android') {
            originalSource = androidPhones;
        } 
        
        // Assure que seuls les téléphones filtrés sont triés (si la recherche est active)
        const sorted = [...originalSource].filter(phone => data.some(d => d.id === phone.id));
        return sorted;
    }

    const sortedData = [...data]; 

    if (sortType === 'price-asc' || sortType === 'price-desc') {
        sortedData.sort((a, b) => {
            const priceA = getPriceValue(a.price);
            const priceB = getPriceValue(b.price);

            if (sortType === 'price-asc') {
                return priceA - priceB; 
            } else {
                return priceB - priceA; 
            }
        });
    }

    return sortedData;
}


// Gère la logique de recherche et de filtre sur la vue ACTIVE
function filterPhones() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const sortType = document.getElementById('sortSelector').value; 
    
    let sourceData;

    if (currentView === 'iphone') {
        sourceData = iphonePhones;
    } else if (currentView === 'android') {
        sourceData = androidPhones;
    } else {
        sourceData = allPhonesData;
    }

    const filteredData = sourceData.filter(phone => {
        return phone.name.toLowerCase().includes(searchTerm) || 
               (phone.description && phone.description.toLowerCase().includes(searchTerm)); // Ajout de la recherche par description
    });
    
    const finalData = sortPhones(filteredData, sortType);

    renderPhones(finalData);
}


// ===================================================================
// 4. FONCTION DE CONSTRUCTION DU CATALOGUE (RENDER)
// ===================================================================

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
        // Utilisation des classes Tailwind pour le style de la carte
        card.className = 'phone-card bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center';
        
        card.setAttribute('data-id', phone.id);
        // Rend la carte cliquable pour afficher les détails
        card.addEventListener('click', () => showProductDetails(phone.id));

        const badgeText = phone.os === 'iphone' ? 'iPhone' : 'Android';
        // Ajustement des badges pour un look cohérent avec le thème sombre
        const badgeClass = phone.os === 'iphone' ? 'bg-gray-600 text-white' : 'bg-red-600 text-white';
        
        card.innerHTML = `
            <span class="absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded ${badgeClass} shadow-md">${badgeText}</span>
            <img src="${phone.image}" alt="${phone.name}" class="phone-image w-3/4 h-48 object-contain mb-3" onerror="this.onerror=null; this.src='https://placehold.co/130x180/222222/FFFFFF?text=Erreur%20Image'">
            <p class="phone-name text-lg font-bold text-white text-center mb-1">${phone.name}</p>
            <p class="phone-price text-sm text-gray-300">Prix: <strong class="text-red-500">${phone.price}</strong></p>
        `;
        
        catalogue.appendChild(card);
    });
    
    if (data.length === 0) {
        catalogue.innerHTML = '<p class="text-center text-gray-400 mt-10 text-xl no-results">Aucun résultat trouvé. Essayez une autre recherche, Agent.</p>';
    }
}

// Gère l'animation de la bannière
function updateBanner() {
    const bannerElement = document.getElementById('banner-text');
    if (bannerElement) {
        bannerElement.style.opacity = '0'; 
        
        setTimeout(() => {
            bannerElement.textContent = bannerMessages[currentBannerIndex];
            currentBannerIndex = (currentBannerIndex + 1) % bannerMessages.length;
            
            bannerElement.style.opacity = '1'; 
        }, 300); 
    }
}


// ===================================================================
// 5. LOGIQUE DE GESTION DES VUES (CATALOGUE / DÉTAILS)
// ===================================================================

/**
 * Bascule l'affichage entre la vue catalogue et la vue détails.
 * @param {string} showViewId - 'catalogue' ou 'details'
 */
function toggleMainView(showViewId) {
    const catalogueView = document.getElementById('catalogue-view');
    const detailView = document.getElementById('detail-view');

    if (showViewId === 'catalogue') {
        catalogueView.style.display = 'block';
        detailView.style.display = 'none';
        // Assure que le catalogue est re-rendu dans la vue par défaut
        changeView(currentView);
    } else if (showViewId === 'details') {
        catalogueView.style.display = 'none';
        detailView.style.display = 'block';
    }
}

/**
 * Affiche les détails d'un produit spécifique et configure le lien WhatsApp.
 * @param {string} productId - L'ID unique du téléphone.
 */
function showProductDetails(productId) {
    const product = allPhonesData.find(p => p.id === productId);

    if (!product) {
        console.error(`Erreur critique: Produit ID ${productId} non trouvé.`);
        return;
    }

    // Remplir les éléments de la vue de détails
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-image').alt = product.name;
    document.getElementById('detail-price-display').textContent = product.price; 
    document.getElementById('detail-os').textContent = product.os.charAt(0).toUpperCase() + product.os.slice(1);
    document.getElementById('detail-description').textContent = product.description || "Description non disponible.";
    
    // --- NOUVELLE LOGIQUE WHATSAPP ---
    const encodedMessage = encodeURIComponent(`Bonjour, je suis intéressé par l'achat du téléphone ${product.name} (ID: ${product.id}) affiché au prix de ${product.price}. Est-ce toujours disponible ?`);
    
    // Construction de l'URL WhatsApp
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    const button = document.getElementById('whatsapp-buy-button');
    
    // Assure que le bouton est un lien qui s'ouvre dans un nouvel onglet
    button.href = whatsappLink;
    button.target = '_blank'; // Important pour ne pas quitter la page
    button.disabled = false;
    
    // Affichage par défaut (avec l'icône et le texte)
    button.innerHTML = `
        <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.35 4.96l-1.4 5.14 5.23-1.37c1.47.8 3.1 1.25 4.73 1.25 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.02c-1.46 0-2.88-.39-4.13-1.13l-.3-.18-3.09.81.83-3.04-.2-.32c-.79-1.28-1.21-2.76-1.21-4.3 0-4.57 3.71-8.28 8.28-8.28s8.28 3.71 8.28 8.28-3.71 8.28-8.28 8.28zm4.56-6.85c-.25-.12-.87-.43-.99-.48-.12-.05-.2-.07-.29.07-.1.17-.37.48-.46.58-.1.1-.19.12-.35.05s-.63-.23-1.19-.73c-.44-.39-.75-.87-1-1.23-.25-.36-.03-.38.18-.58.19-.19.2-.36.3-.54.1-.19.05-.36-.02-.51-.07-.12-.29-.73-.4-.99-.12-.25-.26-.21-.37-.21h-.29c-.19 0-.49.07-.75.35-.25.28-.96.94-.96 2.31 0 1.37.99 2.68 1.13 2.87.14.19 1.95 2.97 4.8 4.29 2.85 1.32 2.85 2.19 3.01 2.31.14.12.3.17.65.17.35 0 2.22-.76 2.53-1.63.31-.87.31-1.63.22-1.78-.08-.14-.29-.22-.61-.39z"/>
        </svg>
        ACHETER VIA WHATSAPP
    `;
    
    // Basculer vers la vue détails
    toggleMainView('details');
}


// Fonction pour basculer entre les vues de catégorie (dans la vue catalogue)
function changeView(view) {
    currentView = view;
    
    // Met à jour la classe 'active' de la navigation (look moderne avec classes Tailwind)
    document.querySelectorAll('.nav-button[data-view]').forEach(button => {
        button.classList.remove('bg-red-600', 'text-white', 'hover:bg-red-700', 'bg-gray-700', 'hover:bg-gray-600');
        if (button.getAttribute('data-view') === view) {
             // Couleur active : Rouge/Magenta (thème cyberpunk)
             button.classList.add('bg-red-600', 'text-white', 'hover:bg-red-700');
        } else {
             // Couleur inactive : Gris foncé
             button.classList.add('bg-gray-700', 'text-white', 'hover:bg-gray-600');
        }
    });

    // Réinitialise la barre de recherche et le tri à 'Pertinence' (default)
    const searchBar = document.getElementById('searchBar');
    const sortSelector = document.getElementById('sortSelector');
    if (searchBar) searchBar.value = '';
    if (sortSelector) sortSelector.value = 'default';

    // Applique le filtre et le tri par défaut
    filterPhones();
}


// ===================================================================
// 6. INITIALISATION
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialisation de la vue par défaut (Catalogue)
    toggleMainView('catalogue');
    
    // 2. Initialisation de la bannière dynamique et son intervalle
    updateBanner();
    setInterval(updateBanner, 5000); 
    
    // 3. Écouteurs pour la barre de recherche et le sélecteur de tri
    const searchBar = document.getElementById('searchBar');
    const sortSelector = document.getElementById('sortSelector');
    if (searchBar) searchBar.addEventListener('keyup', filterPhones);
    if (sortSelector) sortSelector.addEventListener('change', filterPhones);

    // 4. Écouteurs pour les boutons de navigation (Catégories)
    document.querySelectorAll('.nav-button[data-view]').forEach(button => {
        button.addEventListener('click', () => {
            const view = button.getAttribute('data-view');
            changeView(view);
        });
    });

    // 5. Écouteur pour le bouton de retour au catalogue
    document.getElementById('backToCatalogue')?.addEventListener('click', () => {
        toggleMainView('catalogue');
    });
    
    // S'assurer que la vue est correctement définie au chargement
    changeView('all');
});
