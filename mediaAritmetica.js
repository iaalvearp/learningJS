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