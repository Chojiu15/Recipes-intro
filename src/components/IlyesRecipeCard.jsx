
const IlyesRecipeCard = ({name, image, description, servings, prepTime, cookTime, ingredients }) => {

  return (
    < div className ="flex items-center justify-center shadow-amber-950 gap-y-4 ">
    <figure className=" my-10  items-center gap-y-4  bg-slate-800 flex flex-col p-10 boder rounded-lg w-96 shadow-red-300 ">
        <h2 className ="text-rose-800 text-xl font-bold ">{name}</h2>
        <img className ="w-72 border rounded-lg" src={image}alt="Pizza napolitaine" />
        <figcaption>
          
            <p className ="text-rose-800 font-semibold">{description}</p>
  
            <ul className="flex flex-col" >
                <li><span className="text-white">⭐Portion: {servings}</span></li>
                <li><span className="text-white">⭐temps de préparation: {prepTime}</span></li>
                <li><span className="text-white">⭐Temps de cuisson: {cookTime}</span></li>
            </ul>
            <ul>
              {ingredients.map((ingredient, index)=>{
                <li key={index}>
                  <span>{ingredient.quantity} {ingredient.name}</span>
                </li>
              })}
            </ul>
            </figcaption>
            </figure>


            
            <button className="m-x 5 bg-zinc-50 rounded-lg font-bold p-3 " >Afficher la recette</button>
                  
       
    </div>
  )
}

export default  IlyesRecipeCard