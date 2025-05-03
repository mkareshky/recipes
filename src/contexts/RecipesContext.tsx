import { createContext, FormEvent, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "react";

interface ChildrenType {
    children: ReactNode;
}

export interface Data {
    recipes: Recipe[];
}

export interface Recipe {
    publisher: string;
    image_url: string;
    title: string;
    id: string;
}

interface GlobalContextType {
    searchParam: string;
    loading: boolean;
    recipeList: Recipe[];
    setSearchParam: Dispatch<string>;
    handleSubmit: (event: FormEvent) => Promise<void>;
}

const defaultGlobalContext: GlobalContextType = {
    searchParam: "",
    loading: false,
    recipeList: [],
    setSearchParam: () => { },
    handleSubmit: async () => { },
};

export const RecipesContext = createContext<GlobalContextType>(defaultGlobalContext);

const RecipesProvide = ({ children }: ChildrenType) => {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState<Recipe[]>([]);

    const navigate = useNavigate()



    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        try {
            const res = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
            );

            const data = await res.json();
            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParam("");
                navigate('/')
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
            setSearchParam("");
        }
    }

    return (
        <RecipesContext.Provider
            value={{
                searchParam,
                loading,
                recipeList,
                setSearchParam,
                handleSubmit,
            }}
        >
            {children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvide;