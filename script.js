// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Dil seçici butonunu güncelle
    const langButton = document.querySelector('.dropdown .btn-outline-light');
    if (langButton) {
        langButton.innerHTML = `<i class="fas fa-globe"></i> ${lang.toUpperCase()}`;
    }
    
    // Sayfa içeriğini güncelle
    updatePageContent();
}

{{ let currentLanguage = localStorage.getItem('language') || 'tr';

// Dil çevirileri
const translations = {
    tr: {
        home: "Ana Sayfa",
        games: "Oyunlar",
        categories: "Kategoriler",
        featured: "Öne Çıkanlar",
        newReleases: "Yeni Çıkanlar",
        cart: "Sepet",
        login: "Giriş Yap",
        register: "Üye Ol",
        search: "Ara"
    },
    // ... diğer dil çevirileri
};

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Dil seçici butonunu güncelle
    const langButton = document.querySelector('.dropdown .btn-outline-light');
    if (langButton) {
        langButton.innerHTML = `<i class="fas fa-globe"></i> ${lang.toUpperCase()}`;
    }
    
    // Sayfa içeriğini güncelle
    updatePageContent();
} }}    
// Dil çevirileri
const translations = {
    tr: {
        home: "Ana Sayfa",
        games: "Oyunlar",
        categories: "Kategoriler",
        featured: "Öne Çıkanlar",
        newReleases: "Yeni Çıkanlar",
        cart: "Sepet",
        login: "Giriş Yap",
        register: "Üye Ol",
        search: "Ara",
        addToCart: "Sepete Ekle",
        watchTrailer: "Trailer",
        price: "Fiyat",
        discount: "İndirim",
        category: "Kategori",
        releaseDate: "Çıkış Tarihi",
        liveSupport: "Canlı Destek",
        email: "E-posta",
        password: "Şifre",
        rememberMe: "Beni Hatırla",
        name: "Ad Soyad",
        passwordConfirm: "Şifre Tekrar",
        welcome: "En İyi Dijital Oyunlar",
        welcomeDesc: "Yüzlerce oyun, en uygun fiyatlarla!"
    },
    en: {
        home: "Home",
        games: "Games",
        categories: "Categories",
        featured: "Featured",
        newReleases: "New Releases",
        cart: "Cart",
        login: "Login",
        register: "Register",
        search: "Search",
        addToCart: "Add to Cart",
        watchTrailer: "Trailer",
        price: "Price",
        discount: "Discount",
        category: "Category",
        releaseDate: "Release Date",
        liveSupport: "Live Support",
        email: "Email",
        password: "Password",
        rememberMe: "Remember Me",
        name: "Full Name",
        passwordConfirm: "Confirm Password",
        welcome: "Best Digital Games",
        welcomeDesc: "Hundreds of games at the best prices!"
    },
    de: {
        home: "Startseite",
        games: "Spiele",
        categories: "Kategorien",
        featured: "Empfohlen",
        newReleases: "Neuerscheinungen",
        cart: "Warenkorb",
        login: "Anmelden",
        register: "Registrieren",
        search: "Suchen",
        addToCart: "In den Warenkorb",
        watchTrailer: "Trailer",
        price: "Preis",
        discount: "Rabatt",
        category: "Kategorie",
        releaseDate: "Erscheinungsdatum",
        liveSupport: "Live-Support",
        email: "E-Mail",
        password: "Passwort",
        rememberMe: "Angemeldet bleiben",
        name: "Vollständiger Name",
        passwordConfirm: "Passwort bestätigen",
        welcome: "Beste Digitale Spiele",
        welcomeDesc: "Hunderte von Spielen zu besten Preisen!"
    },
    fr: {
        home: "Accueil",
        games: "Jeux",
        categories: "Catégories",
        featured: "En vedette",
        newReleases: "Nouveautés",
        cart: "Panier",
        login: "Connexion",
        register: "S'inscrire",
        search: "Rechercher",
        addToCart: "Ajouter au panier",
        watchTrailer: "Bande-annonce",
        price: "Prix",
        discount: "Réduction",
        category: "Catégorie",
        releaseDate: "Date de sortie",
        liveSupport: "Support en direct",
        email: "E-mail",
        password: "Mot de passe",
        rememberMe: "Se souvenir de moi",
        name: "Nom complet",
        passwordConfirm: "Confirmer le mot de passe",
        welcome: "Meilleurs Jeux Numériques",
        welcomeDesc: "Des centaines de jeux aux meilleurs prix!"
    },
    es: {
        home: "Inicio",
        games: "Juegos",
        categories: "Categorías",
        featured: "Destacados",
        newReleases: "Novedades",
        cart: "Carrito",
        login: "Iniciar sesión",
        register: "Registrarse",
        search: "Buscar",
        addToCart: "Añadir al carrito",
        watchTrailer: "Tráiler",
        price: "Precio",
        discount: "Descuento",
        category: "Categoría",
        releaseDate: "Fecha de lanzamiento",
        liveSupport: "Soporte en vivo",
        email: "Correo electrónico",
        password: "Contraseña",
        rememberMe: "Recordarme",
        name: "Nombre completo",
        passwordConfirm: "Confirmar contraseña",
        welcome: "Mejores Juegos Digitales",
        welcomeDesc: "¡Cientos de juegos a los mejores precios!"
    }
};

// Aktif dili sakla
let currentLanguage = localStorage.getItem('language') || 'tr';

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Dil seçici butonunu güncelle
    document.getElementById('languageSelector').innerHTML = `<i class="fas fa-globe"></i> ${lang.toUpperCase()}`;
    
    // Sayfa içeriğini güncelle
    updatePageContent();
}

// Sayfa içeriğini güncelleme
function updatePageContent() {
    const t = translations[currentLanguage];
    
    // Navbar linklerini güncelle
    document.querySelector('.nav-link[href="#"]').textContent = t.home;
    document.querySelector('.nav-link[href="#games"]').textContent = t.games;
    document.querySelector('.dropdown-toggle').textContent = t.categories;
    document.querySelector('.nav-link[href="#featured"]').textContent = t.featured;
    document.querySelector('.nav-link[href="#new"]').textContent = t.newReleases;
    
    // Hero section'ı güncelle
    document.querySelector('.hero-section h1').textContent = t.welcome;
    document.querySelector('.hero-section .lead').textContent = t.welcomeDesc;
    
    // Oyunları güncelle
    displayGames();
    
    // Modal başlıklarını güncelle
    document.querySelector('#loginModal .modal-title').textContent = t.login;
    document.querySelector('#registerModal .modal-title').textContent = t.register;
    
    // Form etiketlerini güncelle
    document.querySelector('label[for="loginEmail"]').textContent = t.email;
    document.querySelector('label[for="loginPassword"]').textContent = t.password;
    document.querySelector('label[for="rememberMe"]').textContent = t.rememberMe;
    
    // Canlı destek başlığını güncelle
    document.querySelector('.chat-header h5').textContent = t.liveSupport;
}

// Örnek oyun verileri
const games = [
    {
        id: 1,
        name: "Red Dead Redemption 2",
        price: 299.99,
        discount: 20,
        category: "Aksiyon",
        image: "https://upload.wikimedia.org/wikipedia/tr/4/44/Red_Dead_Redemption_II.jpg",
        releaseDate: "2018-10-26",
        trailer: "https://www.youtube.com/embed/eaW0tYpxyp0",
        rating: 4.8,
        purchases: 125840
    },
    {
        id: 2,
        name: "The Witcher 3",
        price: 199.99,
        discount: 50,
        category: "RPG",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
        releaseDate: "2015-05-19",
        trailer: "https://www.youtube.com/embed/XHrskkHf958",
        rating: 4.5,
        purchases: 75000
    },
    {
        id: 3,
        name: "FIFA 24",
        price: 999.99,
        discount: 0,
        category: "Spor",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg",
        releaseDate: "2023-09-29",
        trailer: "https://www.youtube.com/embed/XhljPyoHZ9o",
        rating: 4.2,
        purchases: 20000
    },
    {
        id: 4,
        name: "Age of Empires IV",
        price: 249.99,
        discount: 30,
        category: "Strateji",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1466860/header.jpg",
        releaseDate: "2021-10-28",
        trailer: "https://www.youtube.com/embed/TTaCrP_U4ao",
        rating: 4.1,
        purchases: 15000
    },
    {
        id: 5,
        name: "Elden Ring",
        price: 599.99,
        discount: 15,
        category: "Aksiyon",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png",
        releaseDate: "2022-02-25",
        trailer: "https://www.youtube.com/embed/E69tKrfEQag",
        rating: 4.7,
        purchases: 100000
    },
    {
        id: 6,
        name: "Cyberpunk 2077",
        price: 499.99,
        discount: 25,
        category: "RPG",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
        releaseDate: "2020-12-10",
        trailer: "https://www.youtube.com/embed/8X2kIfS6fb8",
        rating: 4.3,
        purchases: 50000
    },
    {
        id: 7,
        name: "God of War Ragnarök",
        price: 699.99,
        discount: 10,
        category: "Aksiyon",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
        releaseDate: "2022-11-09",
        trailer: "https://www.youtube.com/embed/EE-4GvjKcfs",
        rating: 4.9,
        purchases: 80000
    },
    {
        id: 8,
        name: "NBA 2K24",
        price: 899.99,
        discount: 0,
        category: "Spor",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/header.jpg",
        releaseDate: "2023-09-08",
        trailer: "https://www.youtube.com/embed/olyakr_5qZY",
        rating: 4.1,
        purchases: 30000
    },
    {
        id: 9,
        name: "Civilization VI",
        price: 299.99,
        discount: 70,
        category: "Strateji",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg",
        releaseDate: "2016-10-21",
        trailer: "https://www.youtube.com/embed/5KdE0p2joJw",
        rating: 4.4,
        purchases: 40000
    },
    {
        id: 10,
        name: "Assassin's Creed Valhalla",
        price: 449.99,
        discount: 40,
        category: "Aksiyon",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2208920/header.jpg",
        releaseDate: "2020-11-10",
        trailer: "https://www.youtube.com/embed/ssrNcwxALS4",
        rating: 4.5,
        purchases: 60000
    },
    {
        id: 11,
        name: "Final Fantasy XVI",
        price: 799.99,
        discount: 0,
        category: "RPG",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2399830/header.jpg",
        releaseDate: "2023-06-22",
        trailer: "https://www.youtube.com/embed/yr6PtdY0i7M",
        rating: 4.6,
        purchases: 25000
    },
    {
        id: 12,
        name: "eFootball 2024",
        price: 0,
        discount: 0,
        category: "Spor",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1665460/header.jpg",
        releaseDate: "2023-09-07",
        trailer: "https://www.youtube.com/embed/6gZkwMgw4jE",
        rating: 3.9,
        purchases: 10000
    },
    {
        id: 13,
        name: "Total War: Warhammer III",
        price: 399.99,
        discount: 35,
        category: "Strateji",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1142710/header.jpg",
        releaseDate: "2022-02-17",
        trailer: "https://www.youtube.com/embed/HAr7yUlM0Po",
        rating: 4.2,
        purchases: 20000
    },
    {
        id: 14,
        name: "Spider-Man 2",
        price: 899.99,
        discount: 0,
        category: "Aksiyon",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg",
        releaseDate: "2023-10-20",
        trailer: "https://www.youtube.com/embed/nq1M_Wc4FIc",
        rating: 4.8,
        purchases: 40000
    },
    {
        id: 15,
        name: "Diablo IV",
        price: 699.99,
        discount: 15,
        category: "RPG",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2344520/header.jpg",
        releaseDate: "2023-06-06",
        trailer: "https://www.youtube.com/embed/Ro26B394ZBM",
        rating: 4.4,
        purchases: 30000
    },
    {
        id: 16,
        name: "F1 23",
        price: 699.99,
        discount: 35,
        category: "Spor",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2108330/header.jpg",
        releaseDate: "2023-06-16",
        trailer: "https://www.youtube.com/embed/fdT6KrlQiYE",
        rating: 4.1,
        purchases: 15000
    },
    {
        id: 17,
        name: "Crusader Kings III",
        price: 249.99,
        discount: 50,
        category: "Strateji",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1158310/header.jpg",
        releaseDate: "2020-09-01",
        trailer: "https://www.youtube.com/embed/Esp38fYZxoo",
        rating: 4.3,
        purchases: 25000
    },
    {
        id: 18,
        name: "Resident Evil 4",
        price: 599.99,
        discount: 25,
        category: "Aksiyon",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
        releaseDate: "2023-03-24",
        trailer: "https://www.youtube.com/embed/E69tKrfEQag",
        rating: 4.6,
        purchases: 35000
    },
    {
        id: 19,
        name: "Baldur's Gate 3",
        price: 599.99,
        discount: 0,
        category: "RPG",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
        releaseDate: "2023-08-03",
        trailer: "https://www.youtube.com/embed/1T22wNvoNiU",
        rating: 4.5,
        purchases: 20000
    },
    {
        id: 20,
        name: "WWE 2K24",
        price: 499.99,
        discount: 60,
        category: "Spor",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1942660/header.jpg",
        releaseDate: "2023-03-17",
        trailer: "https://www.youtube.com/embed/wJZ6Dh_j8Ns",
        rating: 4.0,
        purchases: 10000
    },
    {
        id: 21,
        name: "Company of Heroes 3",
        price: 399.99,
        discount: 40,
        category: "Strateji",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1677280/header.jpg",
        releaseDate: "2023-02-23",
        trailer: "https://www.youtube.com/embed/IxlYe_sjb9U",
        rating: 4.2,
        purchases: 15000
    },
    {
        id: 22,
        name: "Hogwarts Legacy",
        price: 699.99,
        discount: 20,
        category: "Aksiyon",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/cDHU28ds7cCvKAnVQo719gs0.png",
        releaseDate: "2023-02-10",
        trailer: "https://www.youtube.com/embed/1O6Qstncpnc",
        rating: 4.5,
        purchases: 40000
    },
    {
        id: 23,
        name: "Starfield",
        price: 699.99,
        discount: 0,
        category: "RPG",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg",
        releaseDate: "2023-09-06",
        trailer: "https://www.youtube.com/embed/kfYEiTdsyas",
        rating: 4.7,
        purchases: 30000
    },
    {
        id: 24,
        name: "EA Sports FC 24",
        price: 699.99,
        discount: 15,
        category: "Spor",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
        releaseDate: "2023-09-29",
        trailer: "https://www.youtube.com/embed/XhljPyoHZ9o",
        rating: 4.2,
        purchases: 20000
    },
    {
        id: 25,
        name: "Frostpunk 2",
        price: 399.99,
        discount: 0,
        category: "Strateji",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1601580/header.jpg",
        releaseDate: "2024-07-25",
        trailer: "https://www.youtube.com/embed/nE5EJRvz7Qg",
        rating: 4.1,
        purchases: 10000
    },
    {
        id: 26,
        name: "Mortal Kombat 1",
        price: 699.99,
        discount: 10,
        category: "Aksiyon",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1971870/header.jpg",
        releaseDate: "2023-09-19",
        trailer: "https://www.youtube.com/embed/UZ6eFEjFE_M",
        rating: 4.4,
        purchases: 25000
    },
    {
        id: 27,
        name: "Dragon's Dogma 2",
        price: 699.99,
        discount: 0,
        category: "RPG",
        image: "https://assetsio.reedpopcdn.com/dragons-dogma-2-cover.jpg",
        releaseDate: "2024-03-22",
        trailer: "https://www.youtube.com/embed/EHsUzxDxgbQ",
        rating: 4.3,
        purchases: 15000
    },
    {
        id: 28,
        name: "NBA 2K24",
        price: 699.99,
        discount: 25,
        category: "Spor",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/header.jpg",
        releaseDate: "2023-09-08",
        trailer: "https://www.youtube.com/embed/olyakr_5qZY",
        rating: 4.2,
        purchases: 20000
    },
    {
        id: 29,
        name: "Victoria 3",
        price: 399.99,
        discount: 30,
        category: "Strateji",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/529340/header.jpg",
        releaseDate: "2022-10-25",
        trailer: "https://www.youtube.com/embed/siZXs4d5Gqg",
        rating: 4.1,
        purchases: 15000
    },
    {
        id: 30,
        name: "Alan Wake 2",
        price: 599.99,
        discount: 0,
        category: "Aksiyon",
        image: "https://assetsio.reedpopcdn.com/alan-wake-2-cover.jpg",
        releaseDate: "2023-10-27",
        trailer: "https://www.youtube.com/embed/dlQ6kP24JfY",
        rating: 4.5,
        purchases: 20000
    }
];

// Oyunları görüntüleme fonksiyonu
function displayGames(filteredGames = games) {
    const gamesContainer = document.getElementById('games-container');
    const t = translations[currentLanguage];
    
    gamesContainer.innerHTML = '';
    
    filteredGames.forEach(game => {
        const discountedPrice = game.price * (1 - game.discount / 100);
        const stars = generateStarRating(game.rating);
        const formattedPurchases = formatNumber(game.purchases);
        
        const gameCard = `
            <div class="col-md-4 mb-4 fade-in">
                <div class="card h-100">
                    <img src="${game.image}" class="card-img-top" alt="${game.name}">
                    <div class="card-body">
                        <h5 class="card-title">${game.name}</h5>
                        <div class="rating mb-2">
                            ${stars}
                            <span class="rating-number">(${game.rating.toFixed(1)})</span>
                        </div>
                        <div class="purchases mb-2">
                            <i class="fas fa-users text-info"></i>
                            <span class="purchases-number">${formattedPurchases} satın aldı</span>
                        </div>
                        <p class="card-text">
                            <small class="text-muted">${t.category}: ${game.category}</small><br>
                            <small class="text-muted">${t.releaseDate}: ${game.releaseDate}</small>
                        </p>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                ${game.discount > 0 ? 
                                    `<span class="text-decoration-line-through text-muted">${game.price.toFixed(2)} TL</span><br>
                                    <span class="text-danger">${discountedPrice.toFixed(2)} TL</span>` 
                                    : 
                                    `<span>${game.price.toFixed(2)} TL</span>`
                                }
                            </div>
                            ${game.discount > 0 ? 
                                `<span class="badge bg-danger">-${game.discount}%</span>` 
                                : ''
                            }
                        </div>
                        <div class="d-flex gap-2">
                            <button class="btn btn-primary flex-grow-1" onclick="addToCart(${game.id})">
                                <i class="fas fa-shopping-cart"></i> ${t.addToCart}
                            </button>
                            <button class="btn btn-outline-secondary" onclick="watchTrailer('${game.trailer}')">
                                <i class="fas fa-play"></i> ${t.watchTrailer}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        gamesContainer.innerHTML += gameCard;
    });
}

// Yıldız puanlama oluşturma fonksiyonu
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    // Dolu yıldızlar
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-warning"></i>';
    }
    
    // Yarım yıldız
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    
    // Boş yıldızlar
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-warning"></i>';
    }
    
    return stars;
}

// Sayıyı formatla (1000 -> 1K, 1000000 -> 1M gibi)
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Oyun filtreleme fonksiyonu
function filterGames(category) {
    let filteredGames = category === 'all' ? 
        games : 
        games.filter(game => game.category === category);
    
    displayGames(filteredGames);
}

// Trailer izleme fonksiyonu
function watchTrailer(trailerUrl) {
    const trailerVideo = document.getElementById('trailerVideo');
    trailerVideo.src = trailerUrl;
    
    const trailerModal = new bootstrap.Modal(document.getElementById('trailerModal'));
    trailerModal.show();
}

// Sepete ekleme fonksiyonu güncelleniyor
function addToCart(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    const cartCount = document.getElementById('cart-count');
    const currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;
    
    // Sepet öğelerini güncelle
    const cartItems = document.getElementById('cart-items');
    const discountedPrice = game.price * (1 - game.discount / 100);
    
    const cartItem = `
        <div class="cart-item mb-3" data-game-id="${game.id}" data-price="${discountedPrice}">
            <div class="d-flex gap-3">
                <img src="${game.image}" alt="${game.name}" style="width: 80px; height: 80px; object-fit: cover;">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${game.name}</h6>
                    <p class="mb-1">${discountedPrice.toFixed(2)} TL</p>
                    <div class="d-flex align-items-center gap-2">
                        <input type="number" class="form-control form-control-sm quantity-input" 
                            value="1" min="1" style="width: 60px" onchange="updateCartTotal()">
                        <button class="btn btn-sm btn-danger" onclick="removeFromCart(this)">
                            <i class="fas fa-trash"></i> Kaldır
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    cartItems.innerHTML += cartItem;
    updateCartTotal();
}

// Sepet toplamını güncelleme fonksiyonu güncelleniyor
function updateCartTotal() {
    let total = 0;
    const cartItems = document.querySelectorAll('.cart-item');
    
    cartItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        total += price * quantity;
    });

    // Ara toplam
    const subtotal = total;
    document.getElementById('subtotal').textContent = `${subtotal.toFixed(2)} TL`;

    // İndirim tutarı
    const discountAmount = (subtotal * currentDiscount) / 100;
    document.getElementById('discount').textContent = `-${discountAmount.toFixed(2)} TL`;

    // Genel toplam
    const finalTotal = subtotal - discountAmount;
    document.getElementById('cart-total').textContent = `${finalTotal.toFixed(2)} TL`;

    // Sepet boşsa sıfırla
    if (cartItems.length === 0) {
        document.getElementById('subtotal').textContent = '0.00 TL';
        document.getElementById('discount').textContent = '0.00 TL';
        document.getElementById('cart-total').textContent = '0.00 TL';
    }
}

// Login işlemi
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Burada login mantığınızı ekleyebilirsiniz
    console.log('Login attempt:', { email, password, rememberMe });
    
    // Modal'ı kapat
    const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
}

// Register işlemi
function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
    
    if (password !== passwordConfirm) {
        alert('Şifreler eşleşmiyor!');
        return false;
    }
    
    // Burada kayıt mantığınızı ekleyebilirsiniz
    console.log('Register attempt:', { name, email, password });
    
    // Modal'ı kapat
    const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    modal.hide();
}

// Checkout işlemi
function checkout() {
    // Burada ödeme mantığınızı ekleyebilirsiniz
    alert('Ödeme işlemi başlatılıyor...');
}

// Sayfa yüklendiğinde dil ayarını kontrol et
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
    
    displayGames();
});

// Live Support fonksiyonları
function toggleLiveSupport() {
    const chatWindow = document.getElementById('liveSupportChat');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
}

function minimizeChat() {
    const chatWindow = document.getElementById('liveSupportChat');
    chatWindow.style.display = 'none';
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        chatMessages.innerHTML += `
            <div class="message user">
                <div class="message-content">${message}</div>
                <div class="message-time">${time}</div>
            </div>
        `;
        
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Parçacık animasyonu için fonksiyonlar
function createParticle() {
    const container = document.getElementById('particles-container');
    const particle = document.createElement('div');
    
    // Rastgele boyut (10-30px arası)
    const size = Math.random() * 20 + 10;
    
    // Rastgele başlangıç pozisyonu
    const startPositionX = Math.random() * window.innerWidth;
    
    particle.className = 'particle';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startPositionX}px`;
    particle.style.bottom = '-50px';
    
    // Rastgele animasyon süresi (4-8 saniye arası)
    const animationDuration = Math.random() * 4 + 4;
    particle.style.animation = `float ${animationDuration}s linear`;
    
    container.appendChild(particle);
    
    // Animasyon bitince parçacığı kaldır
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Parçacık oluşturma döngüsü
function startParticleAnimation() {
    // Her 200ms'de bir yeni parçacık oluştur
    setInterval(createParticle, 200);
}

// Sayfa yüklendiğinde parçacık animasyonunu başlat
document.addEventListener('DOMContentLoaded', () => {
    startParticleAnimation();
    // ... mevcut DOMContentLoaded kodları ...
});

// Renk teması değiştirme fonksiyonu
function changeColorTheme() {
    const body = document.body;
    const themes = [
        ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'], // Varsayılan tema
        ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96E6B3'], // Yaz teması
        ['#B24592', '#F15F79', '#FF867A', '#FF9B6A'], // Sonbahar teması
        ['#43C6AC', '#191654', '#6DD5ED', '#2193b0'], // Kış teması
        ['#11998e', '#38ef7d', '#108dc7', '#ef8e38']  // İlkbahar teması
    ];
    
    const currentTheme = getComputedStyle(body).backgroundImage;
    let nextThemeIndex = 0;
    
    // Mevcut temayı bul ve bir sonrakine geç
    themes.forEach((theme, index) => {
        if (currentTheme.includes(theme[0])) {
            nextThemeIndex = (index + 1) % themes.length;
        }
    });
    
    // Yeni temayı uygula
    body.style.background = `linear-gradient(-45deg, ${themes[nextThemeIndex].join(', ')})`;
    body.style.backgroundSize = '400% 400%';
}

// Tema değiştirme butonunu navbar'a ekle
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar .container');
    const themeButton = document.createElement('button');
    themeButton.className = 'btn btn-outline-light ms-2';
    themeButton.innerHTML = '<i class="fas fa-palette"></i>';
    themeButton.onclick = changeColorTheme;
    navbar.appendChild(themeButton);
});

// İndirim kodları listesi
const validCoupons = {
    'KISBAHARA': 25, // %25 indirim
    'OYUNSEVER': 15, // %15 indirim
    'GAMESTORE50': 50, // %50 indirim
    'HOSGELDIN10': 10 // %10 indirim
};

let currentDiscount = 0;
let appliedCoupon = null;

// İndirim kodunu uygulama fonksiyonu
function applyCoupon() {
    const couponInput = document.getElementById('couponInput');
    const couponMessage = document.getElementById('couponMessage');
    const couponCode = couponInput.value.trim().toUpperCase();

    if (appliedCoupon) {
        couponMessage.textContent = 'Zaten bir indirim kodu uygulandı!';
        couponMessage.style.color = 'red';
        return;
    }

    if (validCoupons.hasOwnProperty(couponCode)) {
        currentDiscount = validCoupons[couponCode];
        appliedCoupon = couponCode;
        couponMessage.textContent = `%${currentDiscount} indirim uygulandı!`;
        couponMessage.style.color = 'green';
        updateCartTotal();
    } else {
        couponMessage.textContent = 'Geçersiz indirim kodu!';
        couponMessage.style.color = 'red';
    }
}

// Sepetten ürün kaldırma fonksiyonunu güncelliyoruz
function removeFromCart(element) {
    element.closest('.cart-item').remove();
    updateCartCount();
    updateCartTotal();
    
    // Sepet boşsa indirim kodunu sıfırla
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems.length === 0) {
        currentDiscount = 0;
        appliedCoupon = null;
        document.getElementById('couponInput').value = '';
        document.getElementById('couponMessage').textContent = '';
    }
}

// Checkout fonksiyonunu güncelliyoruz
function checkout() {
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems.length === 0) {
        alert('Sepetiniz boş!');
        return;
    }

    const total = document.getElementById('cart-total').textContent;
    let message = `Toplam Tutar: ${total}\n`;
    if (appliedCoupon) {
        message += `Uygulanan İndirim Kodu: ${appliedCoupon} (%${currentDiscount})\n`;
    }
    message += 'Satın alma işlemi başarıyla tamamlandı!';
    
    alert(message);
    
    // Sepeti temizle
    document.getElementById('cart-items').innerHTML = '';
    currentDiscount = 0;
    appliedCoupon = null;
    document.getElementById('couponInput').value = '';
    document.getElementById('couponMessage').textContent = '';
    updateCartCount();
    updateCartTotal();
}