const currentYear = new Date().getFullYear();

document.querySelector('footer p:nth-of-type(1)').innerHTML = `©️${currentYear} Kenneth Cortez Sonsonate, El Salvador`;

const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString('en-EN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});

document.getElementById('lastModified').innerHTML = `Last Modified: ${formattedDate}`;

const temperature = 10;
const windSpeed = 15;

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(wind, 0.16) +
            0.3965 * temp * Math.pow(wind, 0.16)
        ).toFixed(1);
    } else {
        return 'N/A';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChillValue;
});
