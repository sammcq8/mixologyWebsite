'use client'
//import IngredientRow from "./ingredientRow";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { INGREDIENTS, DRINKS } from './constants';
import { Ingredient, Drink } from './types';


function IngredientRow(prop: {ingredient: Ingredient}) {
    return (
            <p>{prop.ingredient.type}</p>
    );
}

function ProductRow( prop: {product:Ingredient} ) {
    return (
        <div>
            <p className="font-serif text-left">{prop.product.type}</p>    
        </div>
    );
}

function IngredientTable(prop: { products: Ingredient[]} ) {
    let rows: React.JSX.Element[] = [];
    let lastCategory :string = "";

    prop.products.forEach((product) => {
  
        rows.push(
            <ProductRow
                product={product} />
        );
    });

    return (
        <div className=' text-center text-lg'>
            <div className=''>
                {rows}
            </div>
        </div>
    );
}

function IngredientComponent(){
    const [ingredients, setIngredients] = useState<Ingredient[]>(INGREDIENTS);
    const [name, setName] = useState<string>("");
    const [visibleDrinks, setVisibleDrinks] = useState<Drink[]>(DRINKS);


    function handleChange(event:any) {
        setName(event.target.value);
    }

    function handleAdd(){
        if(name != ""){
            const newIngredient:Ingredient = {"type": name}
            const newList = ingredients.concat( newIngredient )
            setIngredients(newList)
            setName("")
        }
    }

    function clear(){
        setIngredients([])
    }

    function drinkToDrinkLink(drink:Drink){
        return <DrinkLink drink = {drink}></DrinkLink>
    }

    function updateDrinks(){
        var drinkMap:Array<Array< number | Drink>> = new Array();
        DRINKS.forEach((drink)=>{
            
            let sum = drink.ingredients.filter(ingredient =>{return ingredients.map(ingredient => ingredient.type).includes(ingredient.type)}).length
            drinkMap.push (new Array<number | Drink>(drink, sum/drink.ingredients.length))
            console.log(drinkMap)
        })
        drinkMap.sort((a: Array<number | Drink>, b:Array<number | Drink>)=> (b.at(1) as number) - (a.at(1) as number))

        setVisibleDrinks(drinkMap.map((drinkList: Array<number | Drink> )=> drinkList.at(0) as Drink))
    }

    return(
        <div className='grid lg:grid-cols-4 sm:grid-cols-1'>
            <div>
                <input type="text" value={name} onChange={handleChange} />
                <button type="button" onClick={handleAdd} className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>
                    Add
                </button>
                <button type="button" onClick={clear} className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>
                    Clear
                </button>
                <button type="button" onClick={updateDrinks} className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>
                    Search
                </button>
            </div>
            <div className="col-span-1"><IngredientTable products={ingredients} /></div>

            <div className="lg:col-span-3 md:col-span-1 sm:col-span-1">{visibleDrinks.map((drink)=>drinkToDrinkLink(drink))}</div>
        </div>
    )
}

function DrinkLink( props: {drink: Drink}){
    console.log(props.drink);

    return(
        <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">            
                <Image className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                    src={props.drink.image} // Route of the image file
                    height={120} // Desired size with correct aspect ratio
                    width={120} // Desired size with correct aspect ratio
                    alt={props.drink.image_alt === undefined ? "" : props.drink.image_alt}
                />
                <div className="flex flex-col">
                    <h1><Link href={props.drink.link} className="text-lg font-semibold text-center md:text-left">{props.drink.name}</Link></h1>
                    <p className="dark:text-gray-400">{props.drink.description}</p>
                </div>
        
            </div>
        </div>
    );
}



export default IngredientComponent