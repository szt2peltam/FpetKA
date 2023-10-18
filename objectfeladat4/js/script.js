

let heroes = [ 
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"} ];

let keys = Object.keys(heroes[0]);
const tittleElement = document.getElementById("tittles");
const table = document.querySelector("table");



for (let index = 0; index < keys.length; index++) {
    tittleElement.insertAdjacentHTML("beforeend", `<th>${keys[index]}</th>`)    
}

heroes.forEach(hero => {
    table.insertAdjacentHTML("beforeend",`
    
        <tr>
            <td>${hero.firstName}</td>
            <td>${hero.lastName}</td>
            <td>${hero.job}</td>
        </tr>
    
    `)
});