export const aboutPage = () => {
    const lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum obcaecati itaque, voluptatem aspernatur eveniet consequatur animi a modi impedit? Itaque, reiciendis! Distinctio ut vel ipsa explicabo reprehenderit sunt omnis quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum eligendi perferendis, quo totam beatae culpa nobis iusto, voluptas ipsa perspiciatis consequatur. Quas in saepe velit sit ipsum fugit consectetur eum.";
    const contentContainer = document.querySelector("#content");
    const pageContainer = createElement("div", contentContainer, undefined, "page-container");
    const flexDiv = createElement("div", pageContainer, undefined, "flex-div");
    const aboutUsContainer = createElement("div", flexDiv, undefined, "about-us-container");
    createElement("h1", aboutUsContainer, "About Us");
    createElement("p", aboutUsContainer, lorem);
    createElement("h1", aboutUsContainer, "Contact Us");
    const contactDiv = createElement("div", aboutUsContainer);
    createElement("p", contactDiv, "Email: example@email.com");
    createElement("p", contactDiv, "Phone: (666) 999-6969");
    createElement("p", contactDiv, "Address: 132 My Street, Kingston, New York 12401");

}

function createElement (element, appendFrom, text, idArg) {
    const x = document.createElement(element);
    const newElement = x.cloneNode();
    appendFrom.appendChild(newElement);
    
    if (idArg !== undefined) {
        newElement.id = idArg;
    }
    if (text !== undefined) {
        newElement.textContent = text;
    } 

    return newElement
}