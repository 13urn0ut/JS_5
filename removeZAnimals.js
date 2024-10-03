const animals = ["alligator", "zebra", "crocodile", "giraffe", "Zoro"];

const removeZAnimals = (arr) => {
    let animalsWithoutZ = arr.filter(animal => !(animal.toLowerCase().includes(`z`)))
    return animalsWithoutZ
}

console.log(removeZAnimals(animals))