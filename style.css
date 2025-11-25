/* --- ANIMATIONS KEYFRAMES --- */

/* Animation pour simuler le scan d'un écran CRT */
@keyframes scanline {
    0% { background-position: 0 0; }
    100% { background-position: 0 100%; }
}

/* Animation de l'ombre néon pour la rendre vivante */
@keyframes neon-flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        text-shadow: 
            0 0 4px #fff,
            0 0 11px #00ffff,
            0 0 19px #00ffff,
            0 0 40px rgba(0, 255, 255, 0.7);
    }
    20%, 24%, 55% {        
        text-shadow: none; /* Effet de micro-coupure */
    }
}

/* ======================================================= */
/* --- STYLE GLOBAL ET FOND ANIMÉ CYBERPUNK --- */
/* ======================================================= */
body {
    margin: 0;
    padding: 0;
    font-family: 'Consolas', monospace, sans-serif; /* Police futuriste */
    background-color: #020202; /* Fond de secours */
    color: #00ffff; /* Texte par défaut en couleur néon */
    overflow-x: hidden;
    position: relative;
    
    /* NOUVEAU : Image de fond Cyberpunk avec effet d'opacité */
    /* Utilisez une image réelle ou ce placeholder pour l'effet */
    background-image: url('https://placehold.co/1920x1080/000000/FFFFFF?text=CYBERPUNK+CITYSCAPE'); 
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    
    /* Animation de grille et de scanlines par dessus l'image */
    background-image: 
        linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px), 
        linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px),
        url('https://placehold.co/1920x1080/000000/FFFFFF?text=CYBERPUNK+CITYSCAPE');
    background-size: 50px 50px, 50px 50px, cover;
}

/* Overlay pour l'effet de bruit de fond (Scanline) et assombrissement */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1; /* Placé en dessous des éléments mais au-dessus du background */
    
    /* Couche d'assombrissement pour l'image de fond (80% d'opacité) */
    background: rgba(0, 0, 0, 0.8);
    
    /* Création de scanlines animées */
    background-image: 
        repeating-linear-gradient(
            0deg, 
            rgba(0, 0, 0, 0.2), 
            rgba(0, 0, 0, 0.5) 1px, 
            transparent 1px, 
            transparent 3px
        );
    animation: scanline 10s linear infinite; /* Défilement lent des scanlines */
}


/* ======================================================= */
/* --- LOGO ET TITRE --- */
/* ======================================================= */
.logo-container {
    text-align: center;
    padding: 40px 0 10px 0; 
}

.logo-text {
    font-family: 'Share Tech Mono', monospace;
    font-size: 3.2em; 
    font-weight: 700;
    letter-spacing: 4px; 
    color: #fff;
    animation: neon-flicker 2s infinite alternate; 
    cursor: default;
    display: inline-block;
    z-index: 10;
}

.logo-text i {
    margin-right: 15px;
}

.titre {
    text-align: center;
    margin-top: 10px;
    color: #FF00FF; /* Couleur secondaire : Magenta néon */
    text-shadow: 0 0 8px rgba(255, 0, 255, 0.6);
    padding: 0 5%;
}

/* ======================================================= */
/* --- BANNÈRE DYNAMIQUE (DIAPORAMA SIMPLE) --- */
/* ======================================================= */
.featured-banner {
    width: 80%;
    max-width: 900px;
    margin: 30px auto;
    padding: 15px;
    background: rgba(0, 255, 255, 0.05); 
    border: 1px solid #00ffff; 
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
    text-align: center;
    border-radius: 8px;
}

#banner-text {
    font-size: 1.2em;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 5px #00ffff;
    transition: opacity 0.3s ease; 
}

/* ======================================================= */
/* --- NAVIGATION ET RECHERCHE/TRI --- */
/* ======================================================= */
.main-nav {
    text-align: center;
    margin: 20px 0 10px 0;
}

.nav-button {
    background-color: #111;
    color: #00ffff;
    border: 1px solid #00ffff;
    padding: 10px 20px;
    margin: 0 8px;
    border-radius: 4px; 
    cursor: pointer;
    font-size: 1.1em;
    transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
    min-width: 150px;
    text-transform: uppercase;
}

.nav-button:hover:not(.active) {
    background-color: #00ffff;
    color: #111;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
}

.nav-button.active {
    background-color: #FF00FF; 
    color: #020202;
    font-weight: bold;
    border-color: #FF00FF;
    box-shadow: 0 0 10px #FF00FF;
}

#searchBar {
    display: block;
    margin: 25px auto; 
    padding: 12px 15px;
    width: 80%; 
    max-width: 500px; 
    border-radius: 0; 
    border: 2px solid #FF00FF;
    font-size: 16px;
    background-color: #111; 
    color: #FF00FF; 
    box-shadow: 0 4px 15px rgba(255, 0, 255, 0.3); 
    outline: none;
    transition: 0.3s;
}

#searchBar:focus {
    transform: scale(1.01); 
    box-shadow: 0 0 0 4px rgba(0, 255, 255, 0.5); 
    border-color: #00ffff;
}

.tools-container {
    width: 90%;
    max-width: 1200px;
    margin: 0px auto 20px auto;
    text-align: right; 
    padding-right: 5%;
}

.sort-label {
    margin-right: 10px;
    color: #00ffff;
}

#sortSelector {
    padding: 8px 15px;
    border-radius: 0;
    border: 1px solid #00ffff;
    background-color: #111;
    color: #00ffff;
    font-size: 1em;
    cursor: pointer;
    text-transform: uppercase;
}

/* ======================================================= */
/* --- STYLE DES CARTES TÉLÉPHONE (VUE CATALOGUE) --- */
/* ======================================================= */
.catalogue {
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px; 
    padding: 30px 5%; 
    max-width: 1200px;
    margin: 0 auto 40px auto; 
}

.phone-card {
    position: relative; 
    background-color: rgba(255, 255, 255, 0.05); 
    padding: 20px;
    border: 1px solid #FF00FF; 
    border-radius: 2px; 
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-height: 380px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(255, 0, 255, 0.2); 
}

.phone-card:hover {
    transform: translateY(-8px) scale(1.05); 
    box-shadow: 0 0 10px #00ffff, 
                0 0 20px #00ffff,
                0 0 40px rgba(0, 255, 255, 0.8);
    border-color: #00ffff;
    z-index: 10;
}

.os-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 4px 10px;
    border-radius: 0;
    font-size: 0.9em;
    font-weight: bold;
    z-index: 5;
    color: #020202;
    text-transform: uppercase;
}

.os-badge.iphone {
    background-color: #888;
}

.os-badge.android {
    background-color: #3DDC84; 
}

.phone-card img {
    max-width: 150px; 
    max-height: 200px;
    display: block; 
    margin: 15px auto;
    border-radius: 5px;
    object-fit: contain; 
    border: 1px solid rgba(255, 255, 255, 0.2); 
    flex-grow: 1;
}

.phone-name {
    margin: 10px 0;
    font-size: 1.3em;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 5px #00ffff;
}

.phone-price {
    font-size: 1.5em; 
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #FF00FF; 
    color: #FF00FF; 
    font-weight: normal;
    align-self: flex-end; 
    width: 100%;
}

.phone-price strong {
    font-weight: 800;
    color: #FFFFFF;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); 
}

.no-results {
    grid-column: 1 / -1; 
    text-align: center;
    color: #aaa;
    font-size: 1.5em;
    padding: 50px;
    text-shadow: 0 0 5px #FF00FF;
}

/* ======================================================= */
/* --- STYLE DE LA VUE DÉTAILS DU PRODUIT --- */
/* ======================================================= */
#detail-view {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
}

.detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding: 10px 0;
    border-bottom: 2px solid #FF00FF;
}

.detail-logo {
    font-size: 1.8em;
    animation: none; /* Désactive le flicker pour le petit logo */
    text-shadow: 0 0 5px #00ffff;
}

.neon-button {
    min-width: 100px;
    padding: 8px 15px;
    font-size: 1em;
}

.product-details-container {
    background-color: rgba(0, 0, 0, 0.7); /* Plus opaque pour la lisibilité */
    border: 1px solid #00ffff;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
    padding: 30px;
    border-radius: 5px;
}

.detail-title {
    color: #fff;
    text-shadow: 0 0 10px #FF00FF;
    border-bottom: 1px dashed #FF00FF;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: center;
}

.product-content {
    display: flex;
    gap: 30px;
    flex-wrap: wrap; 
}

.product-image-section {
    flex: 1;
    min-width: 250px;
    text-align: center;
}

.detail-image {
    max-width: 100%;
    height: auto;
    border: 3px solid #00ffff;
    border-radius: 5px;
    margin-bottom: 20px;
}

.product-info-section {
    flex: 2;
    min-width: 300px;
}

.description-placeholder {
    margin-bottom: 20px;
    line-height: 1.6;
    border-left: 3px solid #FF00FF;
    padding-left: 15px;
}

.detail-label {
    color: #00ffff;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
    font-size: 1.1em;
}

.detail-value {
    color: #fff;
}

.offer-title {
    color: #FF00FF;
    text-shadow: 0 0 8px rgba(255, 0, 255, 0.8);
    margin-top: 30px;
    border-top: 1px solid #00ffff;
    padding-top: 15px;
}

.offer-form-style .form-group {
    margin-bottom: 15px;
}

.offer-form-style label {
    display: block;
    margin-bottom: 5px;
    color: #00ffff;
}

.offer-form-style input[type="text"],
.offer-form-style input[type="number"] {
    width: 95%;
    padding: 10px;
    background-color: #0a0a0a;
    border: 1px solid #FF00FF;
    color: #fff;
    font-size: 1em;
    border-radius: 0;
    transition: box-shadow 0.3s;
}

.offer-form-style input[type="text"]:focus,
.offer-form-style input[type="number"]:focus {
    box-shadow: 0 0 10px rgba(255, 0, 255, 0.7);
    outline: none;
}

.offer-form-style button[type="submit"] {
    display: block;
    width: 100%;
    margin-top: 20px;
    padding: 12px;
    font-size: 1.2em;
    
    /* Bouton spécifique pour l'achat */
    background-color: #FF00FF;
    color: #020202;
    border-color: #FF00FF;
    box-shadow: 0 0 15px rgba(255, 0, 255, 0.7);
    transition: transform 0.2s;
}

.offer-form-style button[type="submit"]:hover {
    transform: scale(1.02);
    box-shadow: 0 0 25px rgba(255, 0, 255, 1);
}

.offer-response {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #00ffff;
    background-color: rgba(0, 255, 255, 0.1);
    color: #fff;
    text-align: center;
    font-weight: bold;
    border-radius: 2px;
}


/* ======================================================= */
/* --- MEDIA QUERIES (ADAPTATION MOBILE) --- */
/* ======================================================= */
@media (max-width: 768px) {
    .logo-text {
        font-size: 2.2em; 
        letter-spacing: 2px;
    }
    .titre {
        font-size: 1.2em;
    }
    .featured-banner {
        width: 90%;
        margin: 20px auto;
    }
    .main-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px; 
    }
    .nav-button {
        flex-grow: 1;
        margin: 0;
    }
    .tools-container {
        text-align: center;
        padding-right: 0;
        display: flex;
        justify-content: center;
        gap: 15px;
    }
    
    .product-content {
        flex-direction: column;
    }

    .detail-header {
        flex-direction: column;
        gap: 15px;
    }

    .detail-logo {
        font-size: 1.5em;
        margin-top: 10px;
    }
    
    .product-details-container {
        padding: 20px 15px;
    }
}

@media (max-width: 480px) {
    .main-nav {
        flex-direction: column;
    }
    .nav-button {
        width: 90%;
        max-width: 300px;
    }
    .catalogue {
        gap: 20px;
        padding: 10px 5%;
    }
}
