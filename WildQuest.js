// ======================================================
// WildQuest - Find an Animal
// find-animal.js
// ======================================================
 
// Animal database
const animals = [
{
id: "elephant",
name: "African Elephant",
scientificName: "Loxodonta africana",
category: "Mammal",
habitat: "Grassland",
icon: "🐘",
conservation: "Endangered"
},
{
id: "eagle",
name: "Bald Eagle",
scientificName: "Haliaeetus leucocephalus",
category: "Bird",
habitat: "Forest",
icon: "🦅",
conservation: "Least Concern"
},
{
id: "blue-whale",
name: "Blue Whale",
scientificName: "Balaenoptera musculus",
category: "Mammal",
habitat: "Ocean",
icon: "🐋",
conservation: "Endangered"
},
{
id: "cheetah",
name: "Cheetah",
scientificName: "Acinonyx jubatus",
category: "Mammal",
habitat: "Grassland",
icon: "🐆",
conservation: "Vulnerable"
},
{
id: "dolphin",
name: "Dolphin",
scientificName: "Tursiops truncatus",
category: "Mammal",
habitat: "Ocean",
icon: "🐬",
conservation: "Least Concern"
},
{
id: "giraffe",
name: "Giraffe",
scientificName: "Giraffa camelopardalis",
category: "Mammal",
habitat: "Grassland",
icon: "🦒",
conservation: "Vulnerable"
},
{
id: "lion",
name: "Lion",
scientificName: "Panthera leo",
category: "Mammal",
habitat: "Grassland",
icon: "🦁",
conservation: "Vulnerable"
},
{
id: "tiger",
name: "Tiger",
scientificName: "Panthera tigris",
category: "Mammal",
habitat: "Forest",
icon: "🐅",
conservation: "Endangered"
},
{
id: "sea-turtle",
name: "Sea Turtle",
scientificName: "Chelonioidea",
category: "Reptile",
habitat: "Ocean",
icon: "🐢",
conservation: "Endangered"
},
{
id: "great-white-shark",
name: "Great White Shark",
scientificName: "Carcharodon carcharias",
category: "Fish",
habitat: "Ocean",
icon: "🦈",
conservation: "Vulnerable"
},
{
id: "penguin",
name: "Emperor Penguin",
scientificName: "Aptenodytes forsteri",
category: "Bird",
habitat: "Arctic",
icon: "🐧",
conservation: "Near Threatened"
},
{
id: "polar-bear",
name: "Polar Bear",
scientificName: "Ursus maritimus",
category: "Mammal",
habitat: "Arctic",
icon: "🐻‍❄️",
conservation: "Vulnerable"
}
];
 
 
// ======================================================
// Elements
// ======================================================
 
const searchInput = document.getElementById("searchInput");
const animalList = document.getElementById("animalList");
const resultsTitle = document.getElementById("resultsTitle");
 
const filterButtons = document.querySelectorAll(".filter");
 
let selectedCategory = "All";
 
 
// ======================================================
// Filter animals
// ======================================================
 
function getFilteredAnimals() {
 
const searchText = searchInput.value
.toLowerCase()
.trim();
 
return animals.filter((animal) => {
 
const matchesSearch =
animal.name.toLowerCase().includes(searchText) ||
animal.scientificName.toLowerCase().includes(searchText) ||
animal.habitat.toLowerCase().includes(searchText) ||
animal.category.toLowerCase().includes(searchText);
 
const matchesCategory =
selectedCategory === "All" ||
animal.category === selectedCategory;
 
return matchesSearch && matchesCategory;
});
}
 
 
// ======================================================
// Render animals
// ======================================================
 
function renderAnimals() {
 
const filteredAnimals = getFilteredAnimals();
 
animalList.innerHTML = "";
 
resultsTitle.textContent =
`${filteredAnimals.length} animal${
filteredAnimals.length === 1 ? "" : "s"
} found`;
 
 
// No results
if (filteredAnimals.length === 0) {
 
animalList.innerHTML = `
<div class="empty">
<div style="font-size:45px;">🔎</div>
 
<h3>No animals found</h3>
 
<p>
Try another animal name,
habitat or category.
</p>
</div>
`;
 
return;
}
 
 
// Create animal cards
filteredAnimals.forEach((animal) => {
 
const card = document.createElement("div");
 
card.className = "animal-card";
 
card.innerHTML = `
<div class="animal-image">
${animal.icon}
</div>
 
<div class="animal-info">
 
<div class="animal-name">
${animal.name}
</div>
 
<div class="scientific">
${animal.scientificName}
</div>
 
<div class="animal-tags">
${animal.category} • ${animal.habitat}
</div>
 
</div>
 
<div class="arrow">
›
</div>
`;
 
 
// Open Animal Profile
card.addEventListener("click", () => {
openAnimal(animal.id);
});
 
 
animalList.appendChild(card);
 
});
}
 
 
// ======================================================
// Search
// ======================================================
 
searchInput.addEventListener("input", () => {
renderAnimals();
});
 
 
// ======================================================
// Category filters
// ======================================================
 
filterButtons.forEach((button) => {
 
button.addEventListener("click", () => {
 
// Remove active state
filterButtons.forEach((btn) => {
btn.classList.remove("active");
});
 
 
// Activate selected button
button.classList.add("active");
 
selectedCategory = button.dataset.category;
 
renderAnimals();
 
});
 
});
 
 
// ======================================================
// Open Animal Profile
// ======================================================
 
function openAnimal(animalId) {
 
// Example:
// animal-profile.html?id=tiger
 
window.location.href = `animal-profile.html?id=${animalId}`;
}

// ======================================================
// Initial load
// ======================================================

renderAnimals();