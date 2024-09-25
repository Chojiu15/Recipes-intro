import React from "react";

export default function AlexRecipeCard({
  
  name,
  description,
  servings,
  prepTime,
  cookTime,
  image,
  ingredients,
  preparation,
})

{
  return (
    <>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-00 dark:border-gray-700 shadow-xl mx-auto my-20px bg-blue-900">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
          {name} ALEX CARD
        </h5>

        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          <img src="{image}" alt="" />
        </p>
        <p className="mb-3 text-gray-500 dark:text-gray-400 italic">
          {description}
        </p>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Nombre de plats : {servings}
        </p>

        <div className="flex flex-row gap-5">
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Temps de préparation : {prepTime}
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Temps de cuisson : {cookTime}
            </p>
        </div>

        <ul>
            {ingredients.map((ingredient, index) => {
                    return (
                        <li key={index}>
                            <p className="text-2xl font-bold text-red-400">{ingredient.name}</p>
                            <p>Quantité : {ingredient.quantity}</p>
                            <li>{ingredient.preparation}</li>
                            
                            {ingredient.optional ? (
                                <p>Ingrédient non-obligatoire</p>
                                ) : (
                                <p>Ingrédient obligatoire</p>
                                )}
                        </li>
                    )
                })}
        </ul>
      </div>
    </>
  );
}
