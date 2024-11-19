import burger from "./images/burger.png";

export const initialPageLoad = (() => {
    const divContent = document.querySelector("#content");
    const h1Title = document.createElement("h1");

    divContent.appendChild(h1Title);
    h1Title.textContent = "Hello! I am a Restaurant";

    const divContainer = document.createElement("div");
    divContainer.id = "container";
    divContent.appendChild(divContainer);

    const image = document.createElement("img");
    image.src = burger;
    divContainer.appendChild(image);

    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat aperiam dolore sequi? Quod ipsam quia, nobis vitae alias esse officiis provident suscipit maxime magni quo beatae, temporibus, ducimus numquam!";
    divContainer.appendChild(para);

})();