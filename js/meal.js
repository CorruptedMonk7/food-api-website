const mealsApi = (name) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => foundMeals(data.meals));
}
const foundMeals = meals => {
    const getDiv = document.getElementById('meal-id')
    getDiv.innerHTML = ``
    meals.forEach(meal => {

        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <div class="col">
        <div class="card">
                    <img src="${meal.strMealThumb}                        " class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
        </div>
        `
        getDiv.appendChild(newDiv)
    })
}
const foods = () => {
    const getInput = document.getElementById("food-name");
    const searchText = getInput.value;
    mealsApi(searchText)
    getInput.value = ""
}
mealsApi("fish")
