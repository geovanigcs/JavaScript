/*Entre 0 - 11 = Bom dia
Entre 12 - 17 = Boa tarde
Entre 18 - 23 = Boa noite*/


// Operadores de comparação
// > maior que
// >= maior que ou igual a
// < menor que
// <= menor que ou igual a
// == igualdade (valor)
// === igualdade estrita (valor e tipo(ex: string or number))
// != diferente (valor)
// !== diferente estrito (valor e tipo(ex: string or number))

// Operadores lógicos
// && -> AND -> E
// || -> OR -> OU
// ! -> NOT -> NÃO

const hora = 12;
if (hora <= 0 && hora <= 11) {
    console.log ('Bom dia');
} else if (hora >=  12 && hora <= 17) {
    console.log ('Boa tarde');
}
else if (hora >= 18 && hora <= 23)  {
    console.log('Boa noite');
} else {
    console.log('Olá'); 
}