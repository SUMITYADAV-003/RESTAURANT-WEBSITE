import React from "react";
import "./style/Creaet.scss"
import { useForm } from "react-hook-form";
const Createrecipes = () => {
  const {register, handelSubmit} = useForm();
  return (
    <form>
      <input className="inp" type="url" placeholder="Enter image url" />
      <small>This is a how error are show</small>
      <textarea className="inp" name="" id="" placeholder="Enter decription">
        
      </textarea>
      <input className="inp" type="text" placeholder="Enter title" />
      <textarea className="inp" name="" id="" placeholder="Enter Instructions"></textarea>
      <textarea className="inp" name="" id="" placeholder="Enter Ingredients"></textarea>
      <button className="inp clg">Save Recipe</button>
    </form>
  );
};

export default Createrecipes;
