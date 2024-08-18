
//alert("Programacion Web JavaScrip");

//Variables

let nombre = "Nombre del usuario con var" //la mas recomendada.


//Constantes
let altura = 182;
let apellido = "Apellido del usuario"

console.log(nombre)
console.log(apellido)

let conca = nombre + " " + apellido

console.log(conca)

//seleccionar elementos de la pagina o la hoja HTML
let datos = document.querySelector(".datos");
datos.innerHTML = `
    <hr/>
    <h1>Caja de datos </h1>
    <h2> Mi nombre es: ${nombre} ${apellido}</h2>
`;

//Condicionales

if (altura > 180) {
    datos.innerHTML += "<h1>Eres una persona alta</h1>";
}

//Bucles
for (let year = 2000; year <= 2024; year++) {
    datos.innerHTML += ` <h2>estamos en el año: ${year} </h2>`
    datos.innerHTML += `<hr/>`
}

//Arrays
let nameusers = ["Jose","Carlos","Otros"];
let divnameusers = document.querySelector(".nameusers");
//Se muestran de forma manual 
divnameusers.innerHTML = nameusers[0];

divnameusers.innerHTML = `<h1>Lista Nombres<h1><ul>`

nameusers.forEach(nameusers=>{
    divnameusers.innerHTML += `<li> ${nameusers} </li>`
});

divnameusers.innerHTML += `</ul>`

//Funciones

