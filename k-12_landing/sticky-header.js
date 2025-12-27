// Simple Sticky Header JavaScript - Just for sticky functionality

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
    
    ready(function() {
        const stickyHeader = document.querySelector('.sticky-header');
        
        if (!stickyHeader) {
            console.warn('Sticky header element not found');
            return;
        }
        
        // Function to handle scroll events for enhanced shadow
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add shadow when scrolled
            if (scrollTop > 10) {
                stickyHeader.classList.add('scrolled');
            } else {
                stickyHeader.classList.remove('scrolled');
            }
        }
        
        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        console.log('Sticky header initialized successfully');
        
        // Debug function
        window.debugStickyHeader = function() {
            console.log('=== Sticky Header Debug Info ===');
            console.log('Header element:', stickyHeader);
            console.log('Header classes:', stickyHeader.className);
            console.log('Current scroll position:', window.pageYOffset);
            console.log('Header computed style position:', window.getComputedStyle(stickyHeader).position);
        };
    });
})();