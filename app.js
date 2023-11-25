const loadData = (global) => {
  const searchText = document.getElementById("search-box").value;

  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${
      searchText ? searchText : global
    }`
  )
    .then((res) => res.json())
    .then((data) => dispalyData(data.meals));
};

const dispalyData = (data) => {
  document.getElementById("total-meals").innerText = data.length;
  const mealContainer = document.getElementById("meals-container");
  data.forEach((meal) => {
    console.log(meal);
    const card = document.createElement("div");
    card.classList.add("box");
    card.innerHTML = `<img class="box-img" src=${meal.strMealThumb} alt="" />
    <h2>${meal.strMeal}</h2>
    <p>${meal.strInstructions.slice(0, 30)}</p>
    <button
    onclick ="displaymodal('${meal.idMeal}')"
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
   Detalis
  </button>

    `;
    mealContainer.appendChild(card);
  });
};

const displaymodal = async (id) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    console.log(data.meals[0]);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

loadData = "hellow";
