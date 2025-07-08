import React, { createContext, useEffect, useState } from 'react'
export const recipeContext = createContext();
const Context = ({ children }) => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        setRecipe(JSON.parse(localStorage.getItem("Recipes")) || [])
    }, []);


    return (
        <recipeContext.Provider value={[recipe, setRecipe]}>
            {children}
        </recipeContext.Provider>
    )
}

export default Context