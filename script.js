document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scroll-to-info');
    
    if (scrollBtn) {
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = scrollBtn.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});
