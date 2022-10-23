const dlMode = document.querySelector("#switch");
const logo = document.querySelector(".logo");
const header = document.querySelector("header");
const headerContainer = document.querySelector(".header_container");
const searchCountry = document.querySelector("#search_country");
const container = document.querySelector(".container");
let c = 0; //Contador para IDs.

//Arreglar función cambio de tema para objectos asíncronos.
 //Función que cambia el tema de la página.


function changeTheme(){             
    const box = document.querySelectorAll(".box");
    if(dlMode.checked == true){
        //Light mode.
        document.body.style.backgroundColor = "#F2F2F2";
        logo.style.color = "black";
        header.style.backgroundColor = "#FFFFFF"
        headerContainer.style.backgroundColor = "#FFFFFF"
        searchCountry.style.backgroundColor = "#FFFFFF";
        box.forEach(boxes => {
           boxes.style.backgroundColor ="#FFFFFF";
           boxes.lastChild.style.color = "Black";
        })
    }if(dlMode.checked == false){
        //Dark mode.
        document.body.style.backgroundColor = "#202C36";
        logo.style.color = "white";
        header.style.backgroundColor = "#2B3844"
        headerContainer.style.backgroundColor = "#2B3844"
        searchCountry.style.backgroundColor = "#2B3844";
        box.forEach(boxes => {
            boxes.style.backgroundColor ="#2B3844";
            boxes.lastChild.style.color = "White";
        })
    }
}


const apiUrl = 'https://restcountries.com/v2/all';

const getApiResponse = url =>
    fetch(url)
        .then(r => r.json())
        .then(data => Object.values(data))



function appendDataToDom(name, regionC, populationC, flagC, capitalC){
    const box = document.createElement("div");
    const countryName = document.createElement("h4")
    const facts = document.createElement("div");
    const flag = document.createElement("img");
    const ul = document.createElement("ul");
    const population = document.createElement("li");
    const region = document.createElement("li");
    const capital = document.createElement("li");
    flag.classList.add("flag");
    countryName.classList.add("name");
    facts.classList.add("facts");
    box.classList.add("box");
    box.id = `${c}`
    flag.src = flagC;
    countryName.textContent = name;
    population.innerText = `Population: ${populationC}`
    region.innerText = `Capital: ${capitalC}`
    capital.innerText = `Region: ${regionC}`
    facts.appendChild(countryName)
    facts.appendChild(ul);
    ul.appendChild(population);
    ul.appendChild(region);
    ul.appendChild(capital);
    box.appendChild(flag)
    box.appendChild(facts)
    container.appendChild(box)
    c+=1;
}



async function getCountries(){
    const data = await getApiResponse(apiUrl)
    for(let x of data){
        appendDataToDom(x.name, x.region, x.population, x.flag, x.capital);
    }
    const box = document.querySelectorAll(".box");
    
    changeTheme() //Llamo a cambio de objeto para actualizar las cajas que contienen los países.
    box.forEach(boxes => {
        console.log(boxes.lastChild)
        boxes.addEventListener("click", (e)=>{
            let country = e.currentTarget.id;
            let countryData = data[country];
            localStorage.setItem("countryData", JSON.stringify(countryData));
            window.open("./pages/country.html")
        })
    })
}



getCountries()