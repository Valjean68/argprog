const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.png" },
  { name: "Voluptatem", image: "images/coffee2.png" },
  { name: "Explicabo", image: "images/coffee3.png" },
  { name: "Rchitecto", image: "images/coffee4.png" },
  { name: " Beatae", image: "images/coffee5.png" },
  { name: " Vitae", image: "images/coffee6.png" },
  { name: "Inventore", image: "images/coffee7.png" },
  { name: "Veritatis", image: "images/coffee8.png" },
  { name: "Accusantium", image: "images/coffee9.png" },
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

let inputs=document.querySelector(".inputs")

function submitinputs(){
  let name=document.getElementById('fname')
  let interes=document.getElementById('habilidad')
  localStorage.setItem("name", name.value);
  localStorage.setItem("interes", interes.value);const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.png" },
  { name: "Voluptatem", image: "images/coffee2.png" },
  { name: "Explicabo", image: "images/coffee3.png" },
  { name: "Rchitecto", image: "images/coffee4.png" },
  { name: " Beatae", image: "images/coffee5.png" },
  { name: " Vitae", image: "images/coffee6.png" },
  { name: "Inventore", image: "images/coffee7.png" },
  { name: "Veritatis", image: "images/coffee8.png" },
  { name: "Accusantium", image: "images/coffee9.png" },
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

let inputs=document.querySelector(".inputs")

function submitinputs(){
  let name=document.getElementById('fname')
  let interes=document.getElementById('habilidad')
  localStorage.setItem("name", name.value);
  localStorage.setItem("interes", interes.value);
  inputs.innerHTML='Gracias por la confianza, el esfuerzo trae su recompensa'
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  let x= position.coords.latitude  
  let y= position.coords.longitude;
  console.log(x,y)
  uluru={ lat: x, lng: y }
  initMap()
}

 let uluru = { lat: -34.616387, lng: -58.384439 };   
  function initMap() {
  // The location of Uluru
 
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;



if(localStorage.getItem("name")){
  inputs.innerHTML="Bienvenido "+localStorage.getItem("name")+", mejoremos los proyectos de "+localStorage.getItem("interes");;
}

  inputs.innerHTML='Gracias por la confianza, el esfuerzo trae su recompensa'
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  let x= position.coords.latitude  
  let y= position.coords.longitude;
  console.log(x,y)
  uluru={ lat: x, lng: y }
  initMap()
}

 let uluru = { lat: -34.616387, lng: -58.384439 };   
  function initMap() {
  // The location of Uluru
 
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;



if(localStorage.getItem("name")){
  inputs.innerHTML="Bienvenido "+localStorage.getItem("name")+", mejoremos los proyectos de "+localStorage.getItem("interes");;
}
