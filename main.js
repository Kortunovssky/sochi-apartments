// Данные апартаментов
const apartments = [
  {
    id: 1,
    title: "Апартаменты с видом на море",
    location: "Сочи, Адлер",
    price: 35000,
    beds: 2,
    area: 85,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Люкс в центре Сочи",
    location: "Сочи, Центр",
    price: 45000,
    beds: 3,
    area: 120,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
        <p>${apartment.location}</p>
        <p>${apartment.beds} спальни • ${apartment.area} м²</p>
        <p class="price">${apartment.price.toLocaleString()} ₽/ночь</p>
      </div>
    `;
    container.appendChild(card);
  });
}
