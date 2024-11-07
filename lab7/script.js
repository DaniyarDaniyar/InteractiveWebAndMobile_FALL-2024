let firstHero = []
let secondHero = []

let url = "https://akabab.github.io/superhero-api/api/all.json"
let heroTitle = document.getElementById("HeroTitle")
let herodesc = document.getElementById("Desc")
let heroimg = document.getElementById("HeroImg")
let heroInt = document.getElementById("Intelligence1")
let heroDur = document.getElementById("Durability1")
let heroStrength = document.getElementById("Strength1")
let heroSpeed = document.getElementById("Speed1")
let heroPower = document.getElementById("Power1")
let heroCombat = document.getElementById("Combat1")


let hero2Title = document.getElementById("Hero2Title")
let hero2desc = document.getElementById("Desc2")
let hero2img = document.getElementById("Hero2Img")
let hero2Int = document.getElementById("Intelligence2")
let hero2Dur = document.getElementById("Durability2")
let hero2Strength = document.getElementById("Strength2")
let hero2Speed = document.getElementById("Speed2")
let hero2Power = document.getElementById("Power2")
let hero2Combat = document.getElementById("Combat2")

let CompareResult = document.getElementById("SummaryComparison")

let button = document.getElementById("randomHero")
button.addEventListener("click", fetchAllHeroes);

let CompareButton = document.getElementById("compareHeroes")
CompareButton.addEventListener("click", CompareHeroes)

savedHeroes = [];
async function fetchAllHeroes(){
    try{
    let response = await fetch(url)
    let heroes = await response.json()
    savedHeroes = heroes;

    let randomIndex = Math.floor(Math.random() * 562)
    let randomIndex2 = Math.floor(Math.random() * 562)
    firstHero = heroes[randomIndex]
    secondHero = heroes[randomIndex2]

    heroTitle.innerText = firstHero.name;
    herodesc.innerText = firstHero.biography.firstAppearance;
    heroimg.setAttribute("src", firstHero.images.md) 
    heroCombat.innerText = "Combat: " + firstHero.powerstats.combat;
    heroSpeed.innerText = "Speed: " + firstHero.powerstats.speed;
    heroInt.innerText = "Intelligence: " + firstHero.powerstats.intelligence;
    heroDur.innerText = "Durability: " + firstHero.powerstats.durability;
    heroPower.innerText = "Power:" + firstHero.powerstats.power;
    heroStrength.innerText = "Strength: " + firstHero.powerstats.strength;
    
    hero2Title.innerText = secondHero.name;
    hero2desc.innerText = secondHero.biography.firstAppearance;
    hero2img.setAttribute("src", secondHero.images.md) 
    hero2Combat.innerText = "Combat: " + secondHero.powerstats.combat;
    hero2Speed.innerText = "Speed: " + secondHero.powerstats.speed;
    hero2Int.innerText = "Intelligence: " + secondHero.powerstats.intelligence;
    hero2Dur.innerText = "Durability: " + secondHero.powerstats.durability;
    hero2Power.innerText = "Power:" + secondHero.powerstats.power;
    hero2Strength.innerText = "Strength: " + secondHero.powerstats.strength;

    CompareResult.innerText = "Comparison Summary";

    }
    catch{
        console.log('error');
    }
}
function CompareHeroes(){
    if (!firstHero || !secondHero) {
        console.log("Heroes not loaded yet.");
        return;
    }
    sum1 = firstHero.powerstats.combat + firstHero.powerstats.durability + firstHero.powerstats.strength + firstHero.powerstats.speed + firstHero.powerstats.intelligence + firstHero.powerstats.power;
    sum2 = secondHero.powerstats.combat + secondHero.powerstats.durability + secondHero.powerstats.strength + secondHero.powerstats.speed + secondHero.powerstats.intelligence + secondHero.powerstats.power;;

    if(sum1 > sum2){
        CompareResult.innerText = firstHero.name + " win!!";
    }
    else if(sum2>sum1){
        CompareResult.innerText = secondHero.name + " win!!";
    }
    else{
        CompareResult.innerText = "They are equal";
    }
}

addEventListener("onload", fetchAllHeroes());