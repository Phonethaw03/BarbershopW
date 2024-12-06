// Sample data for barber shops
const barberShops = [
    { name: "Classic Cuts", location: "Downtown", rating: 5, hours: "9 AM - 8 PM", img: "shop1.jpg" },
    { name: "Stylish Hair", location: "Uptown", rating: 4, hours: "10 AM - 7 PM", img: "shop2.jpg" },
    { name: "Gentlemen's Grooming", location: "Midtown", rating: 5, hours: "9 AM - 6 PM", img: "shop3.jpg" },
    // Add more barber shops as needed
];

// Function to display featured barber shops
function displayFeaturedShops() {
    const featuredShopsContainer = document.getElementById("featured-shops");
    featuredShopsContainer.innerHTML = '';
    barberShops.forEach(shop => {
        const shopDiv = document.createElement('div');
        shopDiv.classList.add('barber-shop');
        shopDiv.innerHTML = `
            <img src="${shop.img}" alt="${shop.name}" style="width:100%; height:auto; border-radius: 5px;">
            <h3>${shop.name}</h3>
            <p>${shop.location}</p>
            <p>Rating: ${shop.rating} stars</p>
            <p>Hours: ${shop.hours}</p>
        `;
        featuredShopsContainer.appendChild(shopDiv);
    });
}

// Function to filter barber shops
function filterShops() {
    const locationInput = document.getElementById('location').value.toLowerCase();
    const ratingInput = document.getElementById('rating').value;

    const filteredShops = barberShops.filter(shop => {
        const matchesLocation = shop.location.toLowerCase().includes(locationInput);
        const matchesRating = ratingInput ? shop.rating >= ratingInput : true;
        return matchesLocation && matchesRating;
    });

    displayBarberShops(filteredShops);
}

// Function to display barber shops
function displayBarberShops(shops) {
    const barberShopList = document.getElementById("barber-shop-list");
    barberShopList.innerHTML = '';
    shops.forEach(shop => {
        const shopDiv = document.createElement('div');
        shopDiv.classList.add('barber-shop');
        shopDiv.innerHTML = `
            <h3>${shop.name}</h3>
            <p>${shop.location}</p>
            <p>Rating: ${shop.rating} stars</p>
            <p>Hours: ${shop.hours}</p>
        `;
        barberShopList.appendChild(shopDiv);
    });
    function searchBarberShops() {
        const searchInput = document.getElementById('search').value;
        // Add functionality for searching barber shops here
        alert(`Searching for: ${searchInput}`);
    }
    // Booking button functionality (example)
const bookingButtons = document.querySelectorAll('.book-button');

bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Booking process initiated.'); // Replace with actual booking functionality
    });
});
    
    function filterShops() {
        const location = document.getElementById('location').value;
        const rating = document.getElementById('rating').value;
        // Logic to filter barber shops based on location and rating
        console.log(`Filtering by location: ${location}, rating: ${rating}`);
    }
    
}

// Initial display of featured barber shops
displayFeaturedShops();
