/**
 * ANIMATIONS DYNAMIQUES - Portfolio IT
 * Fonctionnalités :
 * 1. Animation au scroll
 * 2. Effets d'interaction
 * 3. Contrôle personnalisable
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== 1. ANIMATION AU SCROLL =====
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.shortcut, h1, h2');
        
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                el.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);

    // ===== 2. ANIMATIONS D'INTERACTION =====
    // Effet sur les raccourcis
    const shortcuts = document.querySelectorAll('.shortcut');
    
    shortcuts.forEach(shortcut => {
        // Pulse au hover
        shortcut.addEventListener('mouseenter', () => {
            shortcut.style.animation = 'pulse 1.5s ease infinite';
            shortcut.style.boxShadow = '0 0 15px rgba(0, 183, 255, 0.3)';
        });

        // Reset en sortie
        shortcut.addEventListener('mouseleave', () => {
            shortcut.style.animation = '';
            shortcut.style.boxShadow = '';
        });

        // Clique tactile
        shortcut.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // ===== 3. ANIMATION TITRE PRINCIPAL =====
    const title = document.querySelector('h1');
    if (title) {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            title.style.textShadow = `0 0 10px hsl(${hue}, 80%, 60%)`;
        }, 50);
    }

    // ===== FONCTION UTILITAIRE =====
    // Délai d'animation séquentielle
    function animateSequentially(elements, animationClass) {
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add(animationClass);
            }, index * 200);
        });
    }
});

// ===== EXPORT POUR LES MODULES =====
export function initAnimations() {
    // Pour une intégration avec des frameworks
    console.log('Animations IT chargées !');
}