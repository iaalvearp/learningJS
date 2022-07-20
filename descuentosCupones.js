const calcular = document.getElementById('calcular');


const hacerDescuento = () => {
    let precio = document.getElementById('precio').value;
    let descuento = document.getElementById('descuento').value;
    let user = 'cupon';
    user = document.getElementById('cupon').value;

    const cupones = {
        'DESCUENTITO': 10,
        'DESCUENTO': 25,
        'DESCUENTAZO': 50
    };

    const cuponUsuario = user.toUpperCase();
    const noCupon = 'No es un cupon valido';
    const resultado = cupones[cuponUsuario] || noCupon;



    let subtotal = precio * (resultado / 100) || precio * (descuento / 100);
    let total = precio - subtotal;
    let resultadoHtml = document.getElementById('resultado');
    resultadoHtml.textContent = `El precio con el descuento es de $${total}`;
};

calcular.addEventListener('click', hacerDescuento);