import { useContext } from "react";
import RecipeItem from "../../components/recipesItem";
import { RecipesContext } from "../../contexts/RecipesContext";

const Home = () => {
    const { recipeList, loading } = useContext(RecipesContext);

    if (loading) return <div>Loading...Please wait!</div>;

    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {recipeList && recipeList.length > 0 ? (
                recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
            ) : (
                <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing to show. Please search something
                    </p>
                </div>
            )}
        </div>
    );
}

export default Home;