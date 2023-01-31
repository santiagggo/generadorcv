/* Variables*/
const boton=document.querySelector('#boton')
const foto=document.querySelector('#foto')
const nombre=document.querySelector('#nombre')
const correo=document.querySelector('#correo')
const telefono=document.querySelector('#telefono')
const apellido=document.querySelector('#apellido')
const nacionalidad=document.querySelector('#nacionalidad')
const ciudad=document.querySelector('#ciudad')
const edad=document.querySelector('#edad')


/* Funciones */

const generarCv = async( ) => {
    const url="https://randomuser.me/api/";
    const respuesta= await fetch(url);
    const {results}=await respuesta.json();
    const data= results[0];
   foto.src=data.picture.medium;
   nombre.textContent=data.name.first;
   correo.textContent=data.email;
   telefono.textContent=data.phone;
   apellido.textContent=data.name.last;
   nacionalidad.textContent=data.nat
   edad.textContent=data.dob.age
   ciudad.textContent=data.location.city
   
   
}

boton.addEventListener('click', generarCv);
document.addEventListener("DOMContentLoaded", generarCv)