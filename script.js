// Variables globales
let currentPage = 1;
const totalPages = 4;
let swiper = null;

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    initializeStarfield();
    initializePage1();
    initializeSwiper();
});

// ==================== STARFIELD ====================
function initializeStarfield() {
    const starfield = document.getElementById('starfield');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 2;
        
        star.style.left = x + '%';
        star.style.top = y + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = duration + 's';
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starfield.appendChild(star);
    }
}

// ==================== PAGE 1 - SURPRISE ====================
function initializePage1() {
    const surpriseText = document.querySelector('.surprise-text');
    
    // Animer le texte d'apparition
    gsap.to(surpriseText, {
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: 'power2.out'
    });
}

// ==================== PAGE 2 - JOYEUX ANNIVERSAIRE ====================
function animatePage2() {
    const page2 = document.getElementById('page2');
    const birthdayText = document.querySelector('.birthday-text');
    const birthdayMessage = document.querySelector('.birthday-message');
    
    // Animer le texte principal
    gsap.fromTo(birthdayText, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'back.out' }
    );
    
    // Animer le message
    setTimeout(() => {
        gsap.to(birthdayMessage, {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out'
        });
    }, 500);
    
    // Créer des confettis
    setTimeout(() => {
        createConfetti();
    }, 800);
    
    // Créer des ballons
    createBalloons(page2);
    
    // Créer des cœurs flottants
    createFloatingHearts(page2);
}

// ==================== CONFETTIS ====================
function createConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    // Deuxième explosion
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.5 }
        });
    }, 200);
    
    // Troisième explosion
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.5 }
        });
    }, 400);
}

// ==================== BALLONS ====================
function createBalloons(container) {
    const colors = ['#FF69B4', '#FFD700', '#87CEEB', '#98FF98', '#FF6347', '#DDA0DD'];
    
    for (let i = 0; i < 8; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        const size = Math.random() * 40 + 30; // 30-70px
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = i * 0.3;
        const leftPosition = Math.random() * 100;
        
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
        balloon.style.background = color;
        balloon.style.left = leftPosition + '%';
        balloon.style.bottom = '-100px';
        balloon.style.animationDelay = delay + 's';
        
        container.appendChild(balloon);
        
        // Supprimer après l'animation
        setTimeout(() => {
            balloon.remove();
        }, 5000 + delay * 1000);
    }
}

// ==================== CŒURS FLOTTANTS ====================
function createFloatingHearts(container) {
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '❤️';
        
        const delay = Math.random() * 2;
        const leftPosition = Math.random() * 100;
        
        heart.style.left = leftPosition + '%';
        heart.style.bottom = '-30px';
        heart.style.animationDelay = delay + 's';
        
        container.appendChild(heart);
        
        // Supprimer après l'animation
        setTimeout(() => {
            heart.remove();
        }, 7000 + delay * 1000);
    }
}

// ==================== PAGE 3 - GALERIE ====================
function initializeSwiper() {
    // Créer les slides de la galerie avec des images de placeholder
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    // Photos de placeholder (vous pouvez les remplacer par vos propres photos)
    const photos = [
        'https://via.placeholder.com/600x400/ff9a9e/ffffff?text=Photo+1',
        'https://via.placeholder.com/600x400/fad0c4/ffffff?text=Photo+2',
        'https://via.placeholder.com/600x400/f093fb/ffffff?text=Photo+3',
        'https://via.placeholder.com/600x400/f5576c/ffffff?text=Photo+4',
        'https://via.placeholder.com/600x400/667eea/ffffff?text=Photo+5'
    ];
    
    photos.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${photo}" alt="Photo ${index + 1}">`;
        swiperWrapper.appendChild(slide);
    });
    
    // Initialiser Swiper
    swiper = new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function animatePage3() {
    const galleryMessage = document.querySelector('.gallery-message');
    
    // Animer le message de la galerie
    gsap.to(galleryMessage, {
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out'
    });
}

// ==================== PAGE 4 - LETTRE ====================
function animatePage4() {
    const letter = document.getElementById('letter');
    
    // Ajouter la classe opened pour l'animation
    letter.classList.add('opened');
}

// ==================== NAVIGATION ====================
function nextPage() {
    if (currentPage < totalPages) {
        // Retirer la classe active de la page courante
        document.getElementById(`page${currentPage}`).classList.remove('active');
        
        // Incrémenter la page
        currentPage++;
        
        // Ajouter la classe active à la nouvelle page
        document.getElementById(`page${currentPage}`).classList.add('active');
        
        // Mettre à jour l'indicateur
        document.getElementById('pageNumber').textContent = currentPage;
        
        // Animer la nouvelle page
        animateCurrentPage();
        
        // Mettre à jour les boutons
        updateButtons();
    }
}

function prevPage() {
    if (currentPage > 1) {
        // Retirer la classe active de la page courante
        document.getElementById(`page${currentPage}`).classList.remove('active');
        
        // Décrémenter la page
        currentPage--;
        
        // Ajouter la classe active à la nouvelle page
        document.getElementById(`page${currentPage}`).classList.add('active');
        
        // Mettre à jour l'indicateur
        document.getElementById('pageNumber').textContent = currentPage;
        
        // Animer la nouvelle page
        animateCurrentPage();
        
        // Mettre à jour les boutons
        updateButtons();
    }
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Masquer les boutons si nécessaire
    if (currentPage === 1) {
        prevBtn.classList.add('btn-hidden');
    } else {
        prevBtn.classList.remove('btn-hidden');
    }
    
    if (currentPage === totalPages) {
        nextBtn.classList.add('btn-hidden');
    } else {
        nextBtn.classList.remove('btn-hidden');
    }
}

function animateCurrentPage() {
    switch(currentPage) {
        case 2:
            animatePage2();
            break;
        case 3:
            animatePage3();
            break;
        case 4:
            animatePage4();
            break;
    }
}

// Initialiser les boutons
updateButtons();
