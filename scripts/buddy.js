const loadCategories = async () => {

    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
        const data = await res.json();
        displayCategories(data.categories)
    }
    catch (error) {
        console.log("categories load error")
    }

}

const displayCategories = (categories) => {
    // console.log(categories)

    const categoriesContainer = document.getElementById('categories');

    categories.map((singleCategory) => {
        // console.log(singleCategory)

        const category = document.createElement('div');
        category.innerHTML = `
        
        <div onclick="loadSingleCategory()" class="flex items-center justify-center gap-2 rounded-lg border border-gray-300 shadow-md py-2">
                    <div class="w-10 h-10">
                        <img class="w-full h-full" src=${singleCategory.category_icon} alt="">
                    </div>
                    <h4 class="font-bold ">${singleCategory.category}s</h4>
        </div>
        
        `
        categoriesContainer.appendChild(category)
    })
}

// load pets
const loadPets = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    const data = await res.json();

    displayPets(data.pets)
}

const displayPets = (pets) => {
    console.log(pets)
    console.log(pets.length)

    if (pets.length > 3) {
        pets = pets.slice(0, 3);
    }


    const petsContainer = document.getElementById('pets-container');


    pets.map((singlePet) => {
        console.log(singlePet)

        const card = document.createElement('div');
        card.classList = 'card'

        card.innerHTML = `
            <div class=" h-[200px] border">
                <img class="w-full h-full object-cover" src=${singlePet.image} />
             </div>
            <div class="">
                <h2 class="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside    body there are title and actions parts</p>
                <div class="card-actions ">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        
        `
        petsContainer.append(card);
    })

}

loadCategories();
loadPets();