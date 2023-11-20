import Image from "next/image";
import { DRINKS } from "@/components/constants";

interface Drink {
    name: string;
    description: string;
    description_long: string;
    link: string;
    ingredients: Ingredient[];
    instructions: string[];
    image: string;
    image_alt: string;
}
interface Ingredient {
    type: string;
    brand: string;
    amount: string;
}

function IngredientItem(props : {ingredient:Ingredient}){

    let listItem :string = "";

    if(props.ingredient.amount.endsWith("oz")){
        listItem += props.ingredient.amount + " "
    }
    listItem += props.ingredient.brand + " "
    if(props.ingredient.type != "NA"){
        listItem += props.ingredient.type 
    }
    if (!props.ingredient.amount.endsWith("oz")) {
        listItem += " " + props.ingredient.amount 
    }
    return(
        <li>{listItem}</li>
    );
}

function IngredientList(props: { ingredients: Ingredient[] }) {
    let rows: React.JSX.Element[] = []
    props.ingredients.forEach((ingredient) =>
    rows.push(<IngredientItem ingredient={ingredient}/>)
    )

    return(
        <div>
            <h3>Ingredients</h3>
            <ol className="list-disc list-inside">{rows}</ol>
        </div>
    )

}

function DirectionsList(props: { directions: string[] }) {
    let rows: React.JSX.Element[] = []
    props.directions.forEach((direction) =>
        rows.push(<li>{direction}</li>)
    )

    return (
        <div>
            <h3>Directions</h3>
            <ol className="list-decimal list-inside">{rows}</ol>
        </div>
    )

}

export default function DrinkPage(props: { params: {}, searchParams: { drinkName: string} }) {
    let drink: Drink = DRINKS[0];
    DRINKS.forEach((drinkA:Drink) =>{
        if(drinkA.name == props.searchParams.drinkName){
            drink = drinkA;
        }
    })

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div>
                    <Image 
                        src={drink.image} // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={400} // Desired size with correct aspect ratio
                        alt={drink.image_alt}
                    />
                    <IngredientList ingredients={drink.ingredients}/>
                    <br/>
                    <DirectionsList directions={drink.instructions}/>
                </div>
            </div>
    </main>
    );
}