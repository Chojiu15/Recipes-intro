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
import {recipes} from './data.js'
import axios from 'axios'
import { useState } from 'react'


function App() {
  const [recipes, setRecipes] = useState([])

  // CRUD : CREATE / READ / UPDATE / DELETE
  //         POST     GET    PUT     DELETE
  const fetchRecipes = async () => {
    try{
      const recipes = await axios.get(`URL`)
      setRecipes(recipes.data.meal)
    } 
     
    catch(err){
      console.log(err)
    }
  }

  fetchRecipes()
  console.log(recipes)
  

  return (
    <>
      <Navbar /> 
      <div className='flex space-x-6 m-6 flex-wrap'>
        {/* {recipes && recipes.map(recipe => {
          return (
            <div>
                <h1>{recipe.strMeal}</h1>
                <img width={'250px'} height={'250px'} src={recipe.strMealThumb} alt="" srcset="" />
            
            </div>
          )
        })} */}

      {recipes.map(recipe => <EnzoRecipiceCard {...recipe} />)}
      {/* 
      <EnzoRecipiceCard {...recipe}/>
      <EnzoRecipiceCard {...recipe}/> */}
      </div>

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
