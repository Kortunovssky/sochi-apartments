document.addEventListener('DOMContentLoaded', () => {
    // Данные апартаментов
    const apartmentsData = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Лофт в центре',
            location: 'Исторический центр',
            description: 'Премиум лофт с уникальными видами.',
            features: ['Wi-Fi', 'Парковка', 'Холодильник'],
            prices: { nightly: '8 500₽' },
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Панорамный вид',
            location: 'Рядом с набережной',
            description: 'Открывайте окна на красоту реки.',
            features: ['Балкон', 'Кондиционер', 'Вид на воду'],
            prices: { nightly: '10 000₽' },
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Эксклюзивные апартаменты',
            location: 'Уютный парковый квартал',
            description: 'Живите в гармонии с природой.',
            features: ['Терраса', 'Частный сад', 'Детская площадка'],
            prices: { nightly: '7 500₽' },
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Компактные студии',
            location: 'Городской бизнес-центр',
            description: 'Все необходимое для комфортного отдыха.',
            features: ['Мини-кухня', 'Гардероб', 'Высокий этаж'],
            prices: { nightly: '9 000₽' },
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            title: 'Семейные апартаменты',
            location: 'Удобный спальный район',
            description: 'Широкая гостиная и просторные комнаты.',
            features: ['Игровая комната', 'Гараж', 'Домашняя библиотека'],
            prices: { nightly: '12 000₽' },
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Современная квартира',
            location: 'Новый жилой комплекс',
            description: 'Создана для современных потребностей.',
            features: ['Умный дом', 'Камеры наблюдения', 'Турникеты'],
            prices: { nightly: '6 500₽' },
        },
    ];

    // Генерируем карточки апартаментов
    const renderApartments = () => {
        const container = document.getElementById('apartmentsContainer');
        apartmentsData.forEach((apartment) => {
            const markup = `
                <div class="apartment-card">
                    <div class="apartment-image">
                        <img src="${apartment.imageUrl}" alt="${apartment.title}">
                    </div>
                    <div class="apartment-info">
                        <h3>${apartment.title}</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i> ${apartment.location}</p>
                        <p class="description">${apartment.description}</p>
                        <ul class="features">
                            ${apartment.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        <p class="prices">Стоимость за ночь: <strong>${apartment.prices.nightly}</strong></p>
                        <a href="#booking" class="btn btn-primary">Забронировать</a>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', markup);
        });
    };

    // Вызываем рендер карточек
    renderApartments();

    // Навигационная панель (гамбургер-меню)
    const toggleMenuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Отправка формы бронирования
    const form = document.getElementById('bookingForm');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', event => {
        event.preventDefault(); // Отменяем стандартную отправку формы
        showNotification('Заявка успешно отправлена!', 'success');
    });

    // Показ уведомлений
    const showNotification = (message, type = 'default') => {
        notification.innerText = message;
        notification.className = `notification ${type}`;
        setTimeout(() => {
            notification.className = '';
        }, 3000);
    };

    // Актуализация текущего года в футере
    const yearElement = document.getElementById('currentYear');
    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
