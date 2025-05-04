import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Data } from "../../types";

const RecipeDetails = () => {
    const { id } = useParams();
    const { loading, errorMsg, data } = useFetch<Data>(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

    if (loading) return <p>Loading...</p>;
    if (errorMsg) return <p className="text-red-600">Error: {errorMsg}</p>;

    return (
        <>
            {
                data && <>
                    <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
                        <img src={data.recipe.image_url} alt={data.recipe.title} className="block w-full" />
                    </div>
                    <div>
                        <span className="text-sm text-cyan-700 font-medium">
                            {data.recipe.publisher}
                        </span>
                        <h3 className="font-bold text-2xl truncate text-black">
                            {data.recipe.title}
                        </h3>
                    </div>
                </>
            }
        </>
    );
}

export default RecipeDetails;
