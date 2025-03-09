const currentYear = new Date().getFullYear();

document.querySelector('footer p:nth-of-type(1)').innerHTML = `©️${currentYear} Kenneth Cortez Sonsonate, El Salvador`;

const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString('en-EN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});

document.getElementById('lastModified').innerHTML = `Last Modified: ${formattedDate}`;
