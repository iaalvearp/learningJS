//Funcion para obtener el promedio usando reduce()
/*const promedio = (lista) => {
    let sum = lista.reduce((acc, next) => acc += next);
     let res = sum / lista.length;
     return res;
   }; */



const addInput = document.getElementById('agregarInput');
const removeInput = document.getElementById('removerInput');
const InputsContainer = document.getElementById('cantidades');
const newInput = () => {
    let container = document.getElementById('cantidades');
    let input = document.createElement(`<input type="number" id="valor_2">
    <br>`);
    container.appendChild(input)
};



addInput.addEventListener('click', newInput);