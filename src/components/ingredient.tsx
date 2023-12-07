'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { ChangeEvent, ReactElement, useState } from 'react';
import { INGREDIENTS, DRINKS, INGREDIENTS_WITH_CATEGORIES } from './constants';
import { Ingredient, Drink, IngredientCategories } from './types';


function IngredientCategory(prop: {category:IngredientCategories, updateIngredients:any}){
    let rows:React.JSX.Element[] = [];
    let [visible, setVisible] = useState<boolean>(false);


    function toggle() {
        setVisible(!visible)
    }
    
    function selectOne(e: ChangeEvent<HTMLInputElement>) {
        console.log("event" + e.target.name)
        prop.updateIngredients(e.target.name, e.target.checked)
    };



    prop.category.ingredients.forEach((ingredient) => {
        rows.push(
            <li key={ingredient}>
                <input type="checkbox" name={ingredient} id={ingredient} onChange={selectOne} />
                <label className='font-sans text-sm' htmlFor={ingredient}>  {ingredient.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</label>
            </li>
        );
    
    });


    return(
        <div className='col-span-4 text-left row-span-3' id="accordion-collapse" data-accordion="collapse" >
            <button type="button" onClick={toggle}>
                <span className='flex'>
                    <svg data-accordion-icon className="align-bottom w-3 h-3 rotate-180 shrink-0" fill="none" viewBox="0 0 10 10">
                        <path className="flex align-text-bottom" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                    <h2 className='flex align-top font-sans text-xl whitespace-pre'>{"   " + prop.category.category}</h2>
                </span>
            </button>
            <div id="accordion-collapse-body-1" className={ visible?"":"hidden"} > <ul>{rows}</ul> </div>
            
        </div>
    )
}
function ProductRow( prop: {product:Ingredient} ) {
    return (
        <div>
            <p className="font-serif text-left">{prop.product.type}</p>    
        </div>
    );
}

function IngredientTable(prop: { products: Ingredient[], updateIngredients:any} ) {
    let categories:React.JSX.Element[] = []
    let rows: React.JSX.Element[] = [];
    let lastCategory :string = ""
    let [visible, setVisible] = useState<boolean>(true);


    function toggle() {
        setVisible(!visible)
    }


    INGREDIENTS_WITH_CATEGORIES.forEach(category => categories.push(<IngredientCategory category={category} updateIngredients={prop.updateIngredients}/>))


    prop.products.forEach((product) => {
  
        rows.push(
            <ProductRow
                product={product} />
        );
    });

    return (
        <div className='text-lg'>
            <button type="button" onClick={toggle}>
                <span className='flex'>
                    <svg data-accordion-icon className="align-bottom w-6 h-6 rotate-180 shrink-0 lg:hidden" fill="none" viewBox="0 0 10 10">
                        <path className="flex align-text-bottom" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5 5 1 1 5" />
                    </svg>
                    <h2 className='font-sans text-left text-3xl'>Your Ingredients</h2>
                </span>
            </button>
            <br/>
            <hr/>
            <div className='grid lg:grid-cols-1 lg:grid-rows-20 sm:grid-cols-1 sm:grid-rows-40 space-y-3'>
                <div className={visible ? "" : "hidden"}>{categories}</div>
                
            </div>
        </div>
    );
}

function IngredientComponent(){
    const [ingredients, setIngredients] = useState<Ingredient[]>(INGREDIENTS);

    const visibleDrinks = updateDrinks()


    function addIngredient(newingredient:string, add:boolean){
        console.log("newIngredient"+newingredient)
        let newList = []
        if(add){
            const newIngredient: Ingredient = { "type": newingredient }
            newList = ingredients.concat(newIngredient)
            console.log("newlist")

        }
        else{
            const newIngredient: Ingredient = { "type": newingredient }
            let index = ingredients.indexOf(newIngredient)
            newList = ingredients.splice(index, 1)
        }
        setIngredients(newList)
        console.log(newList)
        console.log(ingredients)
        //updateDrinks()
    }

    function drinkToDrinkLink(drink:Drink){
        return <DrinkLink drink = {drink}></DrinkLink>
    }

    function updateDrinks(){
        var drinkMap:Array<Array< number | Drink>> = new Array();
        DRINKS.forEach((drink)=>{
            
            let sum = drink.ingredients.filter(ingredient =>{return ingredients.map(ingredient => ingredient.type).includes(ingredient.type)}).length
            drinkMap.push (new Array<number | Drink>(drink, sum/drink.ingredients.length))
        })
        drinkMap.sort((a: Array<number | Drink>, b:Array<number | Drink>)=> (b.at(1) as number) - (a.at(1) as number))

        return (drinkMap.map((drinkList: Array<number | Drink> )=> drinkList.at(0) as Drink))
    }

    return(
        <div className='grid lg:grid-cols-4 sm:grid-cols-1'>
            <div className="col-span-1 ">
                <div><IngredientTable products={ingredients} updateIngredients={addIngredient}/></div>
            </div>
           

            <div className="lg:col-span-3 md:col-span-1 sm:col-span-1">{visibleDrinks.map((drink)=>drinkToDrinkLink(drink))}</div>
        </div>
    )
}

function DrinkLink( props: {drink: Drink}){

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