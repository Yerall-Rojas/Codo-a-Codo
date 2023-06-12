const ticket=200;

let descEstu=0.80;
let descTrai=0.50;
let descJun=0.15;

const cantidad=document.querySelector('#Cantidad');
const categoria=document.querySelector('#Categoria');
const botonCalcular=document.querySelector('#Resumen');
const botonBorrar=document.querySelector('#Borrar');
const parrafo=document.querySelector('#Total');


function totalpagar(){

    let totalValor= parseInt(cantidad.value)*ticket;

    if(categoria.value==2){
        totalValor= totalValor-(totalValor*descEstu);
    }
    else if(categoria.value==3){
        totalValor=totalValor-(totalValor*descTrai);
    }
    else if(categoria.value==4){
        totalValor=totalValor-(totalValor*descJun);
    }

    parrafo.innerHTML = `Total a pagar: $ ${totalValor}`;

}

botonCalcular.addEventListener('click',totalpagar);

botonBorrar.addEventListener('click', ()=> parrafo.innerHTML="Total a pagar: ")




