// Данные апартаментов
const apartments = [
  {
    id: 1,
    title: "Морской бриз",
    location: "Сочи, Адлер",
    description: "Элитные апартаменты с панорамным видом на море, современный ремонт и инфраструктура премиум-класса.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    prices: [25000, 22000, 20000],
    features: ["Вид на море", "2 спальни", "Бассейн", "Парковка"],
    type: "sea-view"
  },
  {
    id: 2,
    title: "Центральный люкс",
    location: "Сочи, Центр",
    description: "Роскошные апартаменты в самом центре города с панорамными окнами и дизайнерским ремонтом.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    prices: [35000, 32000, 30000],
    features: ["Центр города", "3 спальни", "Консьерж-сервис", "Терраса"],
    type: "luxury"
  },
  {
    id: 3,
    title: "Горная вилла",
    location: "Красная Поляна",
    description: "Эксклюзивная вилла у подножья гор с частным садом и SPA-комплексом.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    prices: [50000, 45000, 40000],
    features: ["Горный вид", "4 спальни", "Частный бассейн", "Камин"],
    type: "villa"
  },
  {
    id: 4,
    title: "Пентхаус 'Золотой'",
    location: "Сочи, Центр",
    description: "Эксклюзивный пентхаус с панорамными видами на море и горы, частным лифтом.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    prices: [75000, 70000, 65000],
    features: ["3 спальни", "Терраса", "Джакузи", "Парковка"],
    type: "luxury"
  },
  {
    id: 5,
    title: "Апартаменты 'Лазурные'",
    location: "Сочи, Имеретинская бухта",
    description: "Современные апартаменты в шаге от моря с развитой инфраструктурой.",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    prices: [30000, 28000, 25000],
    features: ["2 спальни", "Вид на море", "Бассейн", "Спа"],
    type: "sea-view"
  },
  {
    id: 6,
    title: "Вилла 'Горный воздух'",
    location: "Красная Поляна",
    description: "Просторная вилла в альпийском стиле с камином и сауной.",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    prices: [60000, 55000, 50000],
    features: ["5 спален", "Камин", "Сауна", "Бильярд"],
    type: "villa"
  }
];

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  renderApartments();
  setupEventListeners();
  setupSmoothScrolling();
});

// Рендер апартаментов
function renderApartments(filterType = 'all') {
  const container = document.getElementById('apartments-items');
  const filteredApartments = filterType === 'all' 
    ? apartments 
    : apartments.filter(apt => apt.type === filterType);
  
  container.innerHTML = filteredApartments.map(apartment => `
    <article class="apartment" data-id="${apartment.id}">
      <img src="${apartment.image}" alt="${apartment.title}" loading="lazy">
      <div class="apartment-details">
        <h4>${apartment.title}</h4>
        <p>${apartment.location}</p>
        <p class="apartment-description">${apartment.description}</p>
        <div class="apartment-features">
          ${apartment.features.map(feature => `<span>${feature}</span>`).join('')}
        </div>
        <div class="apartment-action">
          <ul>
            <li>
              <div class="apartment-period">На 1 сутки</div>
              <div class="apartment-price">${apartment.prices[0].toLocaleString()} ₽</div>
            </li>
            <li>
              <div class="apartment-period">На 1-3 суток</div>
              <div class="apartment-price">${apartment.prices[1].toLocaleString()} ₽ <span>/сутки</span></div>
            </li>
            <li>
              <div class="apartment-period">3+ суток</div>
              <div class="apartment-price">${apartment.prices[2].toLocaleString()} ₽ <span>/сутки</span></div>
            </li>
          </ul>
          <a href="#booking" class="button white-button book-btn">Забронировать</a>
        </div>
      </div>
    </article>
  `).join('');
}

// Настройка обработчиков событий
function setupEventListeners() {
  // Фильтрация
  document.querySelectorAll('.apartments-filter li').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.apartments-filter li').forEach(li => {
        li.classList.remove('active');
      });
      item.classList.add('active');
      renderApartments(item.dataset.type);
    });
  });

  // Бронирование
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('book-btn')) {
      e.preventDefault();
      const apartmentId = e.target.closest('.apartment').dataset.id;
      const apartment = apartments.find(a => a.id == apartmentId);
      showBookingModal(apartment);
    }
  });
}

// Плавная прокрутка
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Модальное окно бронирования
function showBookingModal(apartment) {
  const modalHtml = `
    <div class="modal-overlay">
      <div class="modal">
        <button class="close-modal">&times;</button>
        <h3>Бронирование: ${apartment.title}</h3>
        <p>${apartment.location}</p>
        
        <form class="booking-form">
          <div class="form-group">
            <label for="name">Ваше имя</label>
            <input type="text" id="name" required>
          </div>
          
          <div class="form-group">
            <label for="phone">Телефон</label>
            <input type="tel" id="phone" required>
          </div>
          
          <div class="form-group">
            <label for="dates">Даты проживания</label>
            <input type="text" id="dates" placeholder="Выберите даты" readonly>
          </div>
          
          <div class="form-group">
            <label>Тариф:</label>
            <div class="price-options">
              <label>
                <input type="radio" name="price" value="${apartment.prices[0]}" checked>
                1 сутки: ${apartment.prices[0].toLocaleString()} ₽
              </label>
              <label>
                <input type="radio" name="price" value="${apartment.prices[1]}">
                1-3 суток: ${apartment.prices[1].toLocaleString()} ₽/сутки
              </label>
              <label>
                <input type="radio" name="price" value="${apartment.prices[2]}">
                3+ суток: ${apartment.prices[2].toLocaleString()} ₽/сутки
              </label>
            </div>
          </div>
          
          <button type="submit" class="button">Подтвердить бронирование</button>
        </form>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  
  // Обработчики для модального окна
  const modal = document.querySelector('.modal-overlay');
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.remove();
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
  
  document.querySelector('.booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Ваше бронирование принято! Мы свяжемся с вами для подтверждения.');
    modal.remove();
  });
  
  // Инициализация выбора дат (можно подключить библиотеку flatpickr)
  document.getElementById('dates').addEventListener('focus', function() {
    this.type = 'date';
  });
}

// Полифиллы для старых браузеров
if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
