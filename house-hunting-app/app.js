// Sample data for houses
const houses = [
    { id: 1, name: "Cozy Cottage", price: 100, booked: false },
    { id: 2, name: "Modern Apartment", price: 150, booked: false },
    { id: 3, name: "Luxury Villa", price: 300, booked: false },
];

// Function to display houses
function displayHouses() {
    const houseList = document.getElementById('house-list');
    houses.forEach(house => {
        const houseItem = document.createElement('div');
        houseItem.className = 'bg-white p-4 rounded shadow';
        houseItem.innerHTML = `
            <h3 class="font-bold">${house.name}</h3>
            <p>Price: $${house.price}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="bookHouse(${house.id})" ${house.booked ? 'disabled' : ''}>
                ${house.booked ? 'Booked' : 'Book Now'}
            </button>
        `;
        houseList.appendChild(houseItem);
    });
}

// Function to book a house
function bookHouse(id) {
    const house = houses.find(h => h.id === id);
    if (house && !house.booked) {
        const deposit = house.price * 0.10;
        const confirmBooking = confirm(`A deposit of $${deposit} is required to book this house. Do you want to proceed?`);
        if (confirmBooking) {
            house.booked = true;
            alert('House booked successfully!');
            displayHouses(); // Refresh the house list
        }
    }
}

// Initial display of houses
displayHouses();