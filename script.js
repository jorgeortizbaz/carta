function home() {
    scrollTo(0, 0);
}

// Datos del menú
const menuData = {
    refrescos: [
        { name: 'Agua', description: '330ml', price: '1.50€', image: 'images/agua.jpg' },
        { name: 'Coca-Cola', description: '330ml', price: '2.40€', image: 'images/coca.jpg' },
        { name: 'Coca-Cola Zero', description: '330ml', price: '2.40€', image: 'images/cocazero.jpg' },
        { name: 'Fanta Limón', description: '330ml', price: '2.40€', image: 'images/fantalimon.jpg' },
        { name: 'Fanta Naranja', description: '330ml', price: '2.40€', image: 'images/fantanaranja.jpg' },
        { name: 'Sprite', description: '330ml', price: '2.40€', image: 'images/sprite.jpg' },
        { name: 'Nestea Maracuyá', description: '330ml', price: '2.40€', image: 'images/nestea.jpg' },
        { name: 'Aquarius', description: '330ml', price: '2.40€', image: 'images/aquarius.jpg' },
        { name: 'Schweppes Tónica', description: '330ml', price: '2.40€', image: 'images/tonica.jpg' },
        { name: 'Monster Energy', description: '500ml', price: '3.00€', image: 'images/monster.jpg' },
        { name: 'Monster Energy Ultra', description: '500ml', price: '3.00€', image: 'images/monsterblanco.jpg' },
        { name: 'Monster Energy Mango Loco', description: '500ml', price: '3.00€', image: 'images/monstermango.jpg' },
        { name: 'Monster Energy Manzana Ultra Paradise', description: '500ml', price: '3.00€', image: 'images/monstermanzana.jpg' },
        { name: 'Monster Energy Ultra Peachy Keen', description: '500ml', price: '3.00€', image: 'images/monstermelocoton.jpg' },
        { name: 'Monster Energy Rehub Recover', description: '500ml', price: '3.00€', image: 'images/rehab.jpg' },
    ],
    cervezas: {
        'De Barril': [
            { name: 'Kalimotxo', description: '500 ml', price: '3.50€', image: 'images/barrilmahou.jpg' },
            { name: 'Mahou Clásica', description: 'Caña/Pinta', price: '1.80€/3.50€', image: 'images/barrilmahou.jpg' },
            { name: 'Clara Mahou Clásica', description: 'Caña/Pinta', price: '1.80€/3.50€', image: 'images/barrilmahou.jpg' },
            { name: 'Mahou Maestra', description: 'Caña/Pinta', price: '2.20€/4.00€', image: 'images/barrilmaestra.jpg' },
            { name: 'Alhambra Roja', description: 'Caña/Pinta', price: '2.50€/4.50€', image: 'images/barrilroja.jpg' },
            { name: 'Founders Porter', description: 'Caña/Pinta', price: '3.00€/5.50€', image: 'images/barrilporter.jpg' },
            { name: 'Franziskaner', description: 'Caña/Pinta', price: '2.20€/4.00€', image: 'images/barrilfranziskaner.jpg' }
        ],
        'Embotelladas': [
            { name: 'Mahou Clásica', description: 'Tercio', price: '2.20€', image: 'images/tercioestrella.jpg' },
            { name: 'Mahou 5 Estrellas', description: 'Tercio', price: '2.50€', image: 'images/terciomahou.jpg' },
            { name: 'Alhambra Reserva 1925', description: 'Tercio', price: '3.00€', image: 'images/tercioalhambra.jpg' },
            { name: 'Mahou Radler', description: 'Tercio', price: '2.20€', image: 'images/tercioradler.jpg' },
            { name: 'Mahou Sin Gluten', description: 'Tercio', price: '2.50€', image: 'images/terciogluten.jpg' },
            { name: 'Mahou Tostada 0,0', description: 'Tercio', price: '2.50€', image: 'images/terciosin.jpg' },
            { name: 'Sidra Maeloc Fresa', description: 'Tercio', price: '2.50€', image: 'images/sidrafresa.jpg' },
            { name: 'Sidra Maeloc Pera', description: 'Tercio', price: '2.50€', image: 'images/sidrapera.jpg' },
            { name: 'Sidra Maeloc Piña&Pera', description: 'Tercio', price: '2.50€', image: 'images/sidraperapiña.jpg' }
        ]
    },
    copas: [
        { name: 'Brugal Añejo', description: '', price: '', image: 'images/brugal.jpg' },
        { name: 'Barceló Añejo', description: '', price: '', image: 'images/barcelo.jpg' },
        { name: 'Legendario', description: '', price: '', image: 'images/legendario.jpg' },
        { name: 'Bacardí', description: '', price: '', image: 'images/bacardi.jpg' },
        { name: 'Havana Club', description: '', price: '', image: 'images/havana.jpg' },
        { name: 'Larios 12', description: '', price: '', image: 'images/larios.jpg' },
        { name: "Seagram's Dry Gin", description: '', price: '', image: 'images/seagrams.jpg' },
        { name: "Citadelle Gin", description: '', price: '', image: 'images/citadelle.jpg' },
        { name: "Puerto de Indias", description: '', price: '', image: 'images/puerto.jpg' },
        { name: "Jack Daniel's Old No. 7", description: '', price: '', image: 'images/jackdaniels.jpg' },
        { name: "Jack Daniel's Tennessee Apple", description: '', price: '', image: 'images/jackapple.jpg' },
        { name: "Jameson Irish Whiskey", description: '', price: '', image: 'images/jameson.jpg' },
        { name: "Eristoff", description: '', price: '', image: 'images/eristoff.jpg' },
        { name: "Kiroff", description: '', price: '', image: 'images/kiroff.jpg' },
        { name: "Absolut", description: '', price: '', image: 'images/absolut.jpg' },
        { name: "J&B", description: '', price: '', image: 'images/jb.jpg' },
        { name: "Queimada", description:'', price:'', image:'images/queimada.jpg' },
        { name: "Tía María", description: '', price: '', image: 'images/tiamaria.jpg' },
        { name: "Absenta", description: '', price: '', image: 'images/absenta.jpg' },
    ]
};

// Textos informativos para cada sección (opcional)
const sectionInfo = {
    copas: ' Todas las copas normales a 6.00€, premium a 7.00€, y con Monster 7.50€.'
};

// Función para alternar secciones
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId + '-content');
    const header = event.currentTarget;
    const arrow = header.querySelector('.arrow');
    const contentInner = document.getElementById(sectionId + '-inner');

    // Si la sección se está abriendo y está vacía, generar contenido
    if (!content.classList.contains('show') && contentInner.children.length === 0) {
        generateContent(sectionId, contentInner);
    }

    // Toggle de la sección
    content.classList.toggle('show');
    arrow.classList.toggle('rotated');

    // Cerrar otras secciones
    const allSections = document.querySelectorAll('.section-content');
    const allArrows = document.querySelectorAll('.arrow');

    allSections.forEach((sec, index) => {
        if (sec.id !== sectionId + '-content') {
            sec.classList.remove('show');
            allArrows[index].classList.remove('rotated');
        }
    });
}

// Función para generar contenido dinámicamente
function generateContent(sectionId, container) {
    const data = menuData[sectionId];
    let html = '';

    // Añadir texto informativo si existe para esta sección
    if (sectionInfo[sectionId]) {
        html += `<div class="section-info">${sectionInfo[sectionId]}</div>`;
    }

    // Verificar si la sección tiene categorías (objeto) o es una lista simple (array)
    if (Array.isArray(data)) {
        // Es una lista simple (refrescos, copas)
        data.forEach(item => {
            html += `
                <div class="product-item">
                    <img src="${item.image}" alt="${item.name}" class="product-image">
                    <div class="product-info">
                        <div class="product-name">${item.name}</div>
                        <div class="product-description">${item.description}</div>
                        <div class="product-price">${item.price}</div>
                    </div>
                </div>
            `;
        });
    } else {
        // Tiene categorías (cervezas con De Barril y Embotelladas)
        for (const [category, items] of Object.entries(data)) {
            html += `<div class="category-title">${category}</div>`;
            
            items.forEach(item => {
                html += `
                    <div class="product-item">
                        <img src="${item.image}" alt="${item.name}" class="product-image">
                        <div class="product-info">
                            <div class="product-name">${item.name}</div>
                            <div class="product-description">${item.description}</div>
                            <div class="product-price">${item.price}</div>
                        </div>
                    </div>
                `;
            });
        }
    }

    container.innerHTML = html;
}

// Función home
function home() {
    // Cerrar todas las secciones
    document.querySelectorAll('.section-content').forEach(sec => sec.classList.remove('show'));
    document.querySelectorAll('.arrow').forEach(arrow => arrow.classList.remove('rotated'));

    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Año actual en footer
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// Smooth scroll para los enlaces del navbar y abrir sección automáticamente
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            // Scroll a la sección
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Abrir la sección automáticamente después del scroll
            setTimeout(() => {
                const content = document.getElementById(sectionId + '-content');
                const header = section.querySelector('.section-header');
                const arrow = header ? header.querySelector('.arrow') : null;
                const contentInner = document.getElementById(sectionId + '-inner');

                // Si no está abierta, abrirla
                if (header && content && !content.classList.contains('show')) {
                    // Generar contenido si está vacío
                    if (contentInner && contentInner.children.length === 0) {
                        generateContent(sectionId, contentInner);
                    }

                    // Abrir esta sección
                    content.classList.add('show');
                    if (arrow) arrow.classList.add('rotated');

                    // Cerrar otras secciones
                    document.querySelectorAll('.section-content').forEach(sec => {
                        if (sec.id !== sectionId + '-content') {
                            sec.classList.remove('show');
                        }
                    });

                    document.querySelectorAll('.arrow').forEach(arr => {
                        if (arr !== arrow) {
                            arr.classList.remove('rotated');
                        }
                    });
                }
            }, 500);
        }
    });
});