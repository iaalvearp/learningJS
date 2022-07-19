const btn = document.getElementById('calcular');

const precioConDescuento = () => {
    const precio = parseFloat(document.getElementById('precio').value);
    const descuento = parseFloat(document.getElementById('descuento').value);


    const subTotal = precio * (descuento / 100);
    const total = precio - subTotal;


    const mostrarResultado = document.getElementById('resultado');
    mostrarResultado.innerText = `El precio con el descuento es $${total}`;
}


btn.addEventListener('click', precioConDescuento);