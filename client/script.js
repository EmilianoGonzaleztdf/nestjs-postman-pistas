let btnMostrar  = document.getElementById('btn-mostrar'); // 
btnMostrar.addEventListener('click', mostrarDatos); // genero
let btnCrear = document.getElementById('btn-crear'); //
btnCrear.addEventListener('click', crearPista);

async function mostrarDatos(){
  let res = await fetch('api/pista/pistas'); // consumo  la api 
  let data = await res.json(); // convierto "data" a json
  document.getElementById('idPista').innerHTML = data.pistas; // inserto mostrar pista en el DIV
  console.log(data.pistas); // muestro por consola "data"(json)
}

//mostrarDatos();

async function crearPista(){
  let datos = {
    "identificador": document.getElementById('identificador').value,
    "titulo": document.getElementById('titulo').value,
    "duracion": document.getElementById('duracion').value,
    "interprete": document.getElementById('interprete').value,
    "fecha": document.getElementById('fecha').value
}
  res = await fetch('api/pista/crear',{
    method: 'POST',
    body:datos
  });

  let data = await res.json();
  console.log(data);


}