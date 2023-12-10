from recipe_scrapers import scrape_me
import json
import re
import requests

liqour_types = ["rum", "jamaican rum", "puerto rican gold rum", "demerara rum", "herbsaint", "pernod", "lime juice", "donn's mix", "falernum", "grenadine", "Angostura bitters"
"gin", "club soda", "orange juice"] 

def download_img(pic_url, image_dest):
    with open(image_dest, 'wb') as handle:
        response = requests.get(pic_url, stream=True)

        if not response.ok:
            print(response)

        for block in response.iter_content(1024):
            if not block:
                break

            handle.write(block)

def ingredients_list_to_searchable(ingredients):
    patterns = [r'[0-9]', 'ounces', 'ounce', r"[*|:|/|-]", ",", "dash", "dashes", "garnish", "proof", "teaspoon", "to top", "freshly squeezed", "chilled", "to rinse"]
    finalList = []


    for ingredient in ingredients:
        ingredient = ingredient.lower()
        for pattern in patterns:
            ingredient = re.sub(pattern, '', ingredient)
        final_ings = ingredient.strip().split(" or ")
        for ing in final_ings:
            finalList.append({"type":ing})
    
    return finalList


def pull_recipe(url):
    scraper = scrape_me(url, wild_mode=True)
    spacelessTitle = re.sub(" ", "", scraper.title());
    download_img(scraper.image(), "public/drinkImages/"+spacelessTitle+".jpg")
    
    body = {"name": scraper.title(),
        "ingredients": ingredients_list_to_searchable(scraper.ingredients()),
        "ingredients_print": scraper.ingredients(),
        "description":scraper.description(),
        "description_long": scraper.description(),
        "link": "/drink?drinkName="+spacelessTitle,
        "image":"/drinkImages/"+spacelessTitle+".jpg",
        "instructions": scraper.instructions_list(),
        "source": scraper.canonical_url()}

    return body

    
    



def main():
    links = ["https://www.liquor.com/recipes/manhattan-2/", "https://www.liquor.com/recipes/negroni/","https://www.liquor.com/recipes/dry-martini/", "https://www.liquor.com/recipes/sazerac/", "https://www.liquor.com/recipes/sidecar/", "https://www.liquor.com/recipes/pisco-sour/"]
    recipes = []
    for link in links:
        recipes.append(pull_recipe(link))
    print(json.dumps(recipes))

if __name__ == "__main__":
    main()


