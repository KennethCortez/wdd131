const currentYear = new Date().getFullYear();

document.querySelector('footer p:nth-of-type(1)').innerHTML = `©️${currentYear} Kenneth Cortez Sonsonate, El Salvador`;

const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString('en-EN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});

document.getElementById('lastModified').innerHTML = `Last Modified: ${formattedDate}`;

const products = [
    { name: "Acer" },
    { name: "Dell" },
    { name: "HP" },
    { name: "Lenovo" },
    { name: "MacBook" }
  ];

  const selectElement = document.getElementById("product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name.toLowerCase();  
    option.textContent = product.name;
    selectElement.appendChild(option);
  });