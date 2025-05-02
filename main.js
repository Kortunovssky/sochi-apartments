document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Booking form functionality
    const bookingForm = document.getElementById('bookingForm');
    const notification = document.getElementById('notification');
    
    // Set apartment name when "Book" button is clicked
    document.querySelectorAll('[data-apartment]').forEach(button => {
        button.addEventListener('click', function() {
            const apartmentName = this.getAttribute('data-apartment');
            document.getElementById('apartment').value = apartmentName;
        });
    });
    
    // Form submission
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const apartment = document.getElementById('apartment').value;
        
        // Simple validation
        if (!name || !phone || !apartment) {
            showNotification('Пожалуйста, заполните все поля', 'error');
            return;
        }
        
        // Phone validation
        const phoneRegex = /^(\+7|8)[\s(]?\d{3}[)\s]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
        if (!phoneRegex.test(phone)) {
            showNotification('Пожалуйста, введите корректный номер телефона', 'error');
            return;
        }
        
        // In a real app, you would send this data to a server
        console.log('Booking submitted:', { name, phone, apartment });
        
        // Show success message
        showNotification('Ваша заявка на "' + apartment + '" успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
        
        // Reset form
        bookingForm.reset();
    });
    
    // Show notification function
    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }
    
    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about, .apartments, .benefits, .booking, .contacts');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles
    document.querySelectorAll('.about, .apartments, .benefits, .booking, .contacts').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // First run
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});
