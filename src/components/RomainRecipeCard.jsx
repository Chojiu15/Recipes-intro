



function RomainRecipeCard({name, prepTime, cookTime, servings}) {

    return(
        <div className="size-80 flex justify-center flex-col bg-sky-500/50 ">
            <h1> Recipice Card Lasagne </h1>
            <div classname="break-words"> Salut, recette de lasagne différente, on prendra viande haché, pate a lasagne, tomate, lardon, mozarella, vin, ail, {name}... </div>
            <div> La préparation vous prendras {prepTime} pour {cookTime} de temps de cuisine afin de nourrir {servings} </div>
            <img src="https://i.ytimg.com/vi/Rinf3VRydUI/maxresdefault.jpg" width={"50px"} alt="" />
        </div>
    )
}

export default RomainRecipeCard

/*

        
*/