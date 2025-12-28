// FIXED HEADER - Simple and Direct

(function() {
    'use strict';
    
    function initFixedHeader() {
        const header = document.querySelector('.sticky-header');
        
        if (!header) {
            console.warn('Header not found');
            return;
        }
        
        // Force fixed positioning
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.left = '0';
        header.style.right = '0';
        header.style.width = '100%';
        header.style.zIndex = '10000';
        header.style.backgroundColor = '#fff';
        
        // Add shadow on scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
        
        console.log('Fixed header applied - header will stay at top');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFixedHeader);
    } else {
        initFixedHeader();
    }
})();