document.addEventListener('DOMContentLoaded', () => {
    const apartments = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            location: 'Центр',
            description: 'Лофт в историческом здании',
            pricePerNight: '8 500₽'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            location: 'Набережная',
            description: 'Панорамный вид на реку',
            pricePerNight: '10 000₽'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            location: 'Парковый квартал',
            description: 'Тихое местоположение рядом с парком',
            pricePerNight: '7 500₽'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            location: 'Бизнес-центр',
            description: 'Идеально подходит для деловых поездок',
            pricePerNight: '9 000₽'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            location: 'Зелёный район',
            description: 'Просторные семейные апартаменты',
            pricePerNight: '12 000₽'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            location: 'Новый город',
            description: 'Новостройка с современной инфраструктурой',
            pricePerNight: '6 500₽'
        }
    ];

    // Генерация карточек апартаментов
    function generateApartments() {
        const container = document.getElementById('apartmentsContainer');
        apartments.forEach(apartment => {
            let div = `
                <div class="apartment-card">
                    <div class="apartment-image">
                        <img src="${apartment.imageUrl}" alt="Фото апартаментов ${apartment.location}">
                    </div>
                    <div class="apartment-info">
                        <h3>${apartment.description}</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i> Район: ${apartment.location}</p>
                        <p class="price">Цена за ночь: <strong>${apartment.pricePerNight}</strong></p>
                        <a href="#booking" class="btn btn-primary">Забронировать</a>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', div);
        });
    }

    // Загрузка карточек
    generateApartments();
});

// Автоматическое обновление текущего года в подвале
const currentYearEl = document.querySelector('#currentYear');
if(currentYearEl){
    currentYearEl.textContent = new Date().getFullYear();
}
