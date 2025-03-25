document.addEventListener('DOMContentLoaded', function() {
    // Initial animations
    animateOnLoad();
    
    // Scroll animations
    window.addEventListener('scroll', function() {
        animateOnScroll();
    });
    
    // Function for initial load animations
    function animateOnLoad() {
        const fadeInElements = document.querySelectorAll('.fade-in');
        
        fadeInElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, 300 * index);
        });
    }
    
    // Function for scroll animations
    function animateOnScroll() {
        const slideUpElements = document.querySelectorAll('.slide-up:not(.animated)');
        const slideLeftElements = document.querySelectorAll('.slide-left:not(.animated)');
        const slideRightElements = document.querySelectorAll('.slide-right:not(.animated)');
        
        const triggerBottom = window.innerHeight * 0.8;
        
        // Slide up animations
        slideUpElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animated');
                setTimeout(() => {
                    element.style.transform = 'translateY(0)';
                    element.style.opacity = '1';
                }, 150);
            }
        });
        
        // Slide left animations
        slideLeftElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animated');
                setTimeout(() => {
                    element.style.transform = 'translateX(0)';
                    element.style.opacity = '1';
                }, 150);
            }
        });
        
        // Slide right animations
        slideRightElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animated');
                setTimeout(() => {
                    element.style.transform = 'translateX(0)';
                    element.style.opacity = '1';
                }, 150);
            }
        });
    }
});

// Add these styles to your CSS for animation support
document.head.insertAdjacentHTML('beforeend', `
<style>
    .fade-in {
        opacity: 0;
        transition: opacity 1s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
    }
    
    .slide-up {
        opacity: 0;
        transform: translateY(50px);
        transition: transform 0.8s ease, opacity 0.8s ease;
    }
    
    .slide-left {
        opacity: 0;
        transform: translateX(50px);
        transition: transform 0.8s ease, opacity 0.8s ease;
    }
    
    .slide-right {
        opacity: 0;
        transform: translateX(-50px);
        transition: transform 0.8s ease, opacity 0.8s ease;
    }
</style>
`);