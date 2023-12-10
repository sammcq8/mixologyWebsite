import Image from "next/image";
import { DRINKS } from "@/components/constants";
import { Ingredient, Drink } from "@/components/types";
import Link from "next/link";



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
        <main className="flex min-h-screen flex-col justify-between p-12">
            <div className='dark:hidden p-5 text-left'><Link href={"/"}><Image src={"/light-logo.png"} width={300} height={150} alt="" /></Link></div>

            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div>
                    <Image className="self-center rounded-full md:justify-self-start"
                        src={drink.image} // Route of the image file
                        height={400} // Desired size with correct aspect ratio
                        width={400} // Desired size with correct aspect ratio
                        alt={drink.image_alt === undefined? "": drink.image_alt}
                    />
                    <p className="text-2xl align-center pt-10 pb-5">{drink.name}</p>
                    <p className="align-center pb-5">{drink.description_long}</p>
                    
                    <IngredientList ingredients={drink.ingredients_print}/>
                    <br/>
                    <DirectionsList directions={drink.instructions}/>
                    <br/>
                    <a href={drink.source} className="underline bold underline-offset-2">Source</a>
                </div>
            </div>
    </main>
    );
}