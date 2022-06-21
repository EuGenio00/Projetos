/* No final do ano letivo, a turma de Desenvolvimento de Sistemas teve uma ideia para auxiliar os professores no lançamento das notas dos 15 alunos. O curso em questão adotava o critério de 0 a 10, sendo 7 ou mais a média para aprovar. Os alunos fizeram um sistema para os professores inserirem o nome dos alunos e suas 4 notas, em seguida já apresentar se o aluno estava aprovado ou reprovado. No final o sistema deveria parabenizar todos os alunos aprovados com uma mensagem de parabéns. */

let alunosTotal = 15
let addNome 
let addNotas
let somaNotas = 0
let media
let alunoAprovados = []

for(i=0; i < alunosTotal; i++){
    addNome = prompt(`Digite o nome do ${i+1}º aluno: `)
    
        for(a=0; a < 4; a++){
            addNotas = Number(prompt(`Digite a ${a+1}ª nota: `))
            while(addNotas < 0 || addNotas > 10){
                addNotas = Number(prompt(`Valor inválido! \nDigite novamente a ${a+1}ª nota: `))
            }

            somaNotas += addNotas
            media = somaNotas / 4
        }
        
        if(media >= 7){

            alunoAprovados.push(addNome) 

            alert(`Media ${media}: Aprovado!`)
    
        }else{

            alert(`Media ${media}: Reprovado!`)
        } 

    somaNotas = 0
    addNome = ''
        
} 
alert(`<<< PARABÉNS >>>\n\n${alunoAprovados.join(', ')}.\nOs alunos citados estão todos aprovados e de parabéns:)`)