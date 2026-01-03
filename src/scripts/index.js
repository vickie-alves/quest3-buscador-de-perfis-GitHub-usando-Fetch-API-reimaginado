import { fetchUserData, fetchEventData, fetchReposData } from "./services/fetch.js";
import { userLayout } from "./render/render.js";

const botao = document.getElementById("botao-pesquisa");
const barraPesquisa = document.getElementById("barra-pesquisa");

botao.addEventListener("click", async () => {
    const username = barraPesquisa.value.trim();
    const [userData, eventData, reposData] = await Promise.all([
        fetchUserData(username),
        fetchEventData(username),
        fetchReposData(username)
    ]);
    userLayout(userData, eventData, reposData);
});