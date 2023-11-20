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

const INGREDIENTS: Ingredient[] = [
    { "type": "Rum", "brand": "Plantation", "amount": "0oz" },
    { "type": "Rum", "brand": "Plantation 151", "amount": "0oz" },
    { "type": "Gin", "brand": "Beefeater", "amount": "0oz" },
    { "type": "NA", "brand": "Simple Syrup", "amount": "0oz" },
    { "type": "Cider", "brand": "Ace's Pineapple", "amount": "0oz" },
]
const DRINK_INDICIES = { "Zombie": 0, "TomCollins": 1 }

const DRINKS: Drink[] = [
    {
        "name": "Zombie",
        "description": "The Zombie is a behemoth of a cocktail that features three different rums—Jamaican, Puerto Rican and 151-proof—along with fresh lime juice, falernum, grenadine, a few drops of absinthe and Don's mix, a cinnamon-flavored simple syrup mixed with fresh grapefruit juice.",
        "description_long": "The Zombie is a classic drink by the legendary bartender and restaurateur Donn Beach. It's one of many popular cocktails created and served at the lively Hollywood bar, Don the Beachcomber, which opened in 1933 and was responsible for kicking off what became popularly known as the Tiki-style of drink.",
        "link": "/drink?drinkName=Zombie",
        "ingredients": [
            {
                "type": "Rum",
                "brand": "Jamaican",
                "amount": "1.5oz"
            },
            {
                "type": "Rum",
                "brand": "Puerto Rican gold",
                "amount": "1.5oz"
            },
            {
                "type": "Rum",
                "brand": "151-proof demerara",
                "amount": "1oz"
            },
            {
                "type": "NA",
                "brand": "lime juice",
                "amount": ".75oz"
            },
            {
                "type": "NA",
                "brand": "falernum",
                "amount": ".5oz"
            }
        ],
        "instructions": [],
        "image": "/drinkImages/Zombie.jpg",
        "image_alt": "An image of a Zombie Cocktail"
    },
    {
        "name": "Tom Collins",
        "description": "The classic Tom Collins is a straightforward and refreshing cocktail that combines gin with lemon juice, sugar and club soda.",
        "description_long": "The classic Tom Collins is a straightforward and refreshing cocktail that combines gin with lemon juice, sugar and club soda.",
        "link": "/drink?drinkName=Tom Collins",
        "ingredients": [
            {
                "type": "Gin",
                "brand": "London Dry",
                "amount": "2oz"
            },
            {
                "type": "NA",
                "brand": "Lemon Juice",
                "amount": "1oz"
            },
            {
                "type": "NA",
                "brand": "Simple Syrup",
                "amount": ".5oz"
            },
            {
                "type": "NA",
                "brand": "Club Soda",
                "amount": "to top"
            },
            {
                "type": "NA",
                "brand": "Lemon Wheel",
                "amount": "to garnish"
            },
            {
                "type": "NA",
                "brand": "Maraschino Cherry",
                "amount": "to garnish"
            }
        ],
        "instructions": [
            "Add the gin, lemon juice and simple syrup to a Collins glass.",
            "Fill with ice, top with club soda and stir.",
            "Garnish with a lemon wheel and maraschino cherry(optional)."],
        "image": "/drinkImages/TomCollins.jpg",
        "image_alt": "An image of a Tom Collins Cocktail"
    },
    {
        "name": "Brandy Old Fashioned",
        "description": "The Brandy Old Fashioned, aka the Wisconsin Old Fashioned, is practically the state’s official drink. In addition to brandy, it calls for muddled fruit and a topper of lemon-lime soda. So, it’s not your great-great-grandfather’s Old Fashioned. Well, unless he’s from Wisconsin.",
        "description_long": "The Brandy Old Fashioned, aka the Wisconsin Old Fashioned, is practically the state’s official drink. In addition to brandy, it calls for muddled fruit and a topper of lemon-lime soda. So, it’s not your great-great-grandfather’s Old Fashioned. Well, unless he’s from Wisconsin.",
        "link": "/drink?drinkName=Brandy Old Fashioned",
        "ingredients": [
            {
                "type": "NA",
                "brand": "Angostura Bitters",
                "amount": "3 dashes"
            },
            {
                "type": "NA",
                "brand": "orange slices",
                "amount": "2"
            },
            {
                "type": "NA",
                "brand": "maraschino cherries",
                "amount": "2"
            },
            {
                "type": "NA",
                "brand": "Sugar Cube",
                "amount": "1"
            },
            {
                "type": "Brandy",
                "brand": "",
                "amount": "2oz"
            },
            {
                "type": "NA",
                "brand": "Club soda",
                "amount": "to top"
            }
        ],
        "instructions": [
            "Add the bitters, orange slices, cherries and sugar cube to an Old Fashioned glass and muddle to combine.",
            "Add ice to fill the glass, then add the brandy.",
            "Top with the club soda, and stir to chill."],
        "image": "/drinkImages/BrandyOldFashioned.jpg",
        "image_alt": "An image of a Tom Collins Cocktail"
    }
]

export { INGREDIENTS, DRINKS, DRINK_INDICIES }