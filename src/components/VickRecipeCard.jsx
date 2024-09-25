


function VickRecipeCard ({name, description, image, prepTime, cookTime, servings}) {

    return (
        <>
        <div className='bg-white max-w-sm mx-auto p-6 rounded-lg shadow-xl border border-gray-200'> 
            <h2>{name}</h2>
            <img src={image} className='w-full h-64 object-cover rounded-t-xl mb-4'/>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            <p className="text-gray-600 leading-relaxed">Nombre de personnes : {servings}</p>
            <p className="text-gray-600 leading-relaxed">Temps de préparation : {prepTime}</p>
            <p className="text-gray-600 leading-relaxed">Temps de cuisson : {cookTime}</p>
        </div>
        </>
    )
}

export default VickRecipeCard