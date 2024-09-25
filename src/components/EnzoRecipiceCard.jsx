

function EnzoRecipiceCard({name, description, image, servings, prepTime, cookTime}) {
    return (
        <>
        <div className='flex items-center justify-center'>
            <div className='bg-blue-100 border-2 border-blue-500 text-blue-800 rounded-lg p-8 shadow-lg text-center flex flex-col items-center w-80 h-100'>
                <h1 className='text-xl font-bold mb-2'>Recipice Card Enzo</h1>
                <h2>{name}</h2>

                <img src={image} className='w-32 h-32 object-cover rounded-full shadow-md'/>
                
                <p>Nombre de personnes: {servings}</p>
                <p>Temps de préparation: {prepTime}</p>
                <p>Temps de cuisson: {cookTime}</p>
                <br/>
                <p className='text-base'>{description}</p>
            </div>
        </div>
        </>   
    )
}



export default EnzoRecipiceCard;