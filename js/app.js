/* =========================================================
   STATE
========================================================= */

let currentRecipes = [...recipesData];

let selectedCategory = "Wszystkie";
let activeTags = [];

let favorites = JSON.parse(
    localStorage.getItem("agata_recipe_favs") || "[]"
);

let activeRecipe = null;

let currentServings = 1;

let checkedIngredients = new Set();
let checkedSteps = new Set();

let cookingStepIndex = 0;


/* =========================================================
   TIMER STATE
========================================================= */

let timerInterval = null;
let timerSecondsLeft = 0;
let timerIsPaused = false;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderCategoryChips();

    updateFavoritesCount();

    renderRecipes();

    setupKeyboardControls();

});


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategoryChips() {

    const container =
        document.getElementById("category-chips");

    const categories = [
        "Wszystkie",
        ...new Set(
            recipesData.map(recipe => recipe.category)
        )
    ];

    container.innerHTML = categories
        .map(category => {

            const active =
                selectedCategory === category;

            return `
                <button
                    onclick="selectCategory('${escapeAttribute(category)}')"
                    class="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition whitespace-nowrap
                    ${active
                    ? "bg-terracotta-600 text-white shadow-sm"
                    : "bg-white border border-sand-300 text-sand-800 hover:bg-sand-100"
                }"
                >
                    ${category}
                </button>
            `;

        })
        .join("");
}


function selectCategory(category) {

    selectedCategory = category;

    renderCategoryChips();

    filterAndRender();
}


/* =========================================================
   TAG FILTERS
========================================================= */

function toggleTagFilter(tag) {
    if (activeTags.includes(tag)) {
        activeTags = activeTags.filter(item => item !== tag);
    } else {
        activeTags.push(tag);
    }

    const button = document.getElementById(`tag-${tag}`);

    button.classList.toggle(
        "active",
        activeTags.includes(tag)
    );

    filterAndRender();
}


/* =========================================================
   SEARCH
========================================================= */

function handleSearch() {

    const input =
        document.getElementById("search-input");

    const query =
        input.value.toLowerCase().trim();

    document
        .getElementById("clear-search")
        .classList.toggle(
            "hidden",
            query.length === 0
        );

    filterAndRender();
}


function clearSearch() {

    document.getElementById(
        "search-input"
    ).value = "";

    document
        .getElementById("clear-search")
        .classList.add("hidden");

    filterAndRender();
}


/* =========================================================
   RESET
========================================================= */

function resetFilters() {

    selectedCategory = "Wszystkie";

    activeTags = [];

    document.getElementById(
        "search-input"
    ).value = "";

    document
        .getElementById("clear-search")
        .classList.add("hidden");


    document
        .querySelectorAll(".filter-tag")
        .forEach(button => {

            button.classList.remove("active");

        });


    const favoritesButton =
        document.getElementById("fav-filter-btn");

    favoritesButton.classList.remove(
        "bg-terracotta-600",
        "text-white"
    );

    favoritesButton.classList.add(
        "bg-white",
        "text-sand-800"
    );


    renderCategoryChips();

    filterAndRender();
}


/* =========================================================
   FAVORITES FILTER
========================================================= */

function toggleFavoritesFilter() {

    const button =
        document.getElementById("fav-filter-btn");


    if (selectedCategory === "Ulubione") {

        selectedCategory = "Wszystkie";

        button.classList.remove(
            "bg-terracotta-600",
            "text-white"
        );

        button.classList.add(
            "bg-white",
            "text-sand-800"
        );

    } else {

        selectedCategory = "Ulubione";

        button.classList.add(
            "bg-terracotta-600",
            "text-white"
        );

        button.classList.remove(
            "bg-white",
            "text-sand-800"
        );
    }

    renderCategoryChips();

    filterAndRender();
}


/* =========================================================
   FILTERING
========================================================= */

function filterAndRender() {

    const query =
        document
            .getElementById("search-input")
            .value
            .toLowerCase()
            .trim();


    currentRecipes =
        recipesData.filter(recipe => {

            /* Category */

            if (selectedCategory === "Ulubione") {

                if (!favorites.includes(recipe.id)) {
                    return false;
                }

            } else if (
                selectedCategory !== "Wszystkie" &&
                recipe.category !== selectedCategory
            ) {

                return false;
            }


            /* Tags */

            if (activeTags.length > 0) {

                const hasAllTags =
                    activeTags.every(tag =>
                        recipe.tags.includes(tag)
                    );

                if (!hasAllTags) {
                    return false;
                }
            }


            /* Search */

            if (query) {

                const titleMatch =
                    recipe.title
                        .toLowerCase()
                        .includes(query);

                const subtitleMatch =
                    recipe.subtitle
                        .toLowerCase()
                        .includes(query);

                const ingredientMatch =
                    recipe.ingredients.some(
                        ingredient =>
                            ingredient.name
                                .toLowerCase()
                                .includes(query)
                    );

                if (
                    !titleMatch &&
                    !subtitleMatch &&
                    !ingredientMatch
                ) {
                    return false;
                }
            }


            return true;
        });


    renderRecipes();
}


/* =========================================================
   RENDER RECIPES
========================================================= */

function renderRecipes() {

    const grid =
        document.getElementById("recipes-grid");

    const empty =
        document.getElementById("empty-state");

    const count =
        document.getElementById("recipes-count");


    count.textContent =
        `Pokazywanie: ${currentRecipes.length} z ${recipesData.length} przepisów`;


    if (currentRecipes.length === 0) {

        grid.innerHTML = "";

        empty.classList.remove("hidden");

        return;
    }


    empty.classList.add("hidden");


    grid.innerHTML =
        currentRecipes
            .map(createRecipeCard)
            .join("");
}


function createRecipeCard(recipe) {

    const isFavorite =
        favorites.includes(recipe.id);


    return `
        <article
            class="recipe-card bg-white rounded-3xl p-6 border border-sand-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            onclick="openModal('${recipe.id}')"
        >

            <div>

                <div class="flex items-center justify-between mb-4">

                    <span class="text-3xl p-2 bg-sand-100 rounded-2xl group-hover:scale-110 transition-transform">
                        ${recipe.icon}
                    </span>

                    <button
                        onclick="event.stopPropagation(); toggleFavorite('${recipe.id}')"
                        class="p-2 rounded-full border border-sand-200 hover:bg-sand-100 transition text-sand-800"
                        aria-label="Ulubiony przepis"
                    >
                        <i class="${isFavorite ? "fa-solid text-terracotta-500" : "fa-regular"} fa-heart"></i>
                    </button>

                </div>


                <h3 class="font-serif-title font-bold text-xl text-sand-900 group-hover:text-terracotta-600 transition-colors mb-1">
                    ${recipe.title}
                </h3>


                <p class="text-xs text-sand-800 italic mb-4">
                    ${recipe.subtitle}
                </p>


                <div class="flex flex-wrap gap-2 mb-4">

                    <span class="px-2.5 py-1 rounded-lg bg-sand-100 text-sand-800 text-xs font-medium">
                        <i class="fa-regular fa-clock"></i>
                        Czas całkowity: ${recipe.prepTime}
                    </span>

                    <span class="px-2.5 py-1 rounded-lg bg-terracotta-50 text-terracotta-700 text-xs font-medium">
                        ${recipe.category}
                    </span>

                </div>

            </div>


            <div class="pt-4 border-t border-sand-100 flex items-center justify-between text-xs font-semibold text-terracotta-600">

                <span>
                    Zobacz przepis
                </span>

                <i class="fa-solid fa-arrow-right"></i>

            </div>

        </article>
    `;
}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favoriteId => favoriteId !== id
            );

    } else {

        favorites.push(id);
    }


    localStorage.setItem(
        "agata_recipe_favs",
        JSON.stringify(favorites)
    );


    updateFavoritesCount();

    filterAndRender();


    if (
        activeRecipe &&
        activeRecipe.id === id
    ) {
        updateModalFavBtn();
    }
}


function updateFavoritesCount() {

    document.getElementById(
        "fav-count"
    ).textContent = favorites.length;
}


/* =========================================================
   RECIPE MODAL
========================================================= */

function openModal(id) {

    activeRecipe =
        recipesData.find(
            recipe => recipe.id === id
        );


    if (!activeRecipe) {
        return;
    }


    currentServings =
        activeRecipe.servings || 1;

    checkedIngredients.clear();
    checkedSteps.clear();


    document.getElementById(
        "modal-title"
    ).textContent = activeRecipe.title;


    document.getElementById(
        "modal-icon"
    ).textContent = activeRecipe.icon;


    document.getElementById(
        "modal-description"
    ).textContent = activeRecipe.subtitle;


    document.getElementById(
        "modal-category-badge"
    ).textContent = activeRecipe.category;


    document.getElementById(
        "modal-prep-badge"
    ).textContent = activeRecipe.prepTime;


    document.getElementById(
        "modal-servings-count"
    ).textContent = currentServings;


    setupVideo();

    setupTips();

    updateModalFavBtn();

    renderIngredientsList();

    renderInstructionsList();


    document
        .getElementById("recipe-modal")
        .classList.remove("hidden");


    document.body.classList.add(
        "overflow-hidden"
    );
}


function closeModal() {

    document
        .getElementById("recipe-modal")
        .classList.add("hidden");


    document.body.classList.remove(
        "overflow-hidden"
    );


    document.getElementById(
        "modal-video-iframe"
    ).src = "";
}


function setupVideo() {

    const container =
        document.getElementById(
            "modal-video-container"
        );

    const iframe =
        document.getElementById(
            "modal-video-iframe"
        );


    if (activeRecipe.videoUrl) {

        iframe.src =
            activeRecipe.videoUrl;

        container.classList.remove(
            "hidden"
        );

    } else {

        iframe.src = "";

        container.classList.add(
            "hidden"
        );
    }
}


function setupTips() {

    const container =
        document.getElementById(
            "modal-tips-container"
        );

    const list =
        document.getElementById(
            "modal-tips-list"
        );


    if (
        activeRecipe.tips &&
        activeRecipe.tips.length
    ) {

        list.innerHTML =
            activeRecipe.tips
                .map(tip => `<li>${tip}</li>`)
                .join("");

        container.classList.remove(
            "hidden"
        );

    } else {

        container.classList.add(
            "hidden"
        );
    }
}


function updateModalFavBtn() {

    if (!activeRecipe) {
        return;
    }


    const isFavorite =
        favorites.includes(
            activeRecipe.id
        );


    document.getElementById(
        "modal-fav-btn"
    ).innerHTML =
        `<i class="${isFavorite
            ? "fa-solid text-terracotta-500"
            : "fa-regular"
        } fa-heart"></i>`;
}


function toggleFavoriteModal() {

    if (activeRecipe) {
        toggleFavorite(activeRecipe.id);
    }
}


/* =========================================================
   SERVINGS
========================================================= */

function changeServings(delta) {

    const newServings =
        currentServings + delta;


    if (newServings < 1) {
        return;
    }


    currentServings =
        newServings;


    document.getElementById(
        "modal-servings-count"
    ).textContent =
        currentServings;


    renderIngredientsList();
}


function formatAmount(amount) {

    if (Number.isInteger(amount)) {
        return amount;
    }

    return Math.round(amount * 100) / 100;
}


function renderIngredientsList() {

    const list =
        document.getElementById(
            "modal-ingredients-list"
        );


    const baseServings =
        activeRecipe.servings || 1;


    const factor =
        currentServings / baseServings;


    list.innerHTML =
        activeRecipe.ingredients
            .map((ingredient, index) => {

                const amount =
                    ingredient.amount === null
                        ? ""
                        : formatAmount(
                            ingredient.amount * factor
                        );


                const checked =
                    checkedIngredients.has(index);


                return `
                    <li
                        onclick="toggleIngredientCheck(${index})"
                        class="p-3 bg-white rounded-xl border border-sand-200 flex items-center justify-between gap-3 cursor-pointer hover:bg-sand-100 transition shadow-sm"
                    >

                        <div class="flex items-center gap-3">

                            <input
    type="checkbox"
    ${checked ? "checked" : ""}
    onclick="event.stopPropagation(); toggleIngredientCheck(${index})"
    class="w-4 h-4 text-terracotta-600 rounded border-sand-300"
>

                            <span class="text-sm font-medium ${checked
                        ? "checked-item"
                        : "text-sand-900"
                    }">
    ${ingredient.name}
    ${ingredient.optional ? '<span class="text-xs text-sand-800 font-normal"> (opcjonalnie)</span>' : ""}
</span>

                        </div>

                        <span class="text-sm font-bold text-terracotta-700 bg-terracotta-50 px-2 py-1 rounded-lg whitespace-nowrap">
                            ${amount ? `${amount} ` : ""}${ingredient.unit}
                        </span>

                    </li>
                `;
            })
            .join("");
}


function toggleIngredientCheck(index) {

    if (
        checkedIngredients.has(index)
    ) {

        checkedIngredients.delete(index);

    } else {

        checkedIngredients.add(index);
    }


    renderIngredientsList();
}


function resetIngredientChecks() {

    checkedIngredients.clear();

    renderIngredientsList();
}


/* =========================================================
   INSTRUCTIONS
========================================================= */

function renderInstructionsList() {

    const list =
        document.getElementById(
            "modal-instructions-list"
        );


    list.innerHTML =
        activeRecipe.instructions
            .map((step, index) => {

                const checked =
                    checkedSteps.has(index);


                return `
                    <li
                        onclick="toggleStepCheck(${index})"
                        class="p-4 bg-white rounded-2xl border border-sand-200 flex gap-4 cursor-pointer hover:bg-sand-100 transition shadow-sm"
                    >

                        <div
                            class="flex-shrink-0 w-7 h-7 rounded-full ${checked
                        ? "bg-green-600 text-white"
                        : "bg-sand-200 text-sand-800"
                    } font-bold text-xs flex items-center justify-center"
                        >
                            ${checked ? "✓" : index + 1}
                        </div>

                        <div
                            class="text-sm text-sand-900 leading-relaxed ${checked ? "checked-item" : ""
                    }"
                        >
                            ${step}
                        </div>

                    </li>
                `;
            })
            .join("");
}


function toggleStepCheck(index) {

    if (checkedSteps.has(index)) {

        checkedSteps.delete(index);

    } else {

        checkedSteps.add(index);
    }


    renderInstructionsList();
}


/* =========================================================
   COOKING MODE
========================================================= */

function openCookingMode() {

    if (!activeRecipe) {
        return;
    }


    cookingStepIndex = 0;


    document.getElementById(
        "cooking-title"
    ).textContent =
        activeRecipe.title;


    document.getElementById(
        "cooking-total-steps"
    ).textContent =
        activeRecipe.instructions.length;


    updateCookingStep();


    document
        .getElementById("cooking-mode-modal")
        .classList.remove("hidden");
}


function closeCookingMode() {

    document
        .getElementById("cooking-mode-modal")
        .classList.add("hidden");
}


function updateCookingStep() {

    const step =
        activeRecipe.instructions[
        cookingStepIndex
        ];


    document.getElementById(
        "cooking-current-step"
    ).textContent =
        cookingStepIndex + 1;


    document.getElementById(
        "cooking-step-text"
    ).textContent =
        step;


    document.getElementById(
        "cooking-prev-btn"
    ).disabled =
        cookingStepIndex === 0;


    const next =
        document.getElementById(
            "cooking-next-btn"
        );


    if (
        cookingStepIndex ===
        activeRecipe.instructions.length - 1
    ) {

        next.innerHTML =
            `Zakończ <i class="fa-solid fa-check ml-2"></i>`;

    } else {

        next.innerHTML =
            `Następny <i class="fa-solid fa-arrow-right ml-2"></i>`;
    }
}


function nextCookingStep() {

    if (
        cookingStepIndex <
        activeRecipe.instructions.length - 1
    ) {

        cookingStepIndex++;

        updateCookingStep();

    } else {

        closeCookingMode();
    }
}


function prevCookingStep() {

    if (cookingStepIndex > 0) {

        cookingStepIndex--;

        updateCookingStep();
    }
}


/* =========================================================
   TIMER
========================================================= */

function startPresetTimer(minutes) {

    stopTimer();


    timerSecondsLeft =
        minutes * 60;

    timerIsPaused = false;


    document
        .getElementById("global-timer-bar")
        .classList.remove("hidden");


    document.getElementById(
        "timer-label-display"
    ).textContent =
        `Minutnik: ${minutes} min`;


    updateTimerDisplay();


    timerInterval =
        setInterval(() => {

            if (timerIsPaused) {
                return;
            }


            timerSecondsLeft--;

            updateTimerDisplay();


            if (timerSecondsLeft <= 0) {

                stopTimer();

                playChimeSound();

                alert(
                    "⏰ Czas minął! Sprawdź potrawę!"
                );
            }

        }, 1000);
}


function updateTimerDisplay() {

    const minutes =
        Math.floor(
            timerSecondsLeft / 60
        );


    const seconds =
        timerSecondsLeft % 60;


    document.getElementById(
        "timer-time-display"
    ).textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


function pauseResumeTimer() {

    timerIsPaused =
        !timerIsPaused;


    document.getElementById(
        "timer-pause-btn"
    ).innerHTML =
        timerIsPaused
            ? '<i class="fa-solid fa-play"></i>'
            : '<i class="fa-solid fa-pause"></i>';
}


function stopTimer() {

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    timerSecondsLeft = 0;
    timerIsPaused = false;

    document
        .getElementById("global-timer-bar")
        .classList.add("hidden");

    document.getElementById(
        "timer-pause-btn"
    ).innerHTML =
        '<i class="fa-solid fa-pause"></i>';
}


function playChimeSound() {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;


        const context =
            new AudioContext();


        const oscillator =
            context.createOscillator();


        const gain =
            context.createGain();


        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
            587.33,
            context.currentTime
        );


        gain.gain.setValueAtTime(
            0.3,
            context.currentTime
        );


        oscillator.connect(gain);

        gain.connect(context.destination);


        oscillator.start();

        oscillator.stop(
            context.currentTime + 1.2
        );

    } catch (error) {

        console.warn(
            "Audio unavailable:",
            error
        );
    }
}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

function setupKeyboardControls() {

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeCookingMode();

                closeModal();

                return;
            }


            if (
                !document
                    .getElementById(
                        "cooking-mode-modal"
                    )
                    .classList.contains("hidden")
            ) {

                if (event.key === "ArrowRight") {
                    nextCookingStep();
                }

                if (event.key === "ArrowLeft") {
                    prevCookingStep();
                }
            }

        }
    );
}


/* =========================================================
   SECURITY / HTML HELPERS
========================================================= */

function escapeAttribute(value) {

    return value
        .replace(/&/g, "&amp;")
        .replace(/'/g, "&#39;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}