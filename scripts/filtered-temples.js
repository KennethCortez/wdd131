document.addEventListener("DOMContentLoaded", function () {
    // Update the footer with the current year
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector("footer p:nth-of-type(1)");
    if (footerText) {
        footerText.innerHTML = `©️${currentYear} Kenneth Cortez, Sonsonate, El Salvador`;
    }

    // show the last modified date
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.innerHTML = `Last Modified: ${formattedDate}`;
    }

    // hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("open");
            const isOpen = navMenu.classList.contains("open");
            hamburger.setAttribute("aria-expanded", isOpen);
        });
    }

    createTempleCards();
});

// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "San Pedro Sula, Honduras",
        location: "San Pedro Sula, Honduras",
        dedicated: "2014, October, 12",
        area: 31818,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-pedro-sula-honduras-temple/san-pedro-sula-honduras-temple-52518-main.jpg"
    },
    {
        templeName: "Fortaleza, Brazil",
        location: "Fortaleza, Brazil",
        dedicated: "2011, November, 15",
        area: 36000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
    },
    {
        templeName: "San Salvador, El Salvador",
        location: "San Salvador, El Salvador",
        dedicated: "2011, August, 21",
        area: 27986,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
];

function createTempleCards() {
    const container = document.getElementById("templeContainer");

    temples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const title = document.createElement("h2");
        title.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Total Area: ${temple.area} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        card.appendChild(title);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        container.appendChild(card);
    });
}

function getYear(dedicatedDate) {
    const yearMatch = dedicatedDate.match(/\d{4}/);
    return yearMatch ? parseInt(yearMatch[0]) : null;
}

function filterTemples(filterType) {
    let filteredTemples = [];

    switch (filterType) {
        case 'Old':
            filteredTemples = temples.filter(temple => getYear(temple.dedicated) < 1900);
            break;
        case 'New':
            filteredTemples = temples.filter(temple => getYear(temple.dedicated) > 2000);
            break;
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'Home':
            filteredTemples = temples;
            break;
        default:
            filteredTemples = temples;
            break;
    }

    displayTemples(filteredTemples);
}

function displayTemples(templesToDisplay) {
    const templeContainer = document.getElementById('templeContainer');
    templeContainer.innerHTML = '';

    templesToDisplay.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        templeCard.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}">
            <h3>${temple.templeName}</h3>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
        `;
        
        templeContainer.appendChild(templeCard);
    });
}

// conect the buttons to the filter function
document.getElementById('oldButton').addEventListener('click', () => filterTemples('Old'));
document.getElementById('newButton').addEventListener('click', () => filterTemples('New'));
document.getElementById('largeButton').addEventListener('click', () => filterTemples('Large'));
document.getElementById('smallButton').addEventListener('click', () => filterTemples('Small'));
document.getElementById('homeButton').addEventListener('click', () => filterTemples('Home'));
