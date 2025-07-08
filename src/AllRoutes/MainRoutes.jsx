import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import MainPage from "../components/MainPage"
import About from "../components/About"
import Contact from "../components/Contact"
import AllREcipes from "../components/AllREcipes"
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
                <Route path="/allrecipes" element={<AllREcipes />} />
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/getrecipes" element={<AllREcipes />} />
            </Routes>
        </div>
    )
}
export default MainRoutes