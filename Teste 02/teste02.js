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
