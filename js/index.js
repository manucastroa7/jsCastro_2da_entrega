let btnCargar = document.querySelector ('.btnCargar')

btnCargar.onclick = (e) => {
    e.preventDefault()
    let nombre = document.querySelector("#nombreTxt").value;
    let apellido = document.querySelector ("#apellidoTxt").value;
    let edad = document.querySelector ("#edadTxt").value;
    let cantPax = document.querySelector ("#cantPaxTxt").value;
    let cantNoches = document.querySelector ("#cantNochesTxt").value;

    localStorage.setItem ("Nombre", nombre)
    localStorage.setItem ("Apellido", apellido)
    localStorage.setItem ("Edad", edad)
    localStorage.setItem ("CantidadPax", cantPax)
    localStorage.setItem ("CantidadNoches", cantNoches)

    document.querySelector("#nombreTxt").value = "";
    document.querySelector("#apellidoTxt").value = "";
    document.querySelector("#edadTxt").value = "";
    document.querySelector("#cantPaxTxt").value = "";
    document.querySelector("#cantNochesTxt").value = "";

    let name = localStorage.getItem("Nombre")
    let lastname = localStorage.getItem("Apellido")
    let age = localStorage.getItem("Edad")
    let pax = localStorage.getItem("CantidadPax")
    let nights = localStorage.getItem("CantidadNoches")

    document.getElementById("nom").innerHTML = name;
    document.getElementById("ape").innerHTML = lastname;
    document.getElementById("ed").innerHTML = age;
    document.getElementById("canPax").innerHTML = pax;
    document.getElementById("canNoches").innerHTML = nights;
};

const habitaciones = [

    {
        id:1,
        nombreHab: "Economica",
        imgSrc: "media/img/Economica.jpeg",
        valor: 5000,
    },

    {
        id:2,
        nombreHab: "Standard",
        imgSrc:"media/img/Standard.png",
        valor: 7500,
    },
    
    {
        id:3,
        nombreHab: "Premium",
        imgSrc:"media/img/Premium.jpeg",
        valor: 10000,
    }
]

let container = document.querySelector(".contenedorHabitaciones")

let article = ""


for (habitacion of habitaciones){
    article+= 
    `<article class="boxHabitacion">
        <h3 class="nombreHabitacion">${habitacion.nombreHab}</h3>
        <img src = "${habitacion.imgSrc}" class="img-hab">
        <p class="descripcionHabitacion">El valor de la habitación por Noche es de ${habitacion.valor}</p>
    </article>`
}

container.innerHTML +=article

const formatoJSON = JSON.stringify (habitaciones[0])
console.log(formatoJSON)


localStorage.setItem('habitaciones', formatoJSON)

let recuperoStorage = JSON.parse (localStorage.getItem('habitaciones'))
console.log(recuperoStorage)








    

