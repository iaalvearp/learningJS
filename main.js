// Calcular el perímetro de un cuadrado se hace con la fórmula P = l1 + l2 + l3 + l4 ó P = l1 * 4;
// Calcular el área de un cuadrado se hace con la fórmula a = l * l;
// Calcular el perímetro de un triángulo se hace con la fórmula P = l1 + l2 +l3;
// Calcular el área de un triángulo se hace con la fórmula a = b(base) * h(altura);
// La circunferencia o Perímetro de un círculo se obtiene conociendo su radio (medida que se obtiene desde el centro del círculo hasta el borde) ó diametro * PI;
// El diámetro del círculo es el radio * 2 ó d = r * 2;
// Calcular el área del círculo con la fórmula a(área) = r2(radio al cuadrado) * PI(3.1416);

console.group(`Cuadrados`);
// Función para obtener perímetro del cuadradolet ladoCuadrado = 5;
const perimetroCuadrado = () => {
    const input = document.getElementById('ladoCuadrado');
    const value = input.value;
    let lado = parseInt(value);
    alert(`Si el lado del cuadrado es de ${lado}cm, entonces, el perímetro del cuadrado es ${lado * 4}cm`);
}

// Función para calcular el área de un cuadrado
const areaCuadrado = () => {
    const input = document.getElementById('ladoCuadrado');
    const value = input.value;
    let lado = parseFloat(value);
    alert(`Si el lado del cuadrado es de ${lado}cm, entonces, el área del cuadrado es ${lado ** 2}cm^2. `);
}

console.groupEnd();

console.group(`Triángulos`);
// Función para calcular perímetro de un triángulo
const perimetroTriangulo = () => {
    const lado1 = parseFloat(document.getElementById('ladoTriangulo1').value);
    const lado2 = parseFloat(document.getElementById('ladoTriangulo2').value);
    const base = parseFloat(document.getElementById('baseTriangulo').value);
    alert(`Si el lado 1 es ${lado1}, el lado 2 es ${lado2} y el lado 3 es ${base}. Entonces el perímetro del triángulo es ${lado1 + lado2 + base}.`);
}

// Función para calcular área del triángulo
const areaTriangulo = () => {
    const altura = parseFloat(document.getElementById('alturaTriangulo').value);
    const base = parseFloat(document.getElementById('baseTriangulo').value);
    alert(`Si la base del triángulo es de ${base}cm y la altura es de ${altura}cm, entonces, el área del triángulo es ${(base * altura) / 2}cm^2.`);
}



console.groupEnd();

console.group(`Círculos`);
// Función para calcular el diametro de un círculo
let radioCirculo = 4;
const PI = 3.1416;

const diametro = () => {
    const radioCirculo = parseFloat(document.getElementById('radioCirculo'));
    alert(`Si radio del círculo es de ${radioCirculo}, el diametro es de ${radioCirculo * 2}.`);
};

const circunferencia = () => {
    const radioCirculo = parseFloat(document.getElementById('radioCirculo'));
    const diametro = radioCirculo * 2;
    alert(`Si el radio del círculo es de ${radioCirculo}, entonces la circunferencia es de ${diametro * PI}.`);
};

const areaCirculo = () => {
    const radioCirculo = parseFloat(document.getElementById('radioCirculo'));
    alert(`Si el radio del círculo es de ${radioCirculo}, entonces el area es de ${(radioCirculo ** 2) * PI}.`);
};

console.groupEnd();

// Traer el HTML al JS para interactuar con el cliente

