function getAndSort() {
    let numberOfCategories = parseInt(prompt("How many categories would you like to enter (between 2 and 4)?"));
    while (isNaN(numberOfCategories) || numberOfCategories < 2 || numberOfCategories > 4) {
        numberOfCategories = parseInt(prompt("Invalid input. Please enter a number between 2 and 4"));
    }

    let categories = [];
    let itemsByCategory = {};

    for (let i = 0; i < numberOfCategories; i++) {
        let category = prompt(`Enter category ${i + 1} of ${numberOfCategories}:`);
        categories.push(category);
        itemsByCategory[category] = [];
    }

    for (let category of categories) {
        let item = prompt(`Enter one item for category ${category}:`);
        itemsByCategory[category].push(item);
    }

    let sortedItemsByCategory = {};
    for (let category of categories) {
        sortedItemsByCategory[category] = [...itemsByCategory[category]].sort();
    }

    let displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = '';

    for (let category of categories) {
        let categoryItems = itemsByCategory[category];
        let sortedCategoryItems = sortedItemsByCategory[category];

        let categoryHeader = document.createElement('h2');
        categoryHeader.textContent = `Category: ${category}`;
        displayArea.appendChild(categoryHeader);

        let itemList = document.createElement('ul');
        for (let item of categoryItems) {
            let listItem = document.createElement('li');
            listItem.textContent = item;
            itemList.appendChild(listItem);
        }
        displayArea.appendChild(itemList);

        let sortedItemList = document.createElement('ul');
        for (let item of sortedCategoryItems) {
            let listItem = document.createElement('li');
            listItem.textContent = item;
            sortedItemList.appendChild(listItem);
        }
        displayArea.appendChild(sortedItemList);
    }
}

document.getElementById('sortButton').addEventListener('click', getAndSort);
