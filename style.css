/* Reset & Base Styles */
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --light-color: #ecf0f1;
    --dark-color: #2c3e50;
    --text-color: #333;
    --text-light: #7f8c8d;
    --transition-speed: 0.3s;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
    background-color: var(--light-color);
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

h1, h2, h3, h4 {
    margin-bottom: 1rem;
    line-height: 1.2;
    font-weight: bold;
}

p {
    margin-bottom: 1rem;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background-color: var(--secondary-color);
    color: white;
    border-radius: 4px;
    font-weight: 600;
    transition: all var(--transition-speed) ease;
    border: none;
    cursor: pointer;
    user-select: none;
}

.btn:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn-primary {
    background-color: var(--accent-color);
}

.btn-primary:hover {
    background-color: #c0392b;
}

.visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    white-space: nowrap;
    width: 1px;
}

/* HEADER SECTION */
.page-header {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 15px 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-color);
    letter-spacing: 1px;
}

.nav-list {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-link {
    font-weight: 600;
    transition: color var(--transition-speed);
}

.nav-link:hover {
    color: var(--secondary-color);
}

.menu-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* HERO SECTION */
.hero-section {
    height: calc(100vh - 80px); /* минус высота хедера */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent),
                url("https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80") no-repeat center center / cover;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px; /* Высота заголовка */
}

.hero-content {
    max-width: 600px;
    text-align: center;
}

.hero h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: 1.5rem;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

/* ABOUT SECTION */
.about-section {
    padding: 5rem 0;
    background-color: var(--light-color);
}

.about h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.2rem;
    color: var(--primary-color);
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.about-card {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform var(--transition-speed), box-shadow var(--transition-speed);
}

.about-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.about-card svg {
    width: 3em;
    height: 3em;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
}

.about-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

/* APARTMENTS SECTION */
.apartments-section {
    padding: 5rem 0;
    background-color: #fafafa;
}

.apartments h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.2rem;
    color: var(--primary-color);
}

.apartments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.apartment-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform var(--transition-speed), box-shadow var(--transition-speed);
}

.apartment-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.apartment-image {
    height: 200px;
    overflow: hidden;
}

.apartment-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-speed);
}

.apartment-card:hover .apartment-image img {
    transform: scale(1.1);
}

.apartment-info {
    padding: 1.5rem;
}

.apartment-info h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

.apartment-location {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: var(--text-light);
}

.apartment-location svg {
    margin-right: 0.5rem;
    color: var(--secondary-color);
}

.apartment-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    color: var(--text-light);
}

.apartment-details span {
    display: flex;
    align-items: center;
}

.apartment-details svg {
    margin-right: 0.5rem;
    color: var(--secondary-color);
}

.apartment-pricing {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

/* BENEFITS SECTION */
.benefits-section {
    padding: 5rem 0;
    background-color: var(--light-color);
}

.benefits h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.2rem;
    color: var(--primary-color);
}

.benefits-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.benefits-text h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
}

.benefits-text ul {
    margin-top: 2rem;
}

.benefits-text li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
}

.benefits-text svg {
    color: var(--accent-color);
    margin-right: 1rem;
}

.benefits-image {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.benefits-image img {
    width: 100%;
    height: auto;
    display: block;
}

/* BOOKING SECTION */
.booking-section {
    padding: 5rem 0;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
               url("https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80") no-repeat center center / cover;
    color: white;
}

.booking-form {
    max-width: 600px;
    margin: 0 auto;
    background-color: white;
    padding: 3rem;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    color: var(--text-color);
}

.booking-form h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.booking-form p {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-light);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color var(--transition-speed);
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--secondary-color);
}

/* CONTACTS SECTION */
.contacts-section {
    padding: 5rem 0;
}

.contacts h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.2rem;
    color: var(--primary-color);
}

.contacts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-info h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
}

.contact-info p {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
}

.contact-info svg {
    margin-right: 1rem;
    color: var(--secondary-color);
    width: 20px;
    text-align: center;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--secondary-color);
    color: white;
    transition: background-color var(--transition-speed);
}

.social-links a:hover {
    background-color: var(--primary-color);
}

.map iframe {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* FOOTER SECTION */
.site-footer {
    background-color: var(--primary-color);
    color: white;
    padding: 2rem 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.copyright {
    font-size: 0.9rem;
}

.back-to-top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--accent-color);
    color: white;
    transition: all var(--transition-speed);
}

.back-to-top:hover {
    background-color: #c0392b;
    transform: translateY(-3px);
}

/* RESPONSIVE DESIGN */
@media screen and (max-width: 992px) {
    .benefits-content {
        grid-template-columns: 1fr;
    }
    
    .benefits-image {
        order: -1;
    }
    
    .contacts-grid {
        grid-template-columns: 1fr;
    }
    
    .map {
        height: 300px;
    }
}

@media screen and (max-width: 768px) {
    header .nav-list {
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        background-color: white;
        flex-direction: column;
        padding: 2rem;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        transform: translateY(-150%);
        transition: transform var(--transition-speed);
        z-index: 999;
    }
    
    header .nav-list.active {
        transform: translateY(0);
    }
    
    .menu-toggle {
        display: block;
    }
    
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
    
    .booking-form {
        padding: 2rem 1.5rem;
    }
    
    .about-grid,
    .apartments-grid {
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 576px) {
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero p {
        font-size: 0.9rem;
    }
    
    .booking-form {
        padding: 1.5rem;
    }
    
    .apartment-card {
        grid-row-gap: 1rem;
    }
}
