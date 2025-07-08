import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom"
import { recipeContext } from "../context/Context";
const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { veg, setVeg } = useContext(recipeContext);
    const navigate = useNavigate();
    const submitHandler = (data) => {
        data.id = nanoid();
        setVeg([...veg, data])
        reset();
    };
    return (
        < div
            id='register-bg'
            className='bg-zinc-300 relative w-screen h-screen shadow-2xl  text-black flex items-center justify-between ' >
            <div
                className='w-full cursor-pointer  
            h-16 flex items-center justify-between px-10 py-2 absolute top-0'>
                <div
                    className='flex text-white  w-[50%] items-center justify-evenly'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/getrecipes">Get Recipes</NavLink>
                </div>
                <div
                    id='btn-logOut'
                    className='text-white px-8 py-1.5 rounded-full'>
                    <h2>Log Out</h2>
                </div>
            </div>
            <div
                className=
                'w-[50%] h-[100%] flex cursor-pointer items-center justify-center'>
                <form
                    id="input-1"
                    onSubmit={handleSubmit(submitHandler)}
                    className='w-full h-[80%] mt-8 flex flex-col items-center justify-evenly ' >
                    <div
                        id="inp"
                        className=' flex items-center justify-center  w-[60%]'>
                        <h2

                            className='text-emerald-700  flex items-center justify-center shadow-2xl w-32 h-10 font-bold text-xl  text-left'>
                            Sign Up
                        </h2>
                    </div>
                    <input
                        {...register("username")}
                        className='w-[70%] shadow-xl  h-14 rounded-full  px-10   '
                        type="text"
                        placeholder='Enter your username.' />
                    <input
                        {...register("email")}
                        className='w-[70%] shadow-xl  h-14 rounded-full  px-10   '
                        type="email"
                        placeholder='Enter your email.' />
                    <input
                        {...register("password")}
                        className='w-[70%] shadow-xl  h-14 rounded-full  px-10   '
                        type="password"
                        placeholder='Enter your password'

                    />
                    <div className='flex w-96 items-center justify-between gap-4'>
                        <h2>Forgot Your password</h2>
                        <input
                            onClick={() => navigate("/mainpage")}
                            id="signup-btn"
                            className='px-8 flex py-2 shadow-2xl
                         rounded-full
                          text-black'
                            type="submit"
                            value="Sign Up" />
                    </div>

                </form>
            </div>
            <div className='w-[25%]   flex items-center justify-center absolute h-[45%] right-36'>
                <img className='w-full h-full object-cover object-center' src="./Images/LapImage.png" alt="" />
            </div>
            <div className=
                'w-[60%] h-[100%]  flex items-center justify-end'>
                <div className='h-[100%] flex items-center justify-end overflow-hidden w-[70%] rounded-l-full   bg-blue-100'>
                    <div className=' w-[80%] flex items-center justify-end  h-[100%]  rounded-l-full  bg-blue-200'>
                        <div className=' w-[73%] flex items-center justify-end  h-[100%]  rounded-l-full  bg-blue-300'>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Register

