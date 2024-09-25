

function SamuelRecipeCard ({name, description, image}) {
    return (
        <>
            <div className='bg-white max-w-sm mx-auto p-6 rounded-xl shadow-xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300'>

                <img src={image} alt={name} className='w-full h-64 object-cover rounded-t-xl mb-4' />

                <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-2 text-gray-800 font-serif'>
                        {name}
                    </h1>
                    
                    <p className='text-gray-500 text-sm mb-4'>
                        {description}
                    </p>

                    <button className='bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-600 transition duration-300'>
                        Order Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default SamuelRecipeCard;