const map = L.map('map').setView([20, 0], 2); // Center at equator

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample cities with time zones
const cities = [
    { name: "New York", coords: [40.7128, -74.006], tz: "America/New_York" },
    { name: "London", coords: [51.5074, -0.1278], tz: "Europe/London" },
    { name: "Tokyo", coords: [35.6895, 139.6917], tz: "Asia/Tokyo" },
    { name: "Sydney", coords: [-33.8688, 151.2093], tz: "Australia/Sydney" },
    { name: "Saskatoon", coords: [52.1332, -106.6700], tz: "America/Regina" }
];

// Render city markers with time
cities.forEach(city => {
    const timeStr = new Intl.DateTimeFormat('en-US', {
        timeStyle: 'short',
        hour12: false,
        timeZone: city.tz
    }).format(new Date());

    const marker = L.marker(city.coords).addTo(map);
    marker.bindPopup(`<b>${city.name}</b><br/>Local Time: ${timeStr}`);
});
