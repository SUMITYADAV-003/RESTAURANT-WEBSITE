import React, { createContext, useState } from 'react'

export const recipecontext = createContext(null)

const RecipeContext = (props) => {
  const [data, setdata] = useState([]);
  console.log(data)
  return (
   <recipecontext.Provider value={{data, setdata}}>
    {props.childern}
   </recipecontext.Provider>
  )
}

export default RecipeContext