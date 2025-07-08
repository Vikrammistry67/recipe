import { useContext } from "react";
import { useForm } from "react-hook-form"
import { recipeContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const VegRecipes = () => {
  const { register, reset, handleSubmit } = useForm();
  const [recipe, setRecipe] = useContext(recipeContext)
  const navigate = useNavigate();
  const submitHandler = (frmData) => {
    frmData.id = nanoid();
    const copyData = [...recipe];
    copyData.push(frmData)
    setRecipe(copyData)
    localStorage.setItem("Recipes", JSON.stringify(copyData))
    reset();
    toast.success("New Recipe Created successfully !")
  }
  return (
    <div className='w-screen flex items-center  flex-col justify-center h-screen bg-black text-white'>
      <h2 className="text-zinc-400 text-center  w-[40%] text-3xl">Create Your Own Recipe. </h2>
      <hr />
      <div className="w-[100%] h-[90%] flex items-center  justify-center  ">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full h-full py-1 flex  flex-col items-center justify-evenly">
          <input
            {...register("URL")}
            className="w-[85%] bg-zinc-900 px-6 rounded-xs  h-12 "
            type="url"
            placeholder="Enter  image URL " />
          <input
            {...register("foodname")}
            className="w-[85%] bg-zinc-900 px-6 rounded-xs  h-12 "
            type="text"
            placeholder="Enter foodName " />
          <input
            {...register("chefName")}
            className="w-[85%] bg-zinc-900 px-6 rounded-xs h-12"
            type="text"
            placeholder="Enter Chef name " />
          <select
            {...register("catagory")}
            className="w-[85%] bg-zinc-900 px-6 rounded-xs h-12">
            <option
              value="Desert">
              Desert
            </option>
            <option
              value="main-course">
              main-course
            </option>
          </select>
          <select
            {...register("difficulty")}
            className="w-[85%] bg-zinc-900 px-6 rounded-xs h-12" >
            <option value="">Easy</option>
            <option value="">Medium</option>
            <option value="">Hard</option>
          </select>
          <input
            {...register("cookTime")}
            className="w-[85%] bg-zinc-900 px-6 rounded-xs  h-12"
            type="time"
            placeholder="Enter Cook time" />
          <input
            {...register("quantity")}
            className="w-[85%] bg-zinc-900 px-6 rounded-xs  h-12"
            type="number"
            placeholder="Enter Quantity" />
          <textarea
            {...register("ingredients")}

            className="w-[85%] bg-zinc-900 px-6 rounded-xs  h-12"
            placeholder="Enter Ingredients..."
            cols='30'
            rows='10'>
          </textarea>
          <button
            onClick={() => navigate("/allrecipes")}
            type="submit"
            className="w-[85%] bg-zinc-950 px-6 ">
            Create Recipe.
          </button>
        </form>
      </div>
    </div>
  )
}

export default VegRecipes