const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
}

const button = document.getElementById('btn');
const card = document.querySelector('.card');
const hpElement = document.getElementById('hp');
const imgElement = document.getElementById('imgPkm');
const nameElement = document.getElementById('name');
const attackElement = document.getElementById('attack');
const defenseElement = document.getElementById('defense');
const speedElement = document.getElementById('speed');
const typeElement = document.getElementById('type1');


let getPokemon = () => {
    const inputName = document.getElementById('input__pkm').value.toLowerCase()
    if (!inputName.length < 1) {
        const url = `https://pokeapi.co/api/v2/pokemon/${inputName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => generatePokemon(data))
            
    }else{
        alert('Digite um pokemon')
    }
}

let generatePokemon = (data) => {
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.home.front_default;
    const namePkm = data.name
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;

    const themeColor = typeColor[data.types[0].type.name]
    hpElement.textContent = hp;
    imgElement.src = imgSrc;
    nameElement.textContent = namePkm;
    attackElement.textContent = attack;
    defenseElement.textContent = defense;
    speedElement.textContent = speed;

    appendTypes(data.types);
    colorCard(themeColor);
}

let appendTypes = (types) => {
    console.log(types)
    typeElement.textContent = types[0].type.name;
}

let colorCard = (color) => {
    card.style.background = `radial-gradient(
        circle at 50% 0%, ${color} 36%, #ffffff 36%
    )`;

    typeElement.style.backgroundColor = color;
}







button.addEventListener('click', getPokemon)
