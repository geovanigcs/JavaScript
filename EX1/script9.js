function criarpessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade  }
}

const pessoa1 = criarpessoa('Geovani', 'Cordeiro', 27);
const pessoa2 = criarpessoa('Angelina', 'Cordeiro', 53);
const pessoa3 = criarpessoa('Matheus', 'Cordeiro', 16);
const pessoa4 = criarpessoa('Mylla', 'Cordeiro', 5);
const pessoa5 = criarpessoa('Elias', 'Martins', 27);

console.log(pessoa1.nome, pessoa2.nome);