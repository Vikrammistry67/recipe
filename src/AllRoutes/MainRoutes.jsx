import { Route, Routes } from "react-router-dom"
import MainPage from "../components/MainPage"
import About from "../components/About"
import Contact from "../components/Contact"
import AllRecipes from "../components/AllRecipes"
import Register from "../Registration/Register"
import VegRecipes from "../components/VegRecipes"
import Favorite from "../components/Favorite"
const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/vegrecipes" element={<VegRecipes />} />
                <Route path="/allrecipes" element={<AllRecipes />} />
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}
export default MainRoutes