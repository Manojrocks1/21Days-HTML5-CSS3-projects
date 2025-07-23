// Array of recipe objects (each with a name and image path)
const recipes = [
  { name: "Spagetti Bolognese", image: "Images/Spaghetti.jpeg" },
  { name: "Veggie salad", image: "Images/Veggie.jpeg" },
  { name: "Pancakes", image: "Images/Fluffypancakes.jpeg" },
  { name: "Butter Chicken", image: "Images/Butterchicken.jpeg" },
  { name: "Veggie Fingers", image: "Images/Veggiefingers.jpeg" }
];

// Grabbing DOM elements
const recipeList = document.getElementById('recipeList');
const searchInput = document.getElementById('searchInput');

// Function to display recipes
function displayRecipes(filteredRecipes) {
  recipeList.innerHTML = ""; // Clear current list
  filteredRecipes.forEach((recipe) => {
    const card = document.createElement("div"); // Create a div
    card.className = "card"; // Assign class
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h2>${recipe.name}</h2>`;
    recipeList.appendChild(card); // Append card to main
  });
}

// Add event listener to search box
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  const filtered = recipes.filter((r) =>
    r.name.toLowerCase().includes(searchValue)
  );
  displayRecipes(filtered); // Re-render list
});

// Initial rendering of all recipes
displayRecipes(recipes);