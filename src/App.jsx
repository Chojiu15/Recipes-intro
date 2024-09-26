import Navbar from './Navbar'
import RecipiceCard from './components/RecipeCard.jsx'
import IlyesRecipeCard from './components/IlyesRecipeCard.jsx'

import StevenRecipeCard from './components/StevenRecipeCard.jsx'
import AlexRecipeCard from './components/Alex/AlexRecipeCard.jsx'
import EnzoRecipiceCard from './components/EnzoRecipiceCard.jsx'
import HedyRecipeCard from './components/HedyRecipeCard.jsx'
import RomainRecipeCard from './components/RomainRecipeCard.jsx'
import SamuelRecipeCard from './components/SamuelRecipeCard.jsx'
import OscarRecipeCard from './components/OscarRecipeCard.jsx'
import VickRecipeCard from './components/VickRecipeCard.jsx'
import { recipes } from './data.js'
import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [call, setCall] = useState(true)
  const [category, setCategory] = useState('beef')


  // CRUD : CREATE / READ / UPDATE / DELETE
  //         POST     GET    PUT     DELETE

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      setRecipes(response.data.meals)
    }
    catch (err) {
      setError(err)
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchRecipes()
  }

  useEffect(() => {
    fetchRecipes()  
  }, [])

  console.log(recipes)


  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
          <input type="text" className='border-4' onChange={e => setCategory(e.target.value)} />
          <input type="submit" value='Search' />
      </form>


      <div className='flex space-x-6 m-6 flex-wrap'>
        {recipes && recipes.map(recipe => {
          return (
            <div>
                <h1>{recipe.strMeal}</h1>
                <img src={recipe.strMealThumb} alt="" />
            </div> 
          )
        })}



      </div>

   
      {/* 
      <EnzoRecipiceCard {...recipe}/> */}


      {/* <IlyesRecipeCard {...recipe} />

    
     
      
      <RomainRecipeCard {...recipe}/>

      

      <StevenRecipeCard {...recipe}/>

      <HedyRecipeCard {...recipe}/>
      
      <AlexRecipeCard {...recipe}/>

      <SamuelRecipeCard {...recipe}/>

      <OscarRecipeCard {...recipe}/>
      
      <VickRecipeCard {...recipe}/> */}
    </>

  )
}

export default App
