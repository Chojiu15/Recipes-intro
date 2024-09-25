


function OscarRecipeCard({name, description, servings, prepTime, cookTime, image, ingredients, instructions, notes}) {
    return(
        <div className="w-96 border-2 border-orange-200 rounded bg-orange-100 p-8">
            <h1 className="text-center">{name}</h1>
            <figure className="relative w-80 h-80 mx-auto">
                <img className="w-full h-full" src={image} />
                <figcaption className="absolute w-full h-full top-0 opacity-0 hover:opacity-100 bg-gray-200/50 transition-opacity text-center flex"><p className="block content-center">{description}</p></figcaption>
            </figure>
            <ul>
                <li>pour : {servings} personnes</li>
                <li>temps de preparation : {prepTime}</li>
                <li>temps de cuisson : {cookTime}</li>
            </ul>
        </div>
    )
}

export default OscarRecipeCard