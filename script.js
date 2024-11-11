import { pokemons } from './pokemons.js';

console.log(pokemons[0]);

const box=document.getElementById("box")

function pokimonView(data) {

    box.innerHTML="";

    data.forEach(e => {
        const div = document.createElement("div");
        div.classList.add("pokimon");
        div.innerHTML=`
        <h2>${e.name}</h2>
        <img src="${e.img}" alt="pokemon-1">
        <button class="btn2">${e.type}</button>
        <h2>Candy count: ${e.candy_count}</h2>
        <h3>${e.weight}</h3>
        <h3>${e.weaknesses}</h3>
        <h4 class="clock">${e.spawn_time}</h4>
        <h4 class="id">${e.num}</h4>
        `

        box.appendChild(div)
    });
}
pokimonView(pokemons)