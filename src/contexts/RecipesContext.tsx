import { createContext, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChildrenType, Recipe, RecipesContextType } from "../types";

const defaultRecipesContext: RecipesContextType = {
    loading: false,
    recipeList: [],
    handleSubmit: async () => { },
    errorMsg: ''
};

export const RecipesContext = createContext<RecipesContextType>(defaultRecipesContext);

const RecipesProvide = ({ children }: ChildrenType) => {
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState<Recipe[]>([]);
    const [errorMsg, setErrprMsg] = useState('');

    const navigate = useNavigate()

    async function handleSubmit(event: FormEvent, search: string) {
        event.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
            if (!res.ok) setErrprMsg(`HTTP Error Status: ${res.status}`);
            const resJson = await res.json();
            setRecipeList(resJson?.data?.recipes);
            navigate('/');
        } catch (error) {
            (error instanceof Error) ? setErrprMsg(error.message) : 'Unknown Error...';
        } finally {
            setLoading(false);
        }
    }

    return (
        <RecipesContext.Provider
            value={{
                loading,
                recipeList,
                handleSubmit,
                errorMsg
            }}
        >
            {children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvide;