// Конфигурация
const IMAGE_PLACEHOLDER = 'linear-gradient(45deg, #2c3e50, #4ca1af)';

// Данные апартаментов
const apartments = [
  {
    id: 1,
    title: "Премиальные апартаменты с панорамным видом",
    location: "Сочи, Адлер",
    price: 35000,
    beds: 2,
    area: 85,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  // ... другие апартаменты
];

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.querySelector('app-root');
  
  // Создаем контейнер
  const container = document.createElement('div');
  container.className = 'apartments-grid';
  appRoot.innerHTML = '';
  appRoot.appendChild(container);

  // Загружаем апартаменты
  loadApartments(container);
});

// Загрузка и отображение апартаментов
function loadApartments(container) {
  apartments.forEach(apartment => {
    const card = createApartmentCard(apartment);
    container.appendChild(card);
    preloadImage(apartment.image, card);
  });
}

// Создание карточки апартамента
function createApartmentCard(apartment) {
  const card = document.createElement('div');
  card.className = 'apartment-card';
  card.innerHTML = `
    <div class="apartment-image" style="background: ${IMAGE_PLACEHOLDER}"></div>
    <div class="apartment-info">
      <h3>${apartment.title}</h3>
      <p>${apartment.location}</p>
      <p>${apartment.beds} спальни • ${apartment.area} м²</p>
      <p class="price">${apartment.price.toLocaleString()} ₽/ночь</p>
    </div>
  `;
  return card;
}

// Предзагрузка изображений
function preloadImage(url, card) {
  const img = new Image();
  const imgElement = card.querySelector('.apartment-image');
  
  img.onload = () => {
    imgElement.style.backgroundImage = `url(${url})`;
    imgElement.classList.add('loaded');
  };
  
  img.onerror = () => {
    console.error('Ошибка загрузки изображения:', url);
    imgElement.style.background = IMAGE_PLACEHOLDER;
  };
  
  img.src = url;
}
