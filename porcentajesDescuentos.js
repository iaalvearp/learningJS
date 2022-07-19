const btn = document.getElementById('calcular');

const precioConDescuento = () => {
    const precio = parseFloat(document.getElementById('precio').value);
    const descuento = parseFloat(document.getElementById('descuento').value);

    const subTotal = precio * (descuento / 100);
    const total = precio - subTotal;

    const msj = `El precio con el descuento es $${total}`;
    alert(msj);
}


btn.addEventListener('click', precioConDescuento);