import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { recipeContext } from "../context/Context";
import { toast } from "react-toastify";

const AllREcipes = () => {
    const [like, setLike] = useState(223);
    const [user, setUser] = useState(188);
    const [chef, setChef] = useState(500);
    const [searchData, setSearchData] = useState("");
    const navigate = useNavigate();
    const [recipe, setRecipe] = useContext(recipeContext);

    const favHandler = () => {
        localStorage.setItem("fav", JSON.stringify(recipe))
    }
    const deleteHandler = (id) => {
        const filterd = recipe.filter((rec) => id != rec.id);
        setRecipe(filterd)
        toast.error("Recipe Deleted Successfully !")
    }
    return (
        <div className='w-screen flex-col gap-2 overflow-hidden h-screen text-zinc-400 bg-zinc-300 flex items-start justify-start p-5'>
            <div className="flex w-full h-16 px-5  items-center justify-between">
                <h2
                    onClick={() => navigate(-1)}
                    className='text-zinc-800  cursor-pointer bg-zinc-200 px-5 py-2 rounded-full  shadow-2xl' > <i className="ri-arrow-left-fill shadow-2xl mr-2 "></i> Back</h2>
                <div className="w-[90%] flex items-center justify-center gap-5  ">
                    <i className="text-black text-xl ri-search-line"></i>

                    <input

                        onChange={(e) => setSearchData(e.target.value)}
                        placeholder="Search Recipes."
                        className='border-0 px-5 w-[30%] h-12 rounded-full  flex items-center justify-center text-2xl  text-zinc-900' type="search"
                    />

                </div>
            </div>
            <hr />
            <div className="w-full  overflow-x-hidden visible overflow-y-scroll overflow-auto flex-wrap flex items-center gap-10  h-full ">
                {/* {filteredData.map((dt) => {
                    return <div className="w-[50%] absolute z h-[20%] bg-zinc-900 text-white">
                        <h1>{dt.foodname}</h1>
                    </div>
                })} */}
                {
                    recipe.filter((item) => {
                        return searchData === ""
                            ? item : item.foodname.includes(searchData)
                    })
                        .map((recipe, idx) => {
                            return <div key={idx} className="w-[22.5%] bg-zinc-900 shadow-2xl flex flex-col h-full ">
                                <div className="w-full rounded-xs shadow-2xl  bg-black h-[40%] relative">
                                    <div
                                        onClick={favHandler}
                                        id="heart-logo"
                                        className="flex cursor-pointer items-center justify-center w-10 h-10 absolute bg-zinc-800 right-2 top-2 rounded-full">
                                        <i className="ri-heart-line"></i>
                                    </div>
                                    <img
                                        className="w-full h-full object-center object-cover"
                                        src={recipe.URL} />
                                </div>
                                <div
                                    className="w-full bg-zinc-100 text-zinc-800 cursor-pointer flex items-start justify-evenly flex-col h-[60%] p-3">
                                    <h3
                                        className="w-20 flex items-center justify-center rounded-xs bg-zinc-400 text-zinc-950">Staff pick</h3>
                                    <h2
                                        className="text-2xl font-semibold">{recipe.foodname}</h2>
                                    <p
                                        className="text-xl line-clamp-3 opacity-65">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, vitae.</p>
                                    <hr
                                        className="border-dotted mt-5  w-full" />
                                    <div
                                        className="flex w-full mt-1 pr-4 items-center justify-between">
                                        <div
                                            className="w-14 overflow-hidden h-14 rounded-full flex items-center justify-center">
                                            <img
                                                className="w-full h-full object-cover object-center"
                                                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                        </div>
                                        <div>
                                            <h2
                                                className=" flex flex-wrap items-start pl-2 font-semibold">Recipe by {recipe.chefName}</h2>
                                            <div
                                                className="flex items-center mt-1 justify-evenly ">
                                                <h2
                                                    onClick={() => setLike(like + 1)}
                                                    className="flex items-center ">
                                                    <i className="ri-heart-line"></i>
                                                    <span className="ml-1m font-bold">{like}</span></h2>
                                                <h2
                                                    onClick={() => setUser(user + 1)}

                                                >
                                                    <i className="ri-user-6-line"></i>
                                                    <span className="ml-1 font-black">{user}</span>
                                                </h2>
                                                <h2
                                                    onClick={() => setChef(chef + 1)}
                                                >
                                                    <i className="ri-cake-3-line"></i>
                                                    <span className="ml-1 font-bold">{chef}</span>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <h2
                                        onClick={() => deleteHandler(recipe.id)}
                                        className="w-full flex shadow-2xl 
                                    items-center justify-center bg-red-900 
                                    h-10 mt-2 text-white font-medium">
                                        Delete Recipe
                                    </h2>

                                </div>
                            </div>

                        })}
            </div>
        </div>
    )
}

export default AllREcipes
