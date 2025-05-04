import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Data } from "../../types";

const RecipeDetails = () => {
    const { id } = useParams();
    const { loading, errorMsg, data } = useFetch<Data>(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

    if (loading) return <p>Loading...</p>;
    if (errorMsg) return <p className="text-red-600">Error: {errorMsg}</p>;

    return (
        <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="row-start-2 lg:row-start-auto">
                <div className="h-96 overflow-hidden rounded-xl group">
                    <img
                        src={data?.recipe.image_url}
                        className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-sm text-cyan-700 font-medium">
                    {data?.recipe.publisher}
                </span>
                <h3 className="font-bold text-2xl truncate text-black">
                    {data?.recipe.title}
                </h3>
                <div>
                    <button
                        className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
                    >
                        {"Add to favorites"}
                    </button>
                </div>
                <div>
                    <span className="text-2xl font-semibold text-black">
                        Ingredients:
                    </span>
                    <ul className="flex flex-col gap-3">
                        {data?.recipe.ingredients.map((ingredient) => (
                            <li>
                                <span className="text-2xl font-semibold text-black">
                                    {ingredient.quantity} {ingredient.unit}
                                </span>
                                <span className="text-2xl font-semibold text-black">
                                    {ingredient.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;
