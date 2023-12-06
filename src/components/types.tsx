interface Ingredient {
    type: string;
}

interface Drink {
    name: string;
    description: string;
    description_long: string;
    link: string;
    ingredients: Ingredient[];
    ingredients_print: String[];
    instructions: string[];
    image: string;
    image_alt?: string;
    source?: string;
}

export type {Ingredient, Drink}