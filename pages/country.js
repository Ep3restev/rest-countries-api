const dlMode = document.querySelector("#switch");
const logo = document.querySelector(".logo");
const header = document.querySelector("header");
const headerContainer = document.querySelector(".header_container");
const searchCountry = document.querySelector("#search_country");
const container = document.querySelector(".container");


function changeTheme(){             
    const box = document.querySelectorAll(".box");
    if(dlMode.checked == true){
        //Light mode.
        document.body.style.backgroundColor = "#F2F2F2";
        document.body.style.color = "black";
        logo.style.color = "black";
        header.style.backgroundColor = "#FFFFFF"
        headerContainer.style.backgroundColor = "#FFFFFF"
    }if(dlMode.checked == false){
        //Dark mode.
        document.body.style.color = "white";
        document.body.style.backgroundColor = "#202C36";
        logo.style.color = "white";
        header.style.backgroundColor = "#2B3844"
        headerContainer.style.backgroundColor = "#2B3844"
    }
}




function renderCountryDetails(name,countryFlag, populationC, capitalC, regionC, officialName, subRegion, tpDomain, currencies, lang){
    const flag = document.createElement("img");
    const details = document.createElement("div");
    const countryName = document.createElement("h2");
    const ofName = document.createElement("li");
    const sRegion = document.createElement("li");
    const tDomain = document.createElement("li");
    const currencie = document.createElement("li");
    const language = document.createElement("li");
    const ul = document.createElement("ul");
    const population = document.createElement("li");
    const region = document.createElement("li");
    const capital = document.createElement("li");
    const countryDetails = document.createElement("div");
    flag.src = countryFlag;
    flag.style.width = "100%";
    flag.style.borderRadius = "10px";
    details.classList.add("details");
    countryName.textContent = `${name}`;
    ofName.innerHTML = `<b>Native Name:</b>  ${officialName}`
    population.innerHTML = `<b>Population:</b>  ${populationC}`
    region.innerHTML = `<b>Region:</b>  ${capitalC}`
    sRegion.innerHTML = `<b>Sub Region:</b>  ${subRegion}`
    capital.innerHTML = `<b>Capital:</b>  ${regionC}`
    tDomain.innerHTML = `<b>Top Level Domain:</b> ${tpDomain}`
    currencie.innerHTML = `<b>Currencies:</b>  ${currencies}`
    language.innerHTML = `<b>Languages: </b> ${lang}`
    container.appendChild(flag);
    ul.appendChild(population)
    ul.appendChild(region)
    ul.appendChild(capital)
    ul.appendChild(ofName)
    ul.appendChild(sRegion)
    ul.appendChild(tDomain)
    ul.appendChild(currencie)
    ul.appendChild(language)
    details.appendChild(countryName);
    details.appendChild(ul)
    details.appendChild(countryDetails);
    container.appendChild(details);
}


window.onload = function(){
 let c2 =  localStorage.getItem("countryData");
 let country= JSON.parse(c2)
 console.log(country.languages[0].name)
 renderCountryDetails(country.name, country.flag, country.population, country.capital, country.region, country.nativeName, country.subregion,country.topLevelDomain, country.currencies[0].name,country.languages[0].name)

}

 
