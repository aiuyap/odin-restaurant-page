export const menuPage = () => {
    const divContent = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    divContent.appendChild(menuContainer);

    const h1 = document.createElement("h1");
    h1.textContent = "Burger Menu";
    menuContainer.appendChild(h1);

    const menu = document.createElement("div");
    menu.id = "menu";
    menuContainer.appendChild(menu);

    generateH3().header("Special Burger");
    generateH3().header("Single");
    generateH3().header("Double");
    generateH3().item("Cheeseburger");
    generateH3().item("$5");
    generateH3().item("$10");
    generateH3().item("The Hurt Burger");
    generateH3().item("$6");
    generateH3().item("11");
    generateH3().item("Bacon Cheeseburger");
    generateH3().item("$7");
    generateH3().item("$12");
    generateH3().item("Classic Cheeseburger");
    generateH3().item("$5");
    generateH3().item("$10");
    generateH3().item("Salmon Burger");
    generateH3().item("$7");
    generateH3().item("$12");
    generateH3().item("Seafood Burger");
    generateH3().item("$6");
    generateH3().item("$11");
    
}

function generateH3 () {
    const h3element = document.createElement("h3");
    const h3clone = h3element.cloneNode();
    const menu = document.querySelector("#menu");

    function header (str) {
        h3clone.textContent = str;
        h3clone.classList.add("menu-header");
        menu.append(h3clone);
    }

    function item (str) {
        h3clone.textContent = str;
        menu.append(h3clone);
    }

    return {item, header};
}