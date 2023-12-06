import Image from "next/image";
import { DRINKS } from "@/components/constants";
import { Ingredient, Drink } from "@/components/types";



function IngredientList(props: { ingredients: String[] }) {
    let rows: React.JSX.Element[] = []

    props.ingredients.forEach(ingredient =>
        rows.push(<li>{ingredient}</li>))

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
        if(drinkA.name.replaceAll(" ", "") == props.searchParams.drinkName){
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
                        alt={drink.image_alt === undefined? "": drink.image_alt}
                    />
                    
                    <IngredientList ingredients={drink.ingredients_print}/>
                    <br/>
                    <DirectionsList directions={drink.instructions}/>
                    <br/>
                    <a href={drink.source}>Source</a>
                </div>
            </div>
    </main>
    );
}