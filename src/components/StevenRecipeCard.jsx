

const StevenRecipeCard = ({name, description, image}) => {
    return(
        <div className="border-5 w-52 shadow-md flex-column">
            <header>
                <h1 className="text-32">Steven recipe card</h1>
                <h2>{name}</h2>
            </header>
            <div>
                <img src={image} alt={name} />
                <p>{description}</p>
            </div>
        </div>
    )
}

export default StevenRecipeCard