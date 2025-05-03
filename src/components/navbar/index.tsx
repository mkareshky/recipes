import { useContext } from "react";
import { NavLink } from "react-router-dom";
import useFormInput from "../../hooks/useFormInput";
import { RecipesContext } from "../../contexts/RecipesContext";

export default function Navbar() {
    const { handleSubmit } = useContext(RecipesContext);
    const inputProps = useFormInput("");

    return (
        <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
            <h2 className="text-2xl font-semibold">
                <NavLink to={"/"}>FoodRecipe</NavLink>
            </h2>
            <form onSubmit={(e) => handleSubmit(e, inputProps.value)}>
                <input
                    type="text"
                    name="search"
                    value={inputProps.value}
                    onChange={inputProps.onchange}
                    placeholder="Enter Items..."
                    className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
                />
            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink to={"/"} className="text-black hover:text-gray-700 duration-300">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/favorites"} className="text-black hover:text-gray-700 duration-300">
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
