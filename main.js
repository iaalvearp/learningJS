// Calcular el perímetro de un cuadrado se hace con la fórmula P = l1 + l2 + l3 + l4 ó P = l1 * 4;
// Calcular el área de un cuadrado se hace con la fórmula a = l * l;
// Calcular el perímetro de un triángulo se hace con la fórmula P = l1 + l2 +l3;
// Calcular el área de un triángulo se hace con la fórmula a = b(base) * h(altura);
// La circunferencia o Perímetro de un círculo se obtiene conociendo su radio (medida que se obtiene desde el centro del círculo hasta el borde) ó diametro * PI;
// El diámetro del círculo es el radio * 2 ó d = r * 2;
// Calcular el área del círculo con la fórmula a(área) = r2(radio al cuadrado) * PI(3.1416);

console.group(`Cuadrados`);
// Función para obtener perímetro del cuadrado
let ladoCuadrado = 5;

const perimetroCuadrado = lado => console.log(`Si el lado del cuadrado es de ${lado}cm, entonces, el perímetro del cuadrado es ${lado * 4}cm`);

perimetroCuadrado(ladoCuadrado);

// Función para calcular el área de un cuadrado
const areaCuadrado = lado => console.log(`Si el lado del cuadrado es de ${lado}cm, entonces, el área del cuadrado es ${lado ** 2}cm^2. `);

areaCuadrado(ladoCuadrado);
console.groupEnd();

console.group(`Triángulos`);
// Función para calcular perímetro de un triángulo
let ladoTriangulo1 = 6;
let ladoTriangulo2 = 6;
let base = 4;

const perimetroTriangulo = (lado1, lado2, lado3) => console.log(`Si el lado 1 es ${lado1}, el lado 2 es ${lado2} y el lado 3 es ${lado3}. Entonces el perímetro del triángulo es ${lado1 + lado2 + lado3}.`);

perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, base);

// Función para calcular área del triángulo
let alturaTriangulo = 5.5;

const areaTriangulo = (base, altura) => console.log(`Si la base del triángulo es de ${base}cm y la altura es de ${altura}cm, entonces, el área del triángulo es ${(base * altura) / 2}cm^2.`);

areaTriangulo(base, alturaTriangulo);
console.groupEnd();

console.group(`Círculos`);
// Función para calcular el diametro de un círculo
let radioCirculo = 4;
const PI = 3.1416;

const diametro = radio => console.log(`Si radio del círculo es de ${radio}, el diametro es de ${radio * 2}.`);
diametro(radioCirculo);

const circunferencia = radio => console.log(`Si el radio del círculo es de ${radio}, entonces la circunferencia es de ${(radio * 2) * PI}.`);
circunferencia(radioCirculo, PI);

const areaCirculo = radio => console.log(`Si el radio del círculo es de ${radio}, entonces el area es de ${(radio ** 2) * PI}.`);
areaCirculo(radioCirculo);

console.groupEnd();