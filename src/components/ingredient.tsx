'use client'
//import IngredientRow from "./ingredientRow";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { INGREDIENTS, DRINKS } from './constants';

interface Ingredient {
    type: string;
    brand: string;
    amount: string;
}

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
function IngredientRow(prop: {ingredient: Ingredient}) {
    return (
        <tr>
            <td>{prop.ingredient.type}</td>
            <td>{prop.ingredient.brand}</td>
        </tr>


    );
}


function IngredientTableOld(prop: {ingredients: Ingredient[]}) {

    let rows: React.JSX.Element[] = []; 
    prop.ingredients.map((ingredient) => {
        rows.push(
            <IngredientRow ingredient={ingredient}/>
        );
        console.log(ingredient)
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}


function ProductCategoryRow( prop: {category: string} ) {
    return (
        <tr>
            <th colSpan={2}>
                {prop.category}
            </th>
        </tr>
    );
}

function ProductRow( prop: {product:Ingredient} ) {
    return (
        <tr>
            <td>{prop.product.type}</td>
            <td>{prop.product.brand}</td>
        </tr>
    );
}

function IngredientTable(prop: { products: Ingredient[]} ) {
    let rows: React.JSX.Element[] = [];
    let lastCategory :string = "";

    prop.products.forEach((product) => {
  
        rows.push(
            <ProductRow
                product={product}
                key={product.brand} />
        );
        lastCategory = product.type;
    });

    return (
        <table className=' text-center text-lg'>
            <thead>
                <tr>
                    <th className='font-sans'>Name</th>
                    <th className='font-sans'>type</th>
                </tr>
            </thead>
            <IngredientAdder />
            <tbody className=''>
                {rows}
            </tbody>
        </table>
    );
}

function IngredientAdder(){

    function onClick() {

    }
    
    return(
        <form>
            <input name="type"/>
            <input name="brand"/>
            <button onClick={(event) => onClick()} className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>add</button>
        </form>
    )
}

function IngredientComponent(){
    let rows: React.JSX.Element[] = [];
    const [ingredients, setIngredients] = useState<Ingredient[]>(INGREDIENTS);


    DRINKS.forEach((drink) => {
        rows.push(
            <DrinkLink
                drink={drink} />
        );
    });
    return(
        <div className='grid grid-cols-4'>

            <div className=""><IngredientTable products={ingredients} /></div>

            <div className="col-span-3">{rows}</div>
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
                    alt={props.drink.image_alt}
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