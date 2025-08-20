  // On attend que tout le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', function() {

    // On dit à GSAP d'utiliser le plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // On cible toutes nos sections qui ont la classe .cv-section
    gsap.utils.toArray('.cv-section').forEach(section => {

        // Pour chaque section, on crée une animation
        gsap.to(section, { // On anime VERS l'état final
            opacity: 1,
            y: 0, // On ramène à la position initiale (transform: translateY(0))
            duration: 1,
            ease: 'power2.out',
            

            // C'est ici que la magie de ScrollTrigger opère
            scrollTrigger: {
                trigger: section, // L'élément qui déclenche l'animation
                start: 'top 80%', // L'animation commence quand le haut de la section atteint 80% du bas de la fenêtre
                toggleActions: 'play reverse play reverse', // L'animation se joue une fois et ne s'inverse pas
               
            }
        });
    });
});