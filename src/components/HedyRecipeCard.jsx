import { useState } from "react";

function HedyRecipeCard(recipe) {
  // Destructure the recipe object
  const {
    name,
    image,
    description,
    servings,
    prepTime,
    cookTime,
    ingredients,
    instructions,
  } = recipe;

  // State to manage the visibility of ingredients and instructions
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  // Function to toggle ingredient visibility
  const toggleIngredients = () => {
    setShowIngredients((prev) => !prev);
  };

  // Function to toggle instruction visibility
  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <>
      <div className="max-w-sm mx-auto p-6 rounded-lg overflow-hidden shadow-lg bg-white border-4 border-gray-500 rounded-lg p-4 m-10">
        <h1 className="text-2xl font-bold italic text-center mb-4">{name}</h1>
        <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
          {description}
        </p>
        <div>
          <p>Nombre de personnes : {servings}</p>
          <p>Temps de preparation : {prepTime}</p>
          <p>Temps de cuisson : {cookTime}</p>
        </div>
        <img
          src={image}
          alt={name}
          className="w-48 h-48 object-cover rounded-lg border-2 border-gray-300 shadow-lg mx-auto mb-4"
        />
        <div className="text-center">
        {/* Button to toggle ingredient visibility */}
        <button
          onClick={toggleIngredients}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {showIngredients
            ? "Masquer les ingrédients"
            : "Afficher les ingrédients"}
        </button>

        {/* Conditional rendering of ingredients */}
        {showIngredients && (
          <ul className="mt-4 text-left">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">
                {ingredient.quantity} {ingredient.name}
                {ingredient.preparation && ` (${ingredient.preparation})`}
                {ingredient.optional && " (optionnel)"}
              </li>
            ))}
          </ul>
        )}

        {/* Button to toggle instruction visibility */}
        <button
          onClick={toggleInstructions}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          {showInstructions
            ? "Masquer les instructions"
            : "Afficher les instructions"}
        </button>

        {/* Conditional rendering of instructions */}
        {showInstructions && (
          <ol className="mt-4 text-left">
            {instructions.map((instruction) => (
              <li key={instruction.step} className="mb-2">
                {instruction.description}
              </li>
            ))}
          </ol>
        )}
      </div>
      </div>
    </>
  );
}

export default HedyRecipeCard;