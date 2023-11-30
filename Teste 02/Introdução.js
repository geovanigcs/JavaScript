console.log('Meu nome é "Geovani". Estou apredendo JavaScript às 10 da manhã.');
console.log('Meu, nome é ',10,'dsaasfas')
let nome2 = 'Geovani'


console.log(nome2,'nasceu em 1996.')
console.log('Em 2023', nome2,'conheceu Dayra.')
console.log(nome2,'casou - se com Dayra em 2030.')
console.log('Dayra teve um filho de',nome2,'em 2035.')
console.log('O filho de',nome2,'se chama Bryan.')
//Não podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos
//Não pode começar o nome de uma constante com um número
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não pode modificar o valor de uma constante
//Não utilize VAR. utilize CONST



//Geovani Cordeiro tem 27 anos, pesa 68 kg, tem 1.70M de altura e seu IMC é de 20.25
const nome = 'Geovani';
const sobrenome = 'Cordeiro';
const idade = 27;
const peso = 68;
const altura = 1.70;
let imc; //peso / altura * altura
let anodenascimento;
imc = peso/(altura*altura);
console.log(imc.toFixed(2));
anodenascimento = 1996 - idade;
console.log(nome, sobrenome, 'tem', idade,'anos, pesa', peso,'kg.');
console.log('Tem', altura, 'de altura e seu IMC é de', imc.toFixed(2));
console.log(nome, 'nasceu em', anodenascimento,'.');


//String (texto), number (número), underfined(Variável sem valor), null(Não aponta para nada, desconfigurando uma variável), boolean(true or false) and symbol.
const nome0 = 'Luiz'; //String
const nome1 = "Luiz"; //String
const nome3 = `Luiz`; //String
const num1 = 10; //Number
const num2 = 10.52; //Number
let nomeAluno; //Underfined -> Não Aponta para local algum na memória
const sobrenomealuno = null; // Nulo -> Não aponta para local algum na memória
const aprovado = false; //Boolean = True, False. (Lógico)

let a = 2;
const b = a;
console.log(a, b); //2,2
a = 3;
console.log(a, b); //3,2

/**
 * Aritméticos
 * + Adição / Concatenação
 * - / *
 * Precedência
 * ()
 * **
 * * / %
 * + -
 */

const num3 = 5;
const num4 = 2;
const num5 = 10;
console.log((num3 + num4) * num5);
let contador = 10
contador++; //Incremento
console.log(contador);
contador--; //Decremento
console.log(contador);
/**  Ao invès de fazer isso vv
const passo = 2;
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
*/
//Faça isso VV (Operadores de atribuição)
contador += 2;
contador += 2;
contador += 2;
console.log(contador);
// NaN - Not a Number
const num6 = 10;
const num7 = `Geovnai`;
console.log(num6 * num7);