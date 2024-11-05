document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Function to update active link
    const updateActiveLink = () => {
        const fromTop = window.scrollY + 60;
        
        document.querySelectorAll('.project').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                const correspondingLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's link
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    };
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Update active link on click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    
    // Set initial active link on page load
    updateActiveLink();
}); 