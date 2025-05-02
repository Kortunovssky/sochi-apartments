document.addEventListener('DOMContentLoaded', () => {
    // Установка текущего года в футере
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    };
    
    menuToggle.addEventListener('click', toggleMenu);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    
    const handleScroll = () => {
        backToTop.style.opacity = window.pageYOffset > 300 ? '1' : '0';
        backToTop.style.visibility = window.pageYOffset > 300 ? 'visible' : 'hidden';
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Booking form functionality
    const bookingForm = document.getElementById('bookingForm');
    const notification = document.getElementById('notification');
    
    // Sample apartment data
    const apartments = [
        {
            id: 1,
            name: "Лофт в центре",
            location: "Центральный район",
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            area: 85,
            rooms: 2,
            guests: 4,
            prices: {
                day1: 8500,
                day2: 15000,
                day3plus: 6500
            }
        },
        {
            id: 2,
            name: "Студия с видом",
            location: "Деловой район",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            area: 45,
            rooms: 1,
            guests: 2,
            prices: {
                day1: 6000,
                day2: 10800,
                day3plus: 5000
            }
        },
        {
            id: 3,
            name: "Пентхаус",
            location: "Премиум район",
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            area: 150,
            rooms: 3,
            guests: 6,
            prices: {
                day1: 15000,
                day2: 27000,
                day3plus: 12000
            }
        },
        {
            id: 4,
            name: "Апартаменты у парка",
            location: "Зеленый район",
            image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            area: 65,
            rooms: 2,
            guests: 4,
            prices: {
                day1: 7200,
                day2: 13000,
                day3plus: 6000
            }
        },
        {
            id: 5,
            name: "Бизнес-апартаменты",
            location: "Деловой центр",
            image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            area: 55,
            rooms: 1,
            guests: 2,
            prices: {
                day1: 9000,
                day2: 16200,
                day3plus: 7500
            }
        },
        {
            id: 6,
            name: "Семейные апартаменты",
            location: "Спальный район",
            image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
            area: 90,
            rooms: 3,
            guests: 6,
            prices: {
                day1: 10000,
                day2: 18000,
                day3plus: 8000
            }
        },
        {
            id: 7,
            name: "Элитные апартаменты",
            location: "Престижный район",
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            area: 120,
            rooms: 3,
            guests: 5,
            prices: {
                day1: 12500,
                day2: 22500,
                day3plus: 10000
            }
        }
    ];
    
    // Load apartments into the grid and select
    const apartmentsContainer = document.getElementById('apartmentsContainer');
    const apartmentSelect = document.getElementById('apartment');
    
    const formatPrice = (price) => new Intl.NumberFormat('ru-RU').format(price);
    
    apartments.forEach(apartment => {
        // Create apartment card
        const apartmentCard = document.createElement('div');
        apartmentCard.className = 'apartment-card';
        apartmentCard.innerHTML = `
            <div class="apartment-image">
                <img src="${apartment.image}" alt="${apartment.name}" loading="lazy">
            </div>
            <div class="apartment-info">
                <h3>${apartment.name}</h3>
                <div class="apartment-location">
                    <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                    <span>${apartment.location}</span>
                </div>
                <div class="apartment-details">
                    <p><i class="fas fa-ruler-combined" aria-hidden="true"></i> Площадь: ${apartment.area} м²</p>
                    <p><i class="fas fa-bed" aria-hidden="true"></i> Комнат: ${apartment.rooms}</p>
                    <p><i class="fas fa-user-friends" aria-hidden="true"></i> До ${apartment.guests} гостей</p>
                </div>
                <div class="apartment-pricing">
                    <p>1 сутки: <strong>${formatPrice(apartment.prices.day1)} ₽</strong></p>
                    <p>2 суток: <strong>${formatPrice(apartment.prices.day2)} ₽</strong></p>
                    <p>3+ суток: <strong>${formatPrice(apartment.prices.day3plus)} ₽/сутки</strong></p>
                </div>
                <a href="#booking" class="btn btn-primary" data-apartment="${apartment.name}">Забронировать</a>
            </div>
        `;
        apartmentsContainer.appendChild(apartmentCard);
        
        // Add to select in booking form
        const option = document.createElement('option');
        option.value = apartment.name;
        option.textContent = apartment.name;
        apartmentSelect.appendChild(option);
    });
    
    // Form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const apartment = document.getElementById('apartment').value;
        
        // Validation
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
        
        // Show success message
        showNotification(`Ваша заявка на "${apartment}" успешно отправлена! Мы свяжемся с вами в ближайшее время.`, 'success');
        
        // Reset form
        bookingForm.reset();
    });
    
    // Show notification function
    const showNotification = (message, type) => {
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    };
    
    // Scroll animations
    const animateOnScroll = () => {
        document.querySelectorAll('.section').forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles
    document.querySelectorAll('.section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // First run
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});
