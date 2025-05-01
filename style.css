// Данные апартаментов
const apartments = [
  {
    id: 1,
    title: "Морской бриз",
    location: "Сочи, Адлер",
    price: 35000,
    beds: 2,
    area: 85,
    description: "Элитные апартаменты с панорамным видом на море, современный ремонт и инфраструктура премиум-класса.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Вид на море", "2 спальни", "Бассейн", "Парковка"]
  },
  {
    id: 2,
    title: "Центральный люкс",
    location: "Сочи, Центр",
    price: 45000,
    beds: 3,
    area: 120,
    description: "Роскошные апартаменты в самом центре города с панорамными окнами и дизайнерским ремонтом.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Центр города", "3 спальни", "Консьерж-сервис", "Терраса"]
  },
  {
    id: 3,
    title: "Горная вилла",
    location: "Красная Поляна",
    price: 60000,
    beds: 4,
    area: 180,
    description: "Эксклюзивная вилла у подножья гор с частным садом и SPA-комплексом.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Горный вид", "4 спальни", "Частный бассейн", "Камин"]
  }
];

// Инициализация приложения
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  const appRoot = document.querySelector('app-root');
  appRoot.innerHTML = '<div class="apartments-grid"></div>';
  renderApartments();
}

function renderApartments() {
  const container = document.querySelector('.apartments-grid');
  
  apartments.forEach(apartment => {
    const card = document.createElement('div');
    card.className = 'apartment-card';
    card.id = `apartment-${apartment.id}`;
    card.innerHTML = `
      <div class="apartment-image-container">
        <img 
          class="apartment-image" 
          src="${apartment.image}" 
          alt="${apartment.title}" 
          loading="lazy"
        >
      </div>
      <div class="apartment-info">
        <h3>${apartment.title}</h3>
        <p class="location">${apartment.location}</p>
        <p class="features">${apartment.beds} спальни • ${apartment.area} м²</p>
        <p class="apartment-description">${apartment.description}</p>
        <p class="price">${apartment.price.toLocaleString()} ₽/ночь</p>
        <button class="book-btn" onclick="showBookingForm(${apartment.id})">Забронировать</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Функция для формы бронирования
window.showBookingForm = function(apartmentId) {
  const apartment = apartments.find(a => a.id === apartmentId);
  alert(`Бронирование: ${apartment.title}\nЦена: ${apartment.price.toLocaleString()} ₽/ночь\n\nМы свяжемся с вами для подтверждения!`);
}
