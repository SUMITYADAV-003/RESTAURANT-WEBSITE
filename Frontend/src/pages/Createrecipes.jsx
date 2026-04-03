import React, { useContext } from "react";
import "./style/Creaet.scss"
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";  
import { recipecontext } from "../context/RecipeContext";

const Createrecipes = () => {
  const {data, setdata} = useContext(recipecontext)
  const { register, handleSubmit,reset } = useForm(); 
  
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    setdata([...data, recipe]);
    reset();


  }

  return ( 
    <form onSubmit={handleSubmit(SubmitHandler)}>  
      <input className="inp" type="url" placeholder="Enter image url" {...register("image")}/>
      <small>This is a how error are show</small>
      <textarea className="inp" placeholder="Enter description" {...register("description")}></textarea>
      <input className="inp" type="text" placeholder="Enter title" {...register("title")}/>
      <textarea className="inp" placeholder="Enter Instructions" {...register("Instructions")}></textarea>
      <select className="inp" {...register("category")}>
        <option>category</option>
        <option>cat2</option>
        <option>cat3</option>
      </select>
      <textarea className="inp" placeholder="Enter Ingredients" {...register("Ingredients")}></textarea>
      <button className="inp clg" type="submit">Save Recipe</button>
    </form>
  );
}

export default Createrecipes;  