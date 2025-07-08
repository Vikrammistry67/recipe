import { useContext } from 'react';
import Nav from './Nav'
import { recipeContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
    const { veg, setVeg } = useContext(recipeContext);
    const navigate = useNavigate();
    return (
        <div
            id='nav'
            className='w-screen h-screen flex items-end   cursor-pointer  justify-end '>
            <Nav />
            <div
                className='w-full h-[90%] bg-zinc-200  gap-14 flex items-center justify-center'>
                {veg.map((recipe) => {
                    return <h2
                        className='text-zinc-500 font-semibold  absolute top-24 text-3xl'>
                        Hey Mr : {recipe.username}  Welcome to <span className='text-emerald-600 font-bold'>Cook's Companion</span>.</h2>
                })}

                <div className='w-[58%] gap-5  flex items-start  px-8 flex-col justify-start h-full pt-32 '>

                    <h1 id='h1-bold' className='text-9xl font-bold'>Never Worry <br /> About <br /><span className='text-emerald-600'>Whats for <br />Dinner Again !</span> </h1>
                    <p className='text-zinc-700 mt-5 font-semibold text-xl opacity-65 w-full'>Say goodbye to boring meals. with Ai-powered recipe recommendation.
                        meals plans creation and more... 100,000+ dinner saved so far
                    </p>
                </div>


                <div className='w-[42%] pt-12 flex  items-center justify-start   h-[70%]'>
                    <img className='w-[100%]  h-[100%] object-center object-cover' src="./Images/phone.png" alt="" />
                </div>

























                {/* <div
                    id='small'
                    className='w-[60%] h-[60%]  cursor-pointer flex gap-10 flex-col items-center justify-center  shadow-2xl'>
                    <h2
                        className='text-zinc-300 text-xl'>
                        Please Select which type of recipes you want. <i class="ri-arrow-down-fill">
                        </i>
                    </h2>
                    <div
                        className='flex w-full items-center gap-5 text-white justify-center'>
                        <h2
                            onClick={() => navigate("/vegrecipes")}
                            className='bg-green-900 px-10 py-2 shadow-2xl rounded-full'>
                            Veg
                        </h2>
                        <h2
                            className='bg-red-900 px-10 py-2 shadow-2xl rounded-full'>
                            Non-Veg
                        </h2>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default MainPage