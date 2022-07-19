
const precioConDescuento = (precio, descuento) => {
    precio = document.getElementById('precio').value;
    descuento = document.getElementById('descuento').value;

    const total = precio * (descuento / 100);
    return total;
}

const btn = document.getElementById('calcular').addEventListener('click', precioConDescuento);