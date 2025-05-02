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
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
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
    
    // Sample apartment data
    const apartments = [
        {
            id: 1,
            name: "Элитные апартаменты на Тверской",
            location: "Центральный район",
            price: "250 000 ₽/мес",
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            bedrooms: 3,
            area: 120
        },
        {
            id: 2,
            name: "Лофт в Красном Октябре",
            location: "Якиманка",
            price: "180 000 ₽/мес",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            bedrooms: 2,
            area: 85
        },
        {
            id: 3,
            name: "Пентхаус с видом на Москву-реку",
            location: "Пресненский район",
            price: "350 000 ₽/мес",
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            bedrooms: 4,
            area: 200
        },
        {
            id: 4,
            name: "Студия в Башне Федерации",
            location: "Москва-Сити",
            price: "120 000 ₽/мес",
            image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            bedrooms: 1,
            area: 45
        }
    ];
    
    // Load apartments into the grid
    const apartmentsContainer = document.getElementById('apartmentsContainer');
    const apartmentSelect = document.getElementById('apartment');
    
    apartments.forEach(apartment => {
        // Add to apartments grid
        const apartmentCard = document.createElement('div');
        apartmentCard.className = 'apartment-card';
        apartmentCard.innerHTML = `
            <div class="apartment-image">
                <img src="${apartment.image}" alt="${apartment.name}">
            </div>
            <div class="apartment-info">
                <h3>${apartment.name}</h3>
                <div class="apartment-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${apartment.location}</span>
                </div>
                <div class="apartment-price">${apartment.price}</div>
                <div class="apartment-features">
                    <span><i class="fas fa-bed"></i> ${apartment.bedrooms} спальни</span>
                    <span><i class="fas fa-ruler-combined"></i> ${apartment.area} м²</span>
                </div>
                <a href="#booking" class="btn btn-primary" data-id="${apartment.id}">Забронировать</a>
            </div>
        `;
        apartmentsContainer.appendChild(apartmentCard);
        
        // Add to select in booking form
        const option = document.createElement('option');
        option.value = apartment.id;
        option.textContent = apartment.name;
        apartmentSelect.appendChild(option);
    });
    
    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    const notification = document.getElementById('notification');
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const apartmentId = document.getElementById('apartment').value;
        
        // Simple validation
        if (!name || !phone || !apartmentId) {
            showNotification('Пожалуйста, заполните все поля', 'error');
            return;
        }
        
        // In a real app, you would send this data to a server
        console.log('Booking submitted:', { name, phone, apartmentId });
        
        // Show success message
        showNotification('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
        
        // Reset form
        bookingForm.reset();
    });
    
    // Click on "Book" buttons in apartment cards
    document.querySelectorAll('[data-id]').forEach(button => {
        button.addEventListener('click', function() {
            const apartmentId = this.getAttribute('data-id');
            document.getElementById('apartment').value = apartmentId;
        });
    });
    
    // Show notification function
    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
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
