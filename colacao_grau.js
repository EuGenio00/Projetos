/* Em uma colação de grau, 30 alunos do curso Técnico de Informática se formaram. Como é necessário fazer uma fila para que os formandos recebam seu diploma, foi indicado que ao informar o nome, o aluno também teria que informar a idade. Caso tenha menos de 30 anos, colocar seu nome no início da fila, caso tenha 30 ou mais, inserir o nome do formando no final da fila. */

let nomes = []
let idade = []
let addNome
let addIdade 
let nomeInferior30 = []
let nomeSuperior30 = []

// Faça a condição
for(i=0; i < 30; i++){

    addNome = (prompt(`Digite o nome do ${i + 1}º aluno: `))
    nomes.push(addNome)

    addIdade = Number(prompt(`Digite a idade: `))
    idade.push(addIdade)

    if(addIdade < 30){
        nomeInferior30.push(addNome)

    }else{
        nomeSuperior30.push(addNome)
    }
}

alert(`A lista de nomes dos formandos para a colação de grau são: ${nomeInferior30},${nomeSuperior30}`)