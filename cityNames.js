const cities = [
    { name: "Los Angeles", temperature: 60.0 },
    { name: "Atlanta", temperature: 52.0 },
    { name: "Detroit", temperature: 48.0 },
    { name: "New York", temperature: 80.0 },
  ];

  const cityNames = (citiesObj) => citiesObj.map(city => city.name)

  console.log(cityNames(cities))