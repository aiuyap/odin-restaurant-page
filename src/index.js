import "./styles.css";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { aboutPage } from "./about";

homePage();
currentActive("home-btn");


document.querySelector("#home-btn").addEventListener("click", () => {
    clearContent();
    homePage();
    clearStyle();
    currentActive("home-btn");
});

document.querySelector("#menu-btn").addEventListener("click", () => {
    clearContent();
    menuPage();
    clearStyle();
    currentActive("menu-btn");
});

document.querySelector("#about-btn").addEventListener("click", () => {
    clearContent();
    aboutPage();
    clearStyle();
    currentActive("about-btn");
});

function clearContent () {
    document.querySelector("#page-container").remove();
}

function clearStyle () {
    document.getElementById("home-btn").removeAttribute("style");
    document.getElementById("menu-btn").removeAttribute("style");
    document.getElementById("about-btn").removeAttribute("style");
}

function currentActive (idStr) {
    document.getElementById(idStr).style.borderBottom = "3px solid var(--main-color)";
}