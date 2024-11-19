import "./styles.css";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { aboutPage } from "./about";

homePage();
document.getElementById("home-btn").style.borderBottom = "3px solid var(--main-color)";


document.querySelector("#home-btn").addEventListener("click", () => {
    clearContent();
    homePage();
    clearStyle();
    document.getElementById("home-btn").style.borderBottom = "3px solid var(--main-color)";
});

document.querySelector("#menu-btn").addEventListener("click", () => {
    clearContent();
    menuPage();
    clearStyle();
    document.getElementById("menu-btn").style.borderBottom = "3px solid var(--main-color)";
});

document.querySelector("#about-btn").addEventListener("click", () => {
    clearContent();
    aboutPage();
    clearStyle();
    document.getElementById("about-btn").style.borderBottom = "3px solid var(--main-color)";
});

function clearContent () {
    document.querySelector("#page-container").remove();
}

function clearStyle () {
    document.getElementById("home-btn").removeAttribute("style");
    document.getElementById("menu-btn").removeAttribute("style");
    document.getElementById("about-btn").removeAttribute("style");
}