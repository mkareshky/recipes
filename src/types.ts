import { FormEvent, ReactNode } from "react";

export interface Data {
    recipe: Recipe;
}

export interface Recipe {
    publisher:    string;
    ingredients:  Ingredient[];
    source_url:   string;
    image_url:    string;
    title:        string;
    servings:     number;
    cooking_time: number;
    id:           string;
}

export interface Ingredient {
    quantity:    number;
    unit:        string;
    description: string;
}

export interface ChildrenType {
    children: ReactNode;
}

export interface Data {
    recipes: Recipe[];
}

export interface RecipesContextType {
    loading: boolean;
    recipeList: Recipe[];
    handleSubmit: (event: FormEvent, search: string) => Promise<void>;
    errorMsg: string;
}

