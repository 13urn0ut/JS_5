const cities = [
    { name: "Los Angeles", temperature: 60.0 },
    { name: "Atlanta", temperature: 52.0 },
    { name: "Detroit", temperature: 48.0 },
    { name: "New York", temperature: 80.0 },
  ];

const coolCities = (cities) => cities.filter(city => city.temperature < 70)


console.log(coolCities(cities))