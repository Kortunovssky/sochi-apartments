// Здесь будет основной код вашего приложения
// Пример структуры:
const apartments = [
  {
    id: 1,
    title: "Апартаменты с видом на море",
    location: "Сочи, Адлер",
    price: 25000,
    beds: 2,
    area: 75,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Люкс в центре Сочи",
    location: "Сочи, Центр",
    price: 35000,
    beds: 3,
    area: 120,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Вилла у подножья гор",
    location: "Красная Поляна",
    price: 50000,
    beds: 4,
    area: 200,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// Функция для рендеринга карточек апартаментов
function renderApartments() {
  const container = document.querySelector('.apartments-container');
  
  apartments.forEach(apartment => {
    const card = document.createElement('div');
    card.className = 'apartment-card';
    card.innerHTML = `
      <img src="${apartment.image}" alt="${apartment.title}" class="apartment-image">
      <div class="apartment-info">
        <h3>${apartment.title}</h3>
        <p>${apartment.location}</p>
        <p>${apartment.beds} спальни, ${apartment.area} м²</p>
        <p class="price">${apartment.price.toLocaleString()} ₽/ночь</p>
        <button class="btn-primary" onclick="showBookingForm(${apartment.id})">Забронировать</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  renderApartments();
});